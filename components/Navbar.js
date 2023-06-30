"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [openHamburger, toggleHamburger] = useState(false);
  const hamburgerMenu = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    console.log(darkMode);
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark").matches);
  }, []);

  function handleHamburgerInteraction() {
    if (
      hamburgerMenu.current.classList.contains("defaultHamburger") ||
      hamburgerMenu.current.classList.contains("hideHamburger")
    ) {
      hamburgerMenu.current.classList.remove("defaultHamburger");
      hamburgerMenu.current.classList.remove("hideHamburger");
      hamburgerMenu.current.classList.add("showHamburger");
    } else if (hamburgerMenu.current.classList.contains("showHamburger")) {
      hamburgerMenu.current.classList.remove("showHamburger");
      hamburgerMenu.current.classList.add("hideHamburger");
    }
  }

  function handleAnim({ target }) {
    if (target.classList.contains("hideHamburger")) {
      console.log("we are hiding the hamburger");
    }
    if (target.classList.contains("showHamburger")) {
      console.log("the hamburger has appeared");
    }
  }

  return (
    <div className="flex sticky bg-[#1C1C1E] top-0 z-10 items-center justify-between px-5 max-w-screen-lg mx-auto py-2  font-lobsterTwo italic">
      <div className="group">
        <Image
          className="inline-block rotate-45 transition-all duration-200 ease-in-out group-hover:rotate-[180deg]"
          src="./icons/rocket2.svg"
          alt="logo"
          width={30}
          height={30}
        />
        <Link href="/">
          <h1 className="inline-block ml-5 font-bold text-2xl">
            Christopher Saffron
          </h1>
        </Link>
      </div>
      <div className="relative flex gap-6">
        <div
          onClick={() => {
            changeTheme(darkMode === true ? "light" : "dark");
            setDarkMode(!darkMode);
          }}
          className="relative hover:cursor-pointer p-4 border-gray-500 border rounded-md w-11 h-11"
        >
          <Image
            className={`${
              darkMode ? "iconHide" : "iconShow"
            } object-contain p-2`}
            fill
            src="./icons/sun.svg"
            alt="menu"
          />
          <Image
            className={`${
              darkMode ? "iconShow" : "iconHide"
            } object-contain p-2`}
            fill
            src="./icons/moon.svg"
            alt="menu"
          />
        </div>
        <div
          onClick={() => {
            handleHamburgerInteraction();
          }}
          className="relative hover:cursor-pointer p-4 border-gray-500 border rounded-md w-11 h-11"
        >
          <Image
            className="object-contain p-2"
            fill
            src="./icons/hamburger2.svg"
            alt="menu"
          />
          <div
            ref={hamburgerMenu}
            onAnimationEnd={handleAnim}
            className="absolute defaultHamburger
             flex flex-col gap-3 font-serif border border-[#9995951c] rounded-sm bg-[#1c1c1c] w-40 text-xl"
          >
            <Link
              href="/works"
              className="underline transition duration-100 py-2 px-4 border-y border-transparent hover:border-[#5f5f5f] rounded-sm hover:bg-[#3a3a3a]"
            >
              Projects
            </Link>
            <Link
              href="/"
              className="underline transition duration-100 py-2 px-4 border-y border-transparent hover:border-[#5f5f5f] rounded-sm hover:bg-[#3a3a3a]"
            >
              Posts
            </Link>
            <Link
              href="/"
              className="underline transition duration-100 py-2 px-4 border-y border-transparent hover:border-[#5f5f5f] rounded-sm hover:bg-[#3a3a3a]"
            >
              About me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
