import Navigation, { NavLinkProps } from "@/components/navigation";

const navLinks: NavLinkProps[] = [
  { id: 1, href: "/beauty", title: "컬리추천" },
  { id: 2, href: "/beauty/collections/new", title: "신상품" },
  { id: 3, href: "/beauty/collections/best", title: "베스트" },
  { id: 4, href: "/beauty/collections/benefit", title: "특가/혜택" },
  { id: 5, href: "/beauty/collections/event", title: "브랜드관" },
];

export default function CollectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation navLinks={navLinks} />
      <main className="mt-11">{children}</main>
    </>
  );
}
