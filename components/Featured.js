/**
 * The Featured function displays a section of the website showcasing a selection of favorite plants
 * with their images, names, and prices.
 * @returns The Featured component is being returned, which contains JSX elements and uses data from
 * the plantsData JSON file to display featured plants.
 */
import { castoro } from "../pages/index.js";
import Image from "next/image.js";
import plantsData from "../data/plants.json";
import Link from "next/link.js";
import Soldout from "./Soldout.js";

export default function Featured() {
  const favouritePlants = plantsData
    .filter((plant) => plant.favourites === true)
    .slice(0, 3);
  return (
    <section className="ms-6 h-full" id="featured">
      <div className="m-auto flex flex-col justify-center p-10 text-center text-xl sm:p-16 sm:text-2xl md:p-20 md:text-3xl lg:p-32 lg:text-4xl">
        <h1 className={` lg:mb-3 ${castoro.className}`}>
          Love and work are to people what water
        </h1>
        <h1 className={` ${castoro.className}`}>and sunshine are to plants</h1>
      </div>

      <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap">
        <div className="flex flex-col justify-center pb-8 md:px-8 lg:w-1/3 lg:ps-20">
          <h1
            className={` mb-5 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl ${castoro.className}`}
          >
            Featured
          </h1>
          <span className="text-xs sm:text-sm md:text-base lg:text-xl">
            <p>Our plants are 100% organic,</p>
            <p>we don't use pesticides or</p>{" "}
            <p className="mb-4">harmful chemicals.</p>
            But please don't eat them
          </span>
          <Link
            className="hidden h-10 w-40 cursor-pointer bg-stone-200 pt-2 text-center text-sm font-bold underline underline-offset-4 transition-all duration-200 hover:animate-bounce hover:bg-stone-500 hover:text-stone-50 sm:my-3 sm:block md:my-5 lg:my-10"
            href={"/catalogue/favourites"}
            passHref
          >
            Shop all Favourites
          </Link>
        </div>
        <div className="flex justify-center overflow-x-scroll scroll-smooth md:justify-start">
          {favouritePlants.map((plant, index) => {
            return (
              <div
                key={index}
                className="flex flex-col sm:me-8 lg:me-6 lg:flex-shrink-0"
              >
                <Link
                  href={`/product/${plant.id}`}
                  aria-label="Go to see the product"
                  passHref
                >
                  <div className="relative">
                    {plant.soldout && <Soldout />}{" "}
                  </div>
                  <Image
                    src={plant.image}
                    width={270}
                    height={500}
                    alt={`Plant product ${plant.name}`}
                    className="inline-block duration-300 ease-in-out hover:scale-95"
                  />
                  <div
                    className={` flex flex-row justify-between p-2 text-end text-xs sm:text-sm md:text-base lg:text-xl ${castoro.className}`}
                  >
                    <h5>{plant.name}</h5> <h5>{plant.price}€</h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex w-screen flex-row justify-end sm:hidden md:hidden lg:hidden">
          <Link
            className="m-4 h-10 w-40 cursor-pointer bg-stone-200 pt-3 text-center text-xs font-bold underline underline-offset-4 transition-all duration-200 hover:animate-bounce hover:bg-stone-500 hover:text-stone-50"
            href={"/catalogue/favourites"}
            passHref
          >
            Shop all Favourites
          </Link>
        </div>
      </div>
    </section>
  );
}
