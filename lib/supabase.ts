const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

type Role = "anon" | "service_role";

export async function supabaseRest(
  path: string,
  options: {
    method?: "GET" | "POST" | "DELETE" | "PATCH";
    body?: unknown;
    role?: Role;
    headers?: Record<string, string>;
  } = {}
) {
  const { method = "GET", body, role = "anon", headers: extra = {} } = options;
  const key = role === "service_role" ? SUPABASE_SERVICE_KEY : SUPABASE_ANON_KEY;

  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: method === "POST" ? "return=minimal" : "",
      ...extra,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase ${res.status}: ${text}`);
  }

  if (method === "POST" || method === "DELETE" || res.status === 204) return null;
  return res.json();
}
