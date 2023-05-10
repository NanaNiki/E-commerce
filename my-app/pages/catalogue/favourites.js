import { castoro } from "../index.js";
import { inter } from "../index.js";
import Link from "next/link";
import Image from "next/image.js";
import plantsData from "../product/plants.json";
import { BsSuitHeart } from "react-icons/bs";

export default function Favourites() {
  const favTegCheck = () => {
    const favouritePlants = plantsData.filter(
      (plant) => plant.favourites === true
    );
    return favouritePlants.map((plant, index) => {
      return (
        <div key={index} className="w-fit lg:pe-6 shrink-0">
          <Link href={`/product/${plant.id}`} passHref target="_parent">
            <Image
              src={plant.image}
              width={270}
              height={100}
              alt={`Plant product ${plant.name}`}
              className="lg:mb-2 inline-block hover:scale-95 ease-in-out duration-300"
            />
            <div
              className={` flex flex-row lg:justify-between p-1 text-end md:text-base sm:text-sm text-xs ${inter.className}`}
            >
              <h5 className="p1-2 lg:ps-0">{plant.name}</h5>{" "}
              <h5 className="font-bold ps-2 lg:ps-0">{plant.price}</h5>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div id="favourites">
      <div
        className={` mt-14 flex flex-row w-fit mx-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center lg:my-20 my-10 font-bold ${castoro.className}`}
        id="catalogue"
      >
        Our Fa
        <BsSuitHeart className="lg:w-7 lg:h-7 lg:mt-2 w-5 h-5 text-center mt-1.5" />
        ourites
      </div>
      <div className="flex flex-row overflow-x-scroll scroll-smooth justify-start mx-auto pb-10">
        {favTegCheck(plantsData)}
      </div>
    </div>
  );
}
