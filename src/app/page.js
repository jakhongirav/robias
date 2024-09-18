import Header from "@/components/Header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-[30px] lg:px-[100px] py-[200px] flex flex-col items-baseline sm:items-center">
      <h1 className="font-bold p-0">
        <span className="text-[#4619FB] text-[75px] sm:text-[150px] leading-[86px] sm:leading-[172px] tracking-[-10px] sm:tracking-[-20px]">
          *
        </span>
        <span className="text-[75px] sm:text-[150px] leading-[86px] sm:leading-[172px] tracking-[-10px] sm:tracking-[-20px]">
          ROBIA&apos;S BLOG
        </span>
      </h1>
      <p className="font-normal text-[16px] text-[#4619FB] sm:text-[30px]">
        I write the program code and I write about the code, so take a look :)
      </p>
      <div className="flex w-[90%] xl:w-[80%] 2xl:w-[60%] gap-[30px] sm:justify-between sm:gap-0 mt-[50px]">
        <Link
          href="/"
          className="sm:p-[20px_35px] text-[20px] sm:text-[28px] leading-8 font-normal text-white bg-black p-[15px_20px] rounded-[50px] hover:bg-[#4619FB] hover:text-white transition-all delay-75 ease-in"
        >
          Read Blog
        </Link>
        <Link
          href="/"
          className="text-black text-[20px] sm:p-[20px_35px] sm:text-[28px] leading-8 font-normal border border-black p-[15px_20px] rounded-[50px] hover:border-[#4619FB] hover:text-[#4619FB] transition-all delay-75 ease-in"
        >
          About me
        </Link>
      </div>
    </div>
  );
}
