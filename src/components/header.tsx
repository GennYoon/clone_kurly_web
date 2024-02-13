"use client";

import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import React from "react";

export type ShoppingType = "Market" | "Beauty";

export default function Header() {
  const [type, setType] = React.useState<ShoppingType>("Market");

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-11 bg-[#5F0080] text-white z-50">
      <Image
        className="absolute left-4"
        width={58}
        height={30}
        src={logo}
        alt="logo"
      />
      <div className="relative flex items-center h-7 text-sm bg-[#6F1A8C] rounded-full">
        <div className="absolute left-0 w-1/2 h-full bg-white rounded-full transition-all" />
        <label className="px-3 font-semibold text-[#5F0080] z-10">
          마켓컬리
        </label>
        <label className="px-3 font-semibold z-10">뷰티컬리</label>
      </div>
    </header>
  );
}
