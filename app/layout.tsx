import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "배관사무소 | 24시간 긴급 배관 서비스",
  description:
    "24시간 전국 어디든 30분 이내 긴급출동. 변기막힘, 싱크대막힘, 하수구역류, 누수탐지. 미해결시 비용 0원.",
  keywords: "배관, 하수구막힘, 변기막힘, 싱크대막힘, 누수, 배관수리, 24시간",
  openGraph: {
    title: "배관사무소 | 24시간 긴급 배관 서비스",
    description: "꽉 막힌 하수구, 한번에 해결해드립니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
