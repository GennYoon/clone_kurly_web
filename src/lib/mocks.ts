export type ListProps = {
  id: number;
  url: string;
  image: string;
  title: string;
  price: number;
  discountPercent: number;
  discountPrice: number;
  review: number;
};

export const mockList: ListProps[] = [
  {
    id: 1,
    url: "",
    image:
      "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/a18c21f6-b6bc-4176-9f62-838e0e0ec4af.jpg",
    title: "[또보겠지떡볶이집] 오리지널 떡볶이 베이컨 볶음밥 세트",
    price: 11900,
    discountPercent: 15,
    discountPrice: 10115,
    review: 315,
  },
  {
    id: 2,
    url: "",
    image:
      "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/a6342fb9-6416-4db9-84a1-83d4e14b6c7a.jpg",
    title: "[비비고] 순살고등어구이 60g",
    price: 4980,
    discountPercent: 35,
    discountPrice: 3237,
    review: 100000,
  },
  {
    id: 3,
    url: "",
    image:
      "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/f5275bb6-340c-418c-8d54-8c72fe3d5ccb.jpg",
    title: "[KF365] DOLE 실속 바나나 2종",
    price: 3490,
    discountPercent: 14,
    discountPrice: 2990,
    review: 100000,
  },
  {
    id: 4,
    url: "",
    image:
      "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/02edd2c8-2b8b-49d7-a872-e6802aba5fa5.jpg",
    title: "[마즈] 몰티져스 초콜릿볼 버켓 3종 (택1)",
    price: 19980,
    discountPercent: 15,
    discountPrice: 16800,
    review: 399,
  },
  {
    id: 5,
    url: "",
    image:
      "https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/47c2c4cf-d25b-4188-bd92-1a006e37413e.jpg",
    title: "[이화수] 육개장 칼국수",
    price: 8900,
    discountPercent: 30,
    discountPrice: 6230,
    review: 184,
  },
];
