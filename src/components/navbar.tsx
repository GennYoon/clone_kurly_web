"use client";

import { usePathname } from "next/navigation";

const not_views = ["/member/signin"];

export const Navbar = () => {
  const path = usePathname();
  if (not_views.includes(path)) return null;
  return <nav>test</nav>;
};
