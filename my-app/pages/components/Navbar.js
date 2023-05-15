import { useState } from "react";
import { castoro } from "../index.js";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar.js";
import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext.js";
import { BsCart2 } from "react-icons/bs";
import { RxMagnifyingGlass, RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function NavBar() {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const {
    miniNavOpen,
    setMiniNavOpen,
    shoppingCartOpen,
    toggleShoppingCart,
    cartItems,
  } = useContext(ShoppingCartContext);

  const cartItemsCount = cartItems.map((cartItem) => cartItem.quantity);
  const setCartItemsCount = cartItemsCount.reduce((a, b) => a + b, 0);

  const cartClass = setCartItemsCount > 0 ? "animate-bounce" : "opacity-0";
  const miniNavNotification =
    setCartItemsCount > 0 ? "opacity-100" : "opacity-0";

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
          className="text-stone-800 cursor-pointer text-xl flex flex-row w-screen justify-end z-20 m-auto lg:hidden md:hidden sm:hidden"
        >
          {miniNavOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
        <span
          className={`${miniNavNotification} relative flex h-3 w-3 me-6 lg:hidden md:hidden sm:hidden`}
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-800 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-900"></span>
        </span>
        <div
          className={` MINI-NAVBAR lg:hidden md:hidden sm:hidden absolute right-0 flex flex-col w-4/12 h-36 top-14 justify-center bg-stone-300 bg-opacity-100 ${
            miniNavOpen ? "slide-in" : "slide-out"
          }`}
        >
          <div className="flex flex-col justify-between items-center pt-5">
            <ul
              className={`flex flex-col justify-evenly ${castoro.className}`}
              onClick={() => setMiniNavOpen(false)}
            >
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
                  href={`../contact`}
                  passHref
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-row justify-end m-4 pb-3">
              <button
                onClick={toggleSearchBar}
                className=" mx-2 w-4 h-4 text-2xl mt-0.5 text-stone-700 cursor-pointer hover:text-stone-500"
              >
                {searchBarOpen ? <RxCross1 /> : <RxMagnifyingGlass />}
              </button>
              <button
                onClick={toggleShoppingCart}
                className="mx-2 w-4 h-4 text-2xl text-stone-700 cursor-pointer hover:text-stone-500"
              >
                {shoppingCartOpen ? <RxCross1 /> : <BsCart2 />}
              </button>
              <p
                className={`${cartClass} bg-stone-100 rounded-full px-0.5 h-4 w-4 text-sm text-center font-semibold`}
              >
                {setCartItemsCount}
              </p>
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
                href={`../contact`}
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
            <button
              onClick={toggleShoppingCart}
              className="my-auto text-2xl text-stone-400 cursor-pointer hover:text-stone-800"
            >
              {shoppingCartOpen ? (
                <RxCross1 className="text-xl mt-0.5" />
              ) : (
                <BsCart2 />
              )}
            </button>
            <p
              className={`${cartClass} bg-stone-300 rounded-full mt-6 h-5 w-5 text-sm text-center font-bold`}
            >
              {setCartItemsCount}
            </p>
          </div>
        </div>
      </nav>
      <div
        className={`${
          searchBarOpen ? "slide-in" : "slide-out"
        } searchbar fixed sm:top-14 top-44 right-0 z-20 h-screen sm:w-4/12 w-4/12 flex flex-col bg-stone-300 overflow-y-scroll `}
      >
        <Searchbar
          setSearchBarOpen={setSearchBarOpen}
          setMiniNavOpen={setMiniNavOpen}
        />
      </div>
    </>
  );
}
