import Link from "next/link";

const list = [
  "칼리멤버스",
  "마이컬리팜",
  "홈&리빙",
  "최저가도전",
  "라이브쇼핑",
  "컬리카드",
];

export default function Category() {
  return (
    <nav className="">
      <div className="flex gap-8 px-6 snap-mandatory overflow-x-auto">
        {list.map((item) => (
          <Link
            key={item}
            href="/"
            className="block w-[92px] snap-start text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
            <span className="text-sm">{item}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
