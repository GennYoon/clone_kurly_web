import MainBanner from "@/components/main-banner";
import Category from "@/components/category";
import SmallList from "@/components/small-list";
import { mockMarketList } from "@/lib/mocks";

export default function HomePage() {
  return (
    <div>
      <MainBanner />

      <SmallList
        title="지금 가장 많이 담는 특가🧐"
        desc="컬리 추천 특가템 최대 50%"
        list={mockMarketList}
      />

      <Category />

      <SmallList
        title="💝발렌타인데이 D-1⚡"
        desc="아직 늦지 않았어요! 3천원 깜짝 쿠폰 지급"
        list={mockMarketList}
      />

      <SmallList title="놓치면 후회할 가격" list={mockMarketList} />

      <SmallList
        title="💄샛별로 받는 뷰티 발렌타인🌹"
        desc="한정기획 최대 72%+브랜드관, 아직 늦지 않았어요!"
        list={mockMarketList}
      />
    </div>
  );
}
