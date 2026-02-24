import { NextRequest, NextResponse } from "next/server";
import { supabaseRest } from "@/lib/supabase";

export const runtime = "edge";

const THRESHOLD_1MIN = 3;
const THRESHOLD_1HOUR = 10;

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "0.0.0.0";
    const ua = (req.headers.get("user-agent") || "").slice(0, 512);
    const ref = req.headers.get("referer") || null;

    const isSuspect = await checkFraud(ip);

    await supabaseRest("page_visits", {
      method: "POST",
      role: "service_role",
      body: { ip, ua, ref, is_suspect: isSuspect },
    });

    if (Math.random() < 0.01) {
      cleanup().catch(() => {});
    }

    return NextResponse.json({ ok: true, suspect: isSuspect });
  } catch {
    return NextResponse.json({ ok: true });
  }
}

async function checkFraud(ip: string): Promise<boolean> {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

  const visits: { ts: string }[] =
    (await supabaseRest(
      `page_visits?ip=eq.${ip}&ts=gte.${oneHourAgo}&select=ts`,
      { role: "service_role" }
    )) || [];

  const oneMinAgo = Date.now() - 60_000;
  const recentCount = visits.filter(
    (v) => new Date(v.ts).getTime() > oneMinAgo
  ).length;

  if (recentCount >= THRESHOLD_1MIN) return true;
  if (visits.length >= THRESHOLD_1HOUR) return true;

  return false;
}

async function cleanup() {
  const cutoff = new Date(
    Date.now() - 30 * 24 * 60 * 60 * 1000
  ).toISOString();
  await supabaseRest(`page_visits?ts=lt.${cutoff}`, {
    method: "DELETE",
    role: "service_role",
  });
}
