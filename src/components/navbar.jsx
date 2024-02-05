"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faLaptop,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useTheme } from "next-themes";

config.autoAddCss = false;

export default function NavBar() {
  // States
  const [isLoading, setIsLoading] = useState(false);

  // Inizializations
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full min-h-[100px] h-auto flex flex-row fixed justify-between gap-4 py-6 px-8 z-30 backdrop-blur-sm bg-gradient-to-r from-white_primary/90 to-gray_primary/90 dark:from-[#0a0a0a] dark:to-[#0a0a0a] dark:border-b-1 border-black_primary">
      <div className="h-auto">
        <Link
          href="https://magnideveloper.com"
          className="flex flex-row gap-3 items-center"
        >
          <div className="block dark:hidden">
            <Image
              alt="icon"
              src="/images/logo_black.png"
              width={50}
              height={50}
            />
          </div>
          <div className="hidden dark:block">
            <Image
              alt="icon"
              src="/images/logo_white.png"
              width={50}
              height={50}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-3xl z-40 text-black dark:text-white">Magni Developer</h1>
          </div>
        </Link>
      </div>

      <div>
        <Dropdown
          showArrow
          classNames={{
            base: "border border-gray_primary dark:border-black rounded-lg min-w-[260px]",
            arrow: "bg-gray_primary",
          }}
        >
          <DropdownTrigger>
            <Button isIconOnly isDisabled={isLoading ? true : false}>
              <FontAwesomeIcon icon={faGear} size="xl" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Menu actions" variant="faded">
            <DropdownItem key="theme" isReadOnly>
              <Select
                size="sm"
                label="Tema"
                variant="bordered"
                selectedKeys={[theme]}
              >
                <SelectItem
                  key="system"
                  onClick={() => setTheme("system")}
                  startContent={<FontAwesomeIcon icon={faLaptop} />}
                >
                  System
                </SelectItem>
                <SelectItem
                  key="dark"
                  onClick={() => setTheme("dark")}
                  startContent={<FontAwesomeIcon icon={faSun} />}
                >
                  Dark
                </SelectItem>
                <SelectItem
                  key="light"
                  onClick={() => setTheme("light")}
                  startContent={<FontAwesomeIcon icon={faMoon} />}
                >
                  Light
                </SelectItem>
              </Select>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
