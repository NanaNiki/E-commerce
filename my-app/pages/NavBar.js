import { useState, useEffect, useRef } from "react";
import { castoro } from "./index.js";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar.js";
import { BsCart2 } from "react-icons/bs";
import { RxMagnifyingGlass, RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function NavBar() {
  const [miniNavOpen, setMiniNavOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);


  const toggleMiniNav = () => {
    setMiniNavOpen(!miniNavOpen);
  };

  const toggleSearchBar = () => {
    if (searchBarOpen === false) {
      setSearchBarOpen(true);
    }
  };

  return (
    <>
      <nav className="z-30 fixed top-0 left-0 h-14 w-screen p-2 flex flex-row bg-white">
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
          {miniNavOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
        <div
          className={` MINI-NAVBAR lg:hidden md:hidden sm:hidden absolute right-0 flex flex-col w-4/12 h-32 top-14 justify-center bg-stone-300 bg-opacity-100 ${
            miniNavOpen ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col justify-between items-center pt-5">
            <ul className={`flex flex-col justify-evenly ${castoro.className}`} onClick={() => setMiniNavOpen(false)}>
              <li>
                <Link
                  className="transition hover:text-stone-500 cursor-pointer"
                  href="/#start"
                  passHref
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-stone-500 cursor-pointer"
                  href={`/catalogue/all`}
                  passHref
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  className=" transition hover:text-stone-500 cursor-pointer"
                  href="https://github.com/NanaNiki"
                  passHref
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-row justify-end m-4">
              <button
                onClick={toggleSearchBar}
                className=" mx-2 text-xl text-stone-700 cursor-pointer hover:text-stone-500"
              >
                {searchBarOpen ? (
                  <RxCross1 className="text-lg mt-0.5" />
                ) : (
                  <RxMagnifyingGlass />
                )}
              </button>
              <BsCart2 className="mx-2 w-4 h-4 text-stone-700 cursor-pointer hover:text-stone-500" />
            </div>
          </div>
        </div>
        <div className="MAIN-NAVBAR hidden sm:flex flex-row w-full">
          <ul className="lg:mx-28 w-full flex flex-row m-auto justify-evenly">
            <li className="flex flex-col justify-around has-tooltip">
              <Link
                className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer"
                href="/#start"
                passHref
              >
                Home
                <span className="underline-animation flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </Link>
            </li>
            <li className="flex flex-col justify-around has-tooltip cursor-pointer">
              <Link
                className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer"
                href={`/catalogue/all`}
                passHref
              >
                Catalogue
                <span className="underline-animation flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </Link>
            </li>
            <li className="flex flex-col justify-around has-tooltip cursor-pointer">
              <Link
                className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer"
                href="https://github.com/NanaNiki"
                passHref
              >
                Contact
                <span className="underline-animation flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-row justify-end me-7">
            <button
              onClick={toggleSearchBar}
              className="my-auto me-4 text-2xl text-stone-400 cursor-pointer hover:text-stone-800"
            >
              {searchBarOpen ? (
                <RxCross1 className="text-xl mt-0.5" />
              ) : (
                <RxMagnifyingGlass />
              )}
            </button>
            <BsCart2 className="my-auto me-5 text-2xl text-stone-400 cursor-pointer hover:text-stone-800" />
          </div>
        </div>
      </nav>
      <div className={`${searchBarOpen ? "" : "hidden"} searchbar`}>
            <Searchbar setSearchBarOpen={setSearchBarOpen}  setMiniNavOpen={setMiniNavOpen} />
      </div>
    </>
  );
}
