import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center py-[100px]">
      <p className="font-bold text-[160px] lg:text-[300px]">
        4<span className="text-[#4619FB]">&#123;&#125;</span>4
      </p>
      <Link
        className="rounded-[50px] p-[20px_38px] text-white bg-black md:text-[28px] font-bold hover:bg-[#4619FB] transition-all delay-75 ease-in"
        href="/"
      >
        Go Home
      </Link>
      <span className="absolute hidden md:block top-[83%] md:right-[64%] 2xl:right-[57%] xl:right-[58%] lg:right-[60%]">
        <Image src="/img/Vector.png" alt="robias" width={250} height={160} />
      </span>
      <span className="absolute top-[82%] right-[65%] md:hidden">
        <Image
          src="/img/Vector-mobile.png"
          alt="robias"
          width={124}
          height={53}
        />
      </span>
    </div>
  );
}
