import { BsCart2 } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className="fixed top-0 left-0 h-14 w-full p-2 flex flex-row shadow-xl shadow-stone-300">
        <Image
          src="/plantealogo.svg"
          alt="logo"
          width={200}
          height={200}
          className="ms-2"
        />
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
      </nav>
    </>
  );
}
