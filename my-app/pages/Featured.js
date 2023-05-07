import { castoro } from "./index.js";
import Image from "next/image.js";

const plants = [
  {
    src: "/plant1.jpg",
    name: "Friedrich",
    price: "150€",
  },
  {
    src: "/plant2.jpg",
    name: "Mary Katie",
    price: "50€",
  },
  {
    src: "/plant3.jpg",
    name: "Bulbazie",
    price: "100€",
  },
];

export default function Featured() {
  return (
    <section className="h-full w-full" id="featured">
      <div className="w-full flex flex-col justify-center m-auto p-32 ">
        <h1
          className={` lg:text-4xl sm:text-2xl text-center mb-3 ${castoro.className}`}
        >
          Love and work are to people what water
        </h1>
        <h1
          className={` lg:text-4xl sm:text-2xl text-center ${castoro.className}`}
        >
          and sunshine are to plants
        </h1>
      </div>

      <div className="flex lg:flex-row lg:flex-nowrap md:flex-nowrap flex-wrap">
        <div className="flex flex-col w-1/3 ps-16 pb-8 justify-center">
          <h1
            className={` lg:text-5xl sm:text-3xl mb-5 font-bold ${castoro.className}`}
          >
            Featured
          </h1>
          <span className="text-xl">
            <p>Our plants are 100% organic,</p>
            <p>we don't use pesticides or</p>{" "}
            <p className="mb-4">harmful chemicals.</p>
            But please don't eat them
          </span>
          <button className=" my-10 cursor-pointer bg-stone-200 w-40 h-10 text-sm font-bold underline underline-offset-4 hover:bg-stone-500 hover:text-stone-50 hover:animate-bounce transition-all duration-200">
            Shop all Favourites
          </button>
        </div>
        <div className="flex overflow-x-scroll scroll-smooth">
          {plants.map((plant, index) => {
            return (
              <span
                key={index}
                className="inline-flex flex-col lg:flex-shrink-0 me-8"
              >
                <Image
                  src={plant.src}
                  width={270}
                  height={500}
                  className="inline-block hover:scale-95 ease-in-out duration-300"
                />
                <label
                  className={` lg:text-xl text-end ${castoro.className}`}
                >
                  <div className="flex flex-row justify-between p-2">
                    <h5>{plant.name}</h5> <h5>{plant.price}</h5>
                  </div>
                </label>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
