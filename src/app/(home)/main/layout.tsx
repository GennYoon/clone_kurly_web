import Navigation, { NavLinkProps } from "@/components/navigation";

const navLinks: NavLinkProps[] = [
  { id: 1, href: "/main", title: "컬리추천" },
  { id: 2, href: "/main/collections/new", title: "신상품" },
  { id: 3, href: "/main/collections/best", title: "베스트" },
  { id: 4, href: "/main/collections/sales", title: "알뜰쇼핑" },
  { id: 5, href: "/main/collections/benefit", title: "특가/혜택" },
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
