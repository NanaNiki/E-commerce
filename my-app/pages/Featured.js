import { castoro } from "./index.js";
import Image from "next/image.js";

const plants = [
  {
    image: "/plant1.jpg",
    name: "Friedrich",
    price: "150€",
  },
  {
    image: "/plant2.jpg",
    name: "Mary Katie",
    price: "50€",
  },
  {
    image: "/plant3.jpg",
    name: "Bulbazie",
    price: "100€",
  },
];

export default function Featured() {
  return (
    <section className="h-full ms-6" id="featured">
      <div className="flex flex-col justify-center m-auto lg:p-32 md:p-20 sm:p-16 special-p-5 lg:text-4xl md:text-3xl sm:text-2xl special-text-2xl text-center">
        <h1 className={` lg:mb-3 ${castoro.className}`}>
          Love and work are to people what water
        </h1>
        <h1 className={` ${castoro.className}`}>and sunshine are to plants</h1>
      </div>

      <div className="flex flex-row lg:flex-nowrap md:flex-nowrap flex-wrap">
        <div className="flex flex-col lg:w-1/3 lg:ps-20 md:px-8 special-p-5 pb-8 justify-center">
          <h1
            className={` lg:text-5xl sm:text-3xl mb-5 font-bold ${castoro.className}`}
          >
            Featured
          </h1>
          <span className="lg:text-xl">
            <p>Our plants are 100% organic,</p>
            <p>we don't use pesticides or</p>{" "}
            <p className="mb-4">harmful chemicals.</p>
            But please don't eat them
          </span>
          <button className="special-hidden lg:my-10 md:my-5 sm:my-3 cursor-pointer bg-stone-200 w-40 h-10 text-sm font-bold underline underline-offset-4 hover:bg-stone-500 hover:text-stone-50 hover:animate-bounce transition-all duration-200">
            Shop all Favourites
          </button>
        </div>
        <div className="flex overflow-x-scroll scroll-smooth justify-center">
          {plants.map((plant, index) => {
            return (
              <span
                key={index}
                className="inline-flex flex-col lg:flex-shrink-0 lg:me-6 sm:me-8"
              >
                <Image
                  src={plant.image}
                  width={270}
                  height={500}
                  className="inline-block hover:scale-95 ease-in-out duration-300"
                />
                <label className={` lg:text-xl text-end ${castoro.className}`}>
                  <div className="flex flex-row justify-between p-2 special-text-xs">
                    <h5>{plant.name}</h5> <h5>{plant.price}</h5>
                  </div>
                </label>
              </span>
            );
          })}
        </div>
        <div className=" flex flex-row w-screen justify-end lg:hidden md:hidden sm:hidden">
          <button className="special-my-4 special-mx-4 cursor-pointer bg-stone-200 w-40 h-10 text-sm font-bold underline underline-offset-4 hover:bg-stone-500 hover:text-stone-50 hover:animate-bounce transition-all duration-200">
            Shop all Favourites
          </button>
        </div>
      </div>
    </section>
  );
}
