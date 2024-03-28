"use client";

import Image from "next/image";
import Link from "next/link";

import Background from "./ui/background";

export default function NavBar() {
  return (
    <header className="w-full min-h-[100px] h-auto flex flex-row fixed justify-between gap-4 py-6 px-8 z-30 backdrop-blur-sm bg-transparent dark:border-b-1 border-black_primary">
      <Background />

      <div className="h-auto">
        <Link
          href="https://magnideveloper.com"
          className="flex flex-row gap-3 items-center"
        >
          <div className="block dark:hidden">
            <Image
              alt="icon"
              src="https://magnideveloper.com/icons/icon-black.webp"
              width={50}
              height={50}
            />
          </div>
          <div className="hidden dark:block">
            <Image
              alt="Magni Developer"
              src="https://magnideveloper.com/icons/icon-white.webp"
              width={50}
              height={50}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-3xl z-40 text-black dark:text-white">
              Magni Developer
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
}
