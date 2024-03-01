import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const SignInPage = () => {
  return (
    <div className="py-12">
      <header className="flex items-center justify-center h-11 px-12">
        <h1 className="text-2xl font-bold">로그인</h1>
      </header>
      <section className="py-10 px-6">
        <form>
          <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden">
            <input
              type="text"
              className="h-12 px-4 border-b border-x-transparent border-t-transparent rounded-none outline-none"
              placeholder="아이디 입력"
            />
            <input
              type="password"
              className="h-12 px-4 border-none rounded-none outline-none"
              placeholder="비밀번호 입력"
            />
          </div>

          <div className="mt-6">
            <input type="checkbox" />
            <label> 아이디 저장</label>
          </div>
          <button
            aria-label="signin"
            className="block w-full h-12 mt-6 rounded-lg font-bold text-white bg-[#5f0080] border border-[#5f0080]"
          >
            로그인
          </button>
        </form>

        <Link
          href="/member/signup"
          aria-label="signup"
          className="flex justify-center items-center w-full h-12 mt-2 rounded-lg font-bold text-[#5f0080] bg-white border border-[#5f0080]"
        >
          회원가입
        </Link>

        <div className="flex h-5 mt-6 items-center justify-center gap-2">
          <Link href="" className="text-sm text-[#999999]">
            아이디 찾기
          </Link>

          <Separator orientation="vertical" className="h-full" />

          <Link href="" className="text-sm text-[#999999]">
            비밀번호 찾기
          </Link>
        </div>

        <Separator className="mt-6" />

        <p className="text-center mt-6">
          카카오로 <strong className="text-[#5f0080]">간편하게</strong>{" "}
          시작하세요
        </p>

        <button className="block w-full h-12 mt-6 rounded-lg font-bold text-[#191919] bg-[#fee500] border border-[#fee500]">
          카카오로 시작하기
        </button>
      </section>
    </div>
  );
};

export default SignInPage;
