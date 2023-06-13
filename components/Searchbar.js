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
        className="mx-auto flex place-items-start pb-2 pt-5 sm:p-5 lg:w-7/12"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder="Search by tags"
          value={searchTerm}
          onChange={handleInputChange}
          className="ms-2 w-8/12 rounded-s-full px-2 py-1 text-base sm:ms-8"
        />
        <button
          type="submit"
          className="h-8 rounded-e-full bg-white p-1 px-2 text-lg hover:text-stone-400"
        >
          <RxMagnifyingGlass aria-label="search" />
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
                className="flex flex-col items-center duration-300 ease-in-out hover:scale-95 sm:flex-row sm:items-start"
              >
                <Image
                  width={80}
                  height={80}
                  src={plant.image}
                  alt={plant.name}
                  className="p-2"
                  priority={true}
                />
                <div className="my-auto flex flex-row sm:flex-col sm:justify-normal">
                  <h2 className="pe-2 font-bold sm:pe-0">{plant.name}</h2>
                  <h3>{plant.price}€</h3>
                  <div className="hidden flex-row justify-end sm:flex">
                    <h5 className="text-sm italic opacity-40">
                      #{plant.tags.join(" #")}
                    </h5>
                  </div>
                </div>
              </Link>
              <div className="h-[1px] w-full rounded-full bg-stone-400"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
