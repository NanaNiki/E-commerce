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
        className={`mt-14 flex flex-row w-fit sm:py-16 py-5 mx-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-bold ${castoro.className}`}
        id="catalogue"
      >
        {categoriesData.name}
      </div>
      <div className="sm:flex sm:flex-row sm:w-9/12 sm:overflow-x-scroll sm:scroll-smooth sm:py-0 justify-start mx-auto grid grid-cols-4 w-fit h-fit m-auto py-7">
        {categoryPlants.map((plant, index) => {
          return (
            <div key={index} className="w-fit shrink-0 flex flex-col">
              <Link href={`/product/${plant.id}`} aria-label="Go to see the product" passHref>
                <div className="relative"> {plant.soldout && <Soldout />} </div>
                <Image
                  src={plant.image}
                  width={220}
                  height={100}
                  alt={`Plant product ${plant.name}`}
                  className="lg:mb-2 inline-block hover:scale-95 ease-in-out duration-300"
                />
                <div
                  className={` flex flex-row lg:justify-between p-1 text-end md:text-base sm:text-sm text-xs ${inter.className}`}
                >
                  <h5 className="p1-2 lg:ps-0">{plant.name}</h5>{" "}
                  <h5 className="font-bold ps-2 lg:ps-0">{plant.price}€</h5>
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
