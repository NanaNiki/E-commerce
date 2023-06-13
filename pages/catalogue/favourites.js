/**
 * The function displays a list of favourite plants with their images, names, and prices.
 * @returns A React component for displaying a list of favourite plants. It filters the plant data from
 * a JSON file to only include plants marked as favourites, and then maps over that filtered data to
 * display each plant's image, name, and price in a grid format. It also includes a Soldout component
 * to display over the image if the plant is sold out.
 */
import { castoro, inter } from "../index.js";
import Link from "next/link";
import Image from "next/image.js";
import plantsData from "../../data/plants.json";
import Soldout from "../../components/Soldout.js";
import { BsSuitHeart } from "react-icons/bs";

export default function Favourites() {
  const favouritePlants = plantsData.filter(
    (plant) => plant.favourites === true
  );

  return (
    <div id="favourites">
      <div
        className={` mx-auto my-10 flex w-fit flex-row pt-20 text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl ${castoro.className}`}
        id="catalogue"
      >
        Our Fa
        <BsSuitHeart className="mt-1.5 h-5 w-5 text-center lg:mt-2 lg:h-7 lg:w-7" />
        ourites
      </div>
      <div className="m-auto grid h-fit w-fit grid-cols-4 py-7">
        {favouritePlants.map((plant, index) => {
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
                  className={` flex flex-row p-1 text-end text-xs sm:text-sm md:text-base lg:justify-between ${inter.className}`}
                >
                  <h5 className="p1-2 lg:ps-0">{plant.name}</h5>{" "}
                  <h5 className="ps-2 font-bold lg:ps-0">{plant.price}€</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
