"use client";

import Image from "next/image";
import Logo from "@/assets/svg/logo.svg";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const not_views = ["/member/signin", "/member/signup"];

export default function Header() {
  const path = usePathname();
  const isBeauty = React.useMemo(() => path.includes("beauty"), [path]);

  if (not_views.includes(path)) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 flex items-center justify-center w-full h-11 z-50 transition-all",
        isBeauty ? "bg-white text-gray-600" : "bg-[#5F0080] text-white",
      )}
    >
      <Logo
        className={cn(
          "absolute left-4 transition-all",
          isBeauty ? "fill-[#5F0080]" : "fill-white",
        )}
      />

      <div
        className={cn(
          "relative flex items-center h-7 text-sm rounded-full",
          isBeauty ? "bg-gray-100" : "bg-[#6F1A8C]",
        )}
      >
        <div
          className={cn(
            "absolute w-1/2 h-full rounded-full transition-all",
            isBeauty ? "left-1/2 bg-[#5F0080]" : "left-0 bg-white ",
          )}
        />
        <Link href="/" className="z-10">
          <label
            className={cn(
              "px-3 font-semibold",
              isBeauty ? "text-gray-600" : "text-[#5F0080]",
            )}
          >
            마켓컬리
          </label>
        </Link>
        <Link href="/beauty" className="z-10">
          <label className={cn("px-3 font-semibold text-white")}>
            뷰티컬리
          </label>
        </Link>
      </div>
    </header>
  );
}
