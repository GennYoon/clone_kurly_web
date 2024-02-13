import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Navigation from "@/components/navigation";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#5F0080",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "컬리 - 마켓컬리/뷰티컬리",
  description:
    "Better Life for All. 건강한 식재료부터 믿을 수 있는 뷰티, 라이프스타일 상품까지. 나와 내 가족이 사고 싶은 상품을 판매합니다. 내일 아침 문 앞에서 만나요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
