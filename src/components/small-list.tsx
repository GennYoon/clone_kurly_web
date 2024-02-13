import Link from "next/link";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";
import { ListProps } from "@/lib/mocks";
import Image from "next/image";

export type SmallListProps = {
  title: string;
  desc?: string;
  list: ListProps[];
};

export default function SmallList({ title, desc, list }: SmallListProps) {
  return (
    <section className="w-full py-8">
      <div className="relative w-full px-4 pb-4">
        <Link
          href="/"
          className="absolute flex top-0 right-4 text-[#5F0080] font-semibold"
        >
          <span>전체보기</span>
          <ChevronRight />
        </Link>
        <h3 className="text-xl font-bold">{title}</h3>
        {desc && <p className="text-gray-400">{desc}</p>}
      </div>
      <div className="flex gap-2 snap-mandatory overflow-x-auto scroll-m-0">
        {list.map((item) => (
          <Link
            key={item.id}
            href="/"
            className="block snap-start max-w-[16px + 40vw] pl-4"
          >
            <div className="min-w-[40vw]">
              <div className="relative pt-[130%] mb-2 rounded-md overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  className="absolute top-0"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <button className="w-full mb-2 py-2 border rounded-md">
                담기
              </button>
              <p className="pb-1">
                [또보겠지떡볶이집] 오리지널 떡볶이 베이컨 볶음밥 세트
              </p>
              <p className="text-sm line-through text-gray-400">
                {item.price}원
              </p>
              <p className="pb-2">
                <span className="font-bold text-red-600">
                  {item.discountPercent}%
                </span>
                <span className="pl-2 font-bold">{item.discountPrice}원</span>
              </p>
              <p className="text-sm text-gray-400">{item.review}</p>
            </div>
          </Link>
        ))}
        <Link href="/" className="block snap-start px-4">
          <div className="">
            <span>더보기</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
