/**
 * This is a React component that renders a search bar with live filtering of plant data based on user
 * input.
 * @returns A React component that renders a search bar with a list of filtered plants based on the
 * user's search term. The component also includes functionality to handle user input, form submission,
 * and clicking on a plant to navigate to its product page.
 */
import { useState, useEffect, useRef } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import plantsData from "../data/plants.json";
import Image from "next/image";
import Link from "next/link";

export default function Searchbar({ setSearchBarOpen, setMiniNavOpen }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);
  const searchBarRef = useRef(null);

  /** LEANRING NOTE
   * The some() method is used to determine if at least one tag includes the search term, 
   * ignoring case sensitivity. Without some(), using only filter() it would require an exact match
   * between the searchTerm and any of the tags in order for the plant object to be included in the 
   * filtered result. The parital matching is possible thanks to includes() method, which is used to 
   * check if a string includes another string as a substring (within).
   */
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
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
    setFilteredPlants([]);
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setSearchBarOpen(false);
        clearSearchTerm();
      }
    };
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [setSearchBarOpen, clearSearchTerm]);

  return (
    <div ref={searchBarRef} className="search-bar">
      <form
        className="sm:p-5 pt-5 mx-auto pb-2 flex place-items-start lg:w-7/12"
        onSubmit={handleFormSubmit}
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
          <RxMagnifyingGlass aria-label="search"/>
        </button>
      </form>
      <div className="overflow-y-scroll scroll-smooth">
        {filteredPlants.map((plant) => {
          return (
            <div
              key={plant.id}
              onClick={() => {
                setSearchBarOpen(false);
                setMiniNavOpen(false);
              }}
              className="flex flex-col"
            >
              <Link
                href={`/product/${plant.id}`}
                passHref
                aria-label="Go to see the product" 
                className="flex sm:flex-row flex-col sm:items-start items-center hover:scale-95 ease-in-out duration-300"
              >
                <Image
                  width={80}
                  height={80}
                  src={plant.image}
                  alt={plant.name}
                  className="p-2"
                  priority={true}
                />
                <div className="flex sm:flex-col sm:justify-normal flex-row my-auto">
                  <h2 className="font-bold sm:pe-0 pe-2">{plant.name}</h2>
                  <h3>{plant.price}€</h3>
                  <div className="hidden sm:flex flex-row justify-end">
                    <h5 className="text-sm opacity-40 italic">
                      #{plant.tags.join(" #")}
                    </h5>
                  </div>
                </div>
              </Link>
              <div className="w-full h-[1px] bg-stone-400 rounded-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
