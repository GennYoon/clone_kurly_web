import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const viewport: Viewport = {
  // themeColor: "#5F0080",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "컬리 - 마켓컬리/뷰티컬리",
  description:
    "Better Life for All. 건강한 식재료부터 믿을 수 있는 뷰티, 라이프스타일 상품까지. 나와 내 가족이 사고 싶은 상품을 판매합니다. 내일 아침 문 앞에서 만나요!",
  icons: {
    icon: "https://res.kurly.com/favicon.ico",
  },
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
          "min-h-dvh bg-background font-sans antialiased",
          pretendard,
        )}
      >
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
