"use client";

import { ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

export default function Header() {
  const [onFocus, setOnFocus] = useState(false);
  const activePage = usePathname();
  const getPageName = (pathname) =>
    ROUTES.filter((route) => route.path === pathname)[0]?.name ?? "Not Found";

  return (
    <>
      <header className="relative w-full flex justify-between p-[30px_100px] items-center">
        <Link href="/">
          <Image
            src="/img/_RB.png"
            width={66}
            height={30}
            alt="robias"
            className="text-purple-600"
          />
        </Link>

        <nav className="">
          <nav className="flex justify-center items-center gap-12">
            {ROUTES.map((route) => {
              if (route.path !== activePage) {
                return (
                  <Link href={route.path} key={route.id}>
                    <span className="cursor-pointer text-black opacity-[50%] font-normal hover:opacity-100 hover:border-b-[1px] border-b-secondary pb-[7px] transition ease-in-out">
                      {route.name}
                    </span>
                  </Link>
                );
              }
            })}
            <Link href="/ru" className="navLink">
              En|Uz
            </Link>
          </nav>
        </nav>

        <p
          className={cn(
            buttonVariants(),
            "absolute top-[29%] left-1/2 transform -translate-x-1/2 p-[15px_35px] hover:bg-primary text-3xl font-normal"
          )}
        >
          {getPageName(activePage)}
        </p>
      </header>
    </>
  );
}
