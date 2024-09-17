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
      <header className="relative w-full flex justify-between sm:p-[30px] lg:p-[30px_100px] items-center">
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

        <nav className="relative">
          {/* Laptop Nav menu */}
          <div className="hidden justify-center items-center lg:flex lg:gap-8 xl:gap-10 2xl:gap-12">
            {filteredRoutes.map((route) => (
              <Link href={route.path} key={route.id}>
                <span className="cursor-pointer text-black opacity-[50%] font-normal hover:opacity-100 hover:border-b-[1px] border-b-secondary pb-[7px] transition ease-in-out">
                  {route.name}
                </span>
              </Link>
            ))}
            <Link href="/ru" className="navLink">
              En|Uz
            </Link>
          </div>

          {/* Mobile Nav Menu */}
          <div className="md:relative lg:hidden">
            <div onClick={toggleNav} className="cursor-pointer">
              <Image
                src={isNavOpen ? "/img/x.png" : "/img/nav.png"}
                alt="robias"
                width={20}
                height={15}
              />
            </div>
            <div
              className={
                isNavOpen
                  ? "absolute md:w-full flex flex-col gap-[30px] bg-white p-5"
                  : "hidden"
              }
            >
              {filteredRoutes.map((route) => (
                <Link href={route.path} key={route.id}>
                  <span className="cursor-pointer text-black opacity-[50%] font-normal hover:opacity-100 hover:border-b-[1px] border-b-secondary pb-[7px] transition ease-in-out">
                    {route.name}
                  </span>
                </Link>
              ))}
              <Link href="/ru" className="navLink">
                En|Uz
              </Link>
            </div>
          </div>
        </nav>

        {/* Current Page Name */}
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
