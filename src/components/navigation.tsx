import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-11 left-0 right-0 flex items-center justify-between w-full h-11 px-4 bg-white z-50">
      <Link href="/">
        <span className="text-[#5F0080] font-semibold">컬리추천</span>
      </Link>
      <Link href="/">
        <span className="text-[#666]">신상품</span>
      </Link>
      <Link href="/">
        <span className="text-[#666]">베스트</span>
      </Link>
      <Link href="/">
        <span className="text-[#666]">알뜰쇼핑</span>
      </Link>
      <Link href="/">
        <span className="text-[#666]">특가/혜택</span>
      </Link>
      <span className="absolute left-4 w-14 h-[2px] bottom-0 bg-[#5F0080]" />
    </nav>
  );
}
