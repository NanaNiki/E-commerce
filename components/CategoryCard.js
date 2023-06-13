/**
 * This is a React component that renders a category card with plants data and links to individual
 * product pages.
 * @returns A React functional component that renders a section of the website displaying a category of
 * plants with their respective images, names, and prices. The component receives a prop called
 * categoriesData, which contains information about the category being displayed. The component filters
 * the plantsData array to only include the plants that belong to the category being displayed, and
 * then maps over this filtered array to render each plant's information.
 */
import { castoro } from "../pages/index.js";
import { inter } from "../pages/index.js";
import Link from "next/link";
import Image from "next/image.js";
import Categories from "./Categories.js";
import plantsData from "../data/plants.json";
import Soldout from "./Soldout.js";

export default function CategoryCard({ categoriesData }) {
  const categoryPlants = plantsData.filter(
    (plant) => plant[categoriesData.val] === true
  );

  return (
    <div id="">
      <div
        className={`mx-auto mt-14 flex w-fit flex-row py-5 text-center text-2xl font-bold sm:py-16 sm:text-3xl md:text-4xl lg:text-5xl ${castoro.className}`}
        id="catalogue"
      >
        {categoriesData.name}
      </div>
      <div className="m-auto mx-auto grid h-fit w-fit grid-cols-4 justify-start py-7 sm:flex sm:w-9/12 sm:flex-row sm:overflow-x-scroll sm:scroll-smooth sm:py-0">
        {categoryPlants.map((plant, index) => {
          return (
            <div key={index} className="flex w-fit shrink-0 flex-col">
              <Link
                href={`/product/${plant.id}`}
                aria-label="Go to see the product"
                passHref
              >
                <div className="relative"> {plant.soldout && <Soldout />} </div>
                <Image
                  src={plant.image}
                  width={220}
                  height={100}
                  alt={`Plant product ${plant.name}`}
                  className="inline-block duration-300 ease-in-out hover:scale-95 lg:mb-2"
                />
                <div
                  className={`flex flex-row p-1 text-end text-xs sm:text-sm md:text-base lg:justify-between ${inter.className}`}
                >
                  <h5 className="p1-2 lg:ps-0">{plant.name}</h5>{" "}
                  <h5 className="ps-2 font-bold lg:ps-0">{plant.price}€</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Categories />
    </div>
  );
}
