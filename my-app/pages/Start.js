import Image from "next/image";
import { castoro } from "./index.js";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Start() {
  return (
    <section className="w-full h-full overflow-hidden" id="start">
      <Image src="/planthero.jpg" width={1400} height={400} className="mt-5 block max-h-screen" priority />
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
      <div className="z-10 flex flex-col justify-end lg:w-1/2 lg:h-[350px] h-fit mx-auto lg:p-8 bg-white absolute lg:top-52 md:top-48 sm:top-32 special-start-message-box">
        <h1
          className={`${castoro.className} text-end lg:mt-3 lg:text-5xl sm:text-3xl lg:md:text-center special-text-xl`}
        >
          Find perfect plants
        </h1>
        <h1
          className={`${castoro.className} text-end lg:mb-3 lg:text-5xl sm:text-3xl lg:md:text-center special-text-xl`}
        >
          for your home
        </h1>
        <h2 className="lg:text-center md:text-center lg:mt-5 lg:mb-5 special-text-xs special-px-2">
          Beautiful plants that encourage you to get creative.
        </h2>
        <button className="lg:mt-4 p-2 lg:mx-auto cursor-pointer bg-black lg:w-40 lg:h-10 text-white text-sm font-bold hover:bg-stone-900 hover:animate-pulse special-small-button">
          Shop Now
        </button>
      </div>
        <a
          href="#categories"
          className="transition-all duration-500 ease-out scroll-smooth flex flex-row w-full justify-center"
        >
          <BsChevronDoubleDown className="z-10 absolute bottom-0 mb-6 text-stone-300 w-10 h-10 hover:text-white lg:visible md:invisible sm:invisible special-hidden" />
        </a>
      <h1
        className={` lg:pt-16 md:pt-12 sm:pt-10 flex flex-row justify-center lg:text-5xl sm:text-3xl font-bold ${castoro.className} special-p-10`}
      >
        Categories
      </h1>
    </section>
  );
}
