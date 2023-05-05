import { BsCart2 } from "react-icons/bs";
import { RxMagnifyingGlass, RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isMiniNavOpen, setIsMiniNavOpen] = useState(false);

  return (
    <>
      <nav className="z-20 fixed top-0 left-0 h-14 w-full p-2 flex flex-row bg-white">
        <Image
          src="/plantealogo.svg"
          alt="logo"
          width={200}
          height={200}
          className="ms-2"
        />
        <section className="mobile-nav flex flex-col justify-between items-center bg-stone-400 opacity-20 lg:hidden">
          <RxHamburgerMenu
            onClick={() => setIsMiniNavOpen((prev) => !prev)}
            className="text-stone-800"
          />
          <div className="flex flex-row justify-end me-2">
            <RxMagnifyingGlass className="my-auto mx-2 w-4 h-4 text-stone-700 cursor-pointer" />
            <BsCart2 className="my-auto mx-2 w-4 h-4 text-stone-700 cursor-pointer" />
          </div>
          <ul className="flex flex-col">
            <li>Home</li>
            <li>Catalogue</li>
            <li>Contact</li>
          </ul>
          <RxCross1
            onClick={() => setIsMiniNavOpen(false)}
            className="text-stone-800"
          />
        </section>
        {/** isMiniNavOpen ? "showMobileNav" : "hideMobileNav" */}
        <div className="special-main-nav-hide flex flex-row w-full">
          <ul className="lg:mx-28 w-full flex flex-row m-auto justify-evenly">
            <li className="flex flex-col justify-around has-tooltip">
              <a className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer">
                Home
                <span className="underline-special flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </a>
            </li>
            <li className="flex flex-col justify-around has-tooltip cursor-pointer">
              <a className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer">
                Catalogue
                <span className="underline-special flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </a>
            </li>
            <li className="flex flex-col justify-around has-tooltip cursor-pointer">
              <a className="ms-2 me-2 lg:text-base transition hover:text-stone-500 cursor-pointer">
                Contact
                <span className="underline-special flex w-full h-[0.5px] bg-stone-500 rounded-full opacity-0 -translate-x-full blur-sm"></span>
              </a>
            </li>
          </ul>
          <div className="flex flex-row justify-end me-2">
            <RxMagnifyingGlass className="my-auto mx-2 w-6 h-6 text-stone-400 cursor-pointer hover:text-stone-800" />
            <BsCart2 className="my-auto mx-2 w-6 h-6 text-stone-400 cursor-pointer hover:text-stone-800" />
          </div>
        </div>
      </nav>
    </>
  );
}
