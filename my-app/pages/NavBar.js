import { BsCart2 } from "react-icons/bs";
import { RxMagnifyingGlass, RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { castoro } from "./index.js";

export default function NavBar() {
  const [isMiniNavActive, setIsMiniNavActive] = useState(false);

  const toggleMiniNav = () => {
    setIsMiniNavActive((prev) => !prev);
  };

  return (
    <>
      <nav className="z-20 fixed top-0 left-0 h-14 w-screen p-2 flex flex-row bg-white">
        <Link href="/" passhref>
          <Image
            src="/plantealogo.svg"
            alt="logo"
            width={200}
            height={200}
            className="ms-2"
          />
        </Link>
        <button
          onClick={toggleMiniNav}
          className="text-stone-800 cursor-pointer flex flex-row w-screen justify-end z-20 m-auto me-10 lg:hidden md:hidden sm:hidden"
        >
          {isMiniNavActive ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
        <div
          className={` absolute right-0 pt-12 flex flex-col justify-center ${
            isMiniNavActive ? "visible" : "invisible"
          }`}
        >
          <div className="mininavbar flex flex-col justify-between items-center h-full w-full p-4 bg-stone-300 bg-opacity-100 lg:hidden md:hidden sm:hidden">
            <div className="flex flex-row justify-end m-4">
              <RxMagnifyingGlass className=" mx-2 w-4 h-4 text-stone-700 cursor-pointer hover:text-stone-500" />
              <BsCart2 className="mx-2 w-4 h-4 text-stone-700 cursor-pointer hover:text-stone-500" />
            </div>
            <ul className={`flex flex-col justify-evenly ${castoro.className}`}>
              <li>
                <Link className="transition hover:text-stone-500 cursor-pointer" href="/#start" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-stone-500 cursor-pointer" href={`/catalogue/all`} passHref>
                  Catalogue
                </Link>
              </li>
              <li>
                <Link className=" transition hover:text-stone-500 cursor-pointer" href="https://github.com/NanaNiki" passHref>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:flex flex-row w-full">
          <ul className="lg:mx-28 w-full flex flex-row m-auto justify-evenly">
            <li className="flex flex-col justify-around has-tooltip">
              <Link
                className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer"
                href="/#start" passHref
              >
                Home
                <span className="underline-animation flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </Link>
            </li>
            <li className="flex flex-col justify-around has-tooltip cursor-pointer">
              <Link
                className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer"
                href={`/catalogue/all`} passHref
              >
                Catalogue
                <span className="underline-animation flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </Link>
            </li>
            <li className="flex flex-col justify-around has-tooltip cursor-pointer">
              <Link className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer" href="https://github.com/NanaNiki" passHref>
                Contact
                <span className="underline-animation flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-row justify-end me-7">
            <RxMagnifyingGlass className="my-auto me-4 w-6 h-6 text-stone-400 cursor-pointer hover:text-stone-800" />
            <BsCart2 className="my-auto me-5 w-6 h-6 text-stone-400 cursor-pointer hover:text-stone-800" />
          </div>
        </div>
      </nav>
    </>
  );
}
