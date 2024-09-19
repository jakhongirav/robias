"use client";

import { ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

export default function Header() {
  const activePage = usePathname();

  // Mobile Nav MenuFunc
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle navigation menu
  const toggleNav = () => setIsNavOpen((prev) => !prev);

  // Get current page name
  const getPageName = (pathname) =>
    ROUTES.find((route) => route.path === pathname)?.name || "Not Found";

  // Memoize filtered routes to prevent unnecessary recalculation
  const filteredRoutes = useMemo(
    () => ROUTES.filter((route) => route.path !== activePage),
    [activePage]
  );

  return (
    <>
      <header className="relative w-full flex justify-between p-[30px] lg:p-[40px_100px] items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/img/_RB.png"
            width={66}
            height={30}
            alt="robias"
            className="text-purple-600"
          />
        </Link>

        <nav>
          {/* Laptop Nav menu */}
          <div className="hidden justify-center items-center lg:flex lg:gap-[25px] xl:gap-[35px]">
            {filteredRoutes.map((route) => (
              <Link href={route.path} key={route.id}>
                <span className="cursor-pointer text-black opacity-[50%] font-normal hover:opacity-100 hover:border-b-[1px] border-b-secondary pb-[7px] transition ease-in-out 2xl:text-[25px]">
                  {route.name}
                </span>
              </Link>
            ))}
            <Link
              href="/ru"
              className="font-normal text-black text-[24px] 2xl:text-[25px]"
            >
              En|Uz
            </Link>
          </div>

          {/* Mobile Nav Menu */}
          <div className="lg:hidden">
            <div onClick={toggleNav} className="cursor-pointer">
              <Image
                className="transition-all duration-300 ease-in-out"
                src={isNavOpen ? "/img/x.png" : "/img/nav.png"}
                alt="robias"
                width={20}
                height={20}
              />
            </div>
            <div
              className={`absolute right-0 top-[100%] w-full md:w-40 z-10 bg-white p-5 flex flex-col items-end gap-[30px] md:gap-5 transition-transform transform origin-top ${
                isNavOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 pointer-events-none"
              } duration-300 ease-in-out`}
            >
              {filteredRoutes.map((route) => (
                <Link href={route.path} key={route.id}>
                  <span className="cursor-pointer text-black lg:opacity-[50%] font-normal text-[22px] lg:text-xl hover:opacity-100 hover:border-b-[1px] border-b-secondary pb-[7px] transition-opacity duration-200 ease-in-out">
                    {route.name}
                  </span>
                </Link>
              ))}
              <Link
                href="/ru"
                className="font-normal text-black text-[24px] 2xl:text-[25px]"
              >
                En|Uz
              </Link>
            </div>
          </div>
        </nav>

        {/* Current Page Name */}
        <p className="absolute top-[20%] sm:top-[22%] left-1/2 text-white transform -translate-x-1/2 p-[15px_35px] text-[20px] sm:text-3xl  font-normal rounded-[50px] bg-black">
          {getPageName(activePage)}
        </p>
      </header>
    </>
  );
}
