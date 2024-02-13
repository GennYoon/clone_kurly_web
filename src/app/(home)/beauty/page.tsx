import MainBanner from "@/components/main-banner";
import SmallList from "@/components/small-list";
import { mockBeautyList } from "@/lib/mocks";

export default function BeautyPage() {
  return (
    <div>
      <MainBanner />

      <SmallList
        title="💄샛별로 받는 뷰티 발렌타인🌹"
        desc="한정기획 최대 72%+브랜드관, 아직 늦지 않았어요!"
        list={mockBeautyList}
      />

      <SmallList
        title="이주의 혜택✨"
        desc="지금 만날 수 있는 혜택 상품만 모아"
        list={mockBeautyList}
      />
    </div>
  );
}
