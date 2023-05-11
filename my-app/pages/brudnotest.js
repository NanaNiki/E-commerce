import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { RxMagnifyingGlass } from "react-icons/rx";
import plantsData from "./product/plants.json";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [serachbarOpen, setSerachbarOpen] = useState(true);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (!event.target.closest(".searchbar")) {
        setSerachbarOpen(false);
      }
    }
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const newFilteredPlants = plantsData.filter((plant) =>
        plant.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredPlants(newFilteredPlants);
    } else {
      setFilteredPlants([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setSerachbarOpen(true)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    serachbarOpen && ( 
    <div className="searchbar sm:absolute right-0 z-20 sm:pt-14 sm:h-screen sm:w-4/12 sm:flex flex-col bg-stone-300 ">
      <form
        className="sm:p-5 mx-auto pb-2 flex place-items-start lg:w-7/12"
        onSubmit={handleFormSubmit}
        onFocus={() => setSerachbarOpen(true)}
      >
        <input
          type="text"
          placeholder="Search by tags"
          value={searchTerm}
          onChange={handleInputChange}          
          className="rounded-s-full px-2 py-1 text-base w-8/12 sm:ms-8 ms-2"
        />
        <button
          type="submit"
          className="p-1 px-2 h-8 text-lg bg-white rounded-e-full hover:text-stone-400"
        >
          <RxMagnifyingGlass />
        </button>
      </form>
      <SearchResults filteredPlants={filteredPlants} />
    </div>
    ) 
  );
}



import { useState } from "react";
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
    setMiniNavOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearchBarOpen((prev) => !prev);
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
          className={` mininavbar absolute right-0 flex flex-col w-4/12 mt-12 justify-center bg-stone-300 bg-opacity-100 ${
            miniNavOpen ? "visible" : "invisible"
          }`}
        >
          <div className="flex flex-col justify-between items-center pt-3 lg:hidden md:hidden sm:hidden">
            <ul className={`flex flex-col justify-evenly ${castoro.className}`}>
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
              <button onClick={toggleSearch}>
                <RxMagnifyingGlass className=" mx-2 w-4 h-4 text-stone-700 cursor-pointer hover:text-stone-500" />
              </button>
              <BsCart2 className="mx-2 w-4 h-4 text-stone-700 cursor-pointer hover:text-stone-500" />
            </div>
            <Searchbar searchBarOpen={searchBarOpen} />
          </div>
        </div>
        <div className="navbar-main hidden sm:flex flex-row w-full">
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
            <button onClick={toggleSearch}>
              <RxMagnifyingGlass className="my-auto me-4 w-6 h-6 text-stone-400 cursor-pointer hover:text-stone-800" />
            </button>
            <BsCart2 className="my-auto me-5 w-6 h-6 text-stone-400 cursor-pointer hover:text-stone-800" />
          </div>
        </div>
      </nav>
      <Searchbar searchBarOpen={searchBarOpen} />
    </>
  );
}

