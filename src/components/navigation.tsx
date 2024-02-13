"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export type NavLinkProps = {
  id: number;
  href: string;
  title: string;
};

export default function Navigation({ navLinks }: { navLinks: NavLinkProps[] }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  const calcPosition = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (ref === null) return;
    const { x, width } = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty("left", `${x}px`);
    ref.current?.style.setProperty("width", `${width}px`);
  };

  return (
    <nav className="sticky top-11 left-0 right-0 flex items-center justify-between w-full h-11 px-4 bg-white z-50">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link href={link.href} key={link.title} onClick={calcPosition}>
            <span className={cn(isActive && "text-[#5F0080] font-semibold")}>
              {link.title}
            </span>
          </Link>
        );
      })}
      <span
        ref={ref}
        className="absolute left-4 w-14 h-[2px] bottom-0 bg-[#5F0080] transition-all ease-linear duration-150 will-change-auto"
      />
    </nav>
  );
}
