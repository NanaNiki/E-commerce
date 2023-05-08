import Image from "next/image";
import { castoro } from "./index.js";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Start() {
  return (
    <section className="w-full h-full overflow-hidden" id="start">
      <Image
        src="/planthero.jpg"
        width={1400}
        height={400}
        alt="Beige terrace with two wooden chairs and palm loooking plants"
        className="mt-5 block max-h-screen"
        priority
      />
      <span className="hidden">
        Photo by{" "}
        <a href="https://unsplash.com/it/@nahimaaparicio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Nahima Aparicio
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/vIJAmGqEk40?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
      <div className="absolute lg:top-52 sm:top-48 top-32 z-10 flex flex-col justify-evenly md:items-center items-end md:w-1/2 md:h-[350px] w-8/12 h-1/6 mx-auto sm:p-8 p-4 pb-3 bg-white">
        <h1
          className={`${castoro.className} text-end lg:mt-3 lg:text-5xl md:text-4xl sm:text-2xl text-xl lg:text-center md:text-center `}
        >
          Find perfect plants
        </h1>
        <h1
          className={`${castoro.className} text-end lg:mb-3 lg:text-5xl md:text-4xl sm:text-2xl text-xl lg:text-center md:text-center `}
        >
          for your home
        </h1>
        <h2 className="md:text-center md:text-base sm:text-sm text-xs lg:mt-5 lg:mb-5 p-1">
          Beautiful plants that encourage you to get creative.
        </h2>
        <button className="lg:mt-4 p-2 py-1 lg:mx-auto cursor-pointer bg-black sm:w-40 sm:h-10 w-20 h-6 text-white sm:text-sm text-xs md:font-bold font-extralight hover:bg-stone-900 hover:animate-pulse">
          Shop Now
        </button>
      </div>
      <a
        href="#categories"
        className="transition-all duration-500 ease-out scroll-smooth flex flex-row w-full justify-center"
      >
        <BsChevronDoubleDown className="lg:block hidden z-10 absolute bottom-0 mb-6 w-10 h-10 text-stone-300 hover:text-white " />
      </a>
      <h1
        className={` lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:pt-16 md:pt-12 pt-10 pb-5 flex flex-row justify-center font-bold ${castoro.className}`}
      >
        Categories
      </h1>
    </section>
  );
}
