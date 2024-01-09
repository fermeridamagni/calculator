"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full min-h-[100px] h-auto flex flex-row fixed justify-between gap-4 py-6 px-8 z-30 backdrop-blur-sm bg-gradient-to-r from-white-primary/90 to-gray-primary/90">
      <div className="h-auto">
        <Link href="https://magnideveloper.com" className="flex flex-row gap-3 items-center">
          <div>
            <Image
              alt="icon"
              src="/images/logo_black.png"
              width={50}
              height={50}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-3xl text-black z-40">Magni Developer</h1>
          </div>
        </Link>
      </div>
    </nav>
  );
}
