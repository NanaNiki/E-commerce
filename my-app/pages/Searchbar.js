import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { RxMagnifyingGlass } from "react-icons/rx";
import plantsData from "./product/plants.json";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    if (searchTerm) {
        const newFilteredPlants = plantsData.filter((plant) =>
        plant.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())));
        setFilteredPlants(newFilteredPlants)
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

  return (
    <div className="searchbar sm:absolute right-0 z-20 sm:pt-14 sm:h-screen sm:w-4/12 sm:flex flex-col bg-stone-300 ">
      <form
        className="sm:p-5 mx-auto pb-2 flex place-items-start lg:w-7/12"
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
          <RxMagnifyingGlass />
        </button>
      </form>
      <SearchResults filteredPlants={filteredPlants} />
    </div>
  );
}
