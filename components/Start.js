/**
 * The Start function returns a section with an image, text, and a link to shop for plants.
 * @returns A React component that renders a section with an image, a heading, a subheading, and a
 * button. It also includes a chevron icon for scrolling down and a heading for categories.
 */
import Image from "next/image";
import { castoro } from "../pages/index.js";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Start() {
  return (
    <section className="h-full w-full overflow-hidden" id="start">
      <Image
        src="/images/planthero.jpg"
        width={1400}
        height={400}
        sizes="100vw"
        alt="Beige terrace with two wooden chairs and palm loooking plants"
        className="block max-h-screen sm:mt-5"
        priority={true}
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
      <div className="h-1/12 absolute top-24 z-10 mx-auto flex w-8/12 flex-col items-end justify-evenly bg-white p-4 pb-3 sm:top-48 sm:p-8 md:h-[350px] md:w-1/2 md:items-center lg:top-52">
        <h1
          className={`${castoro.className} text-end text-xl sm:text-2xl md:text-center md:text-4xl lg:mt-3 lg:text-center lg:text-5xl `}
        >
          Find perfect plants
        </h1>
        <h1
          className={`${castoro.className} text-end text-xl sm:text-2xl md:text-center md:text-4xl lg:mb-3 lg:text-center lg:text-5xl `}
        >
          for your home
        </h1>
        <h2 className="pt-1 text-xs sm:text-sm md:text-center md:text-base lg:mb-5 lg:mt-5 ">
          Beautiful plants that encourage you to get creative.
        </h2>
        <a
          href="#categories"
          className="h-6 w-20 cursor-pointer bg-black p-1 text-center text-xs font-extralight text-white hover:animate-pulse hover:bg-stone-900 sm:h-10 sm:w-40 sm:pt-2.5 sm:text-sm md:font-bold lg:mx-auto lg:mt-4"
        >
          Shop Now
        </a>
      </div>
      <a
        href="#scroll-down"
        aria-label="scroll down"
        className="flex w-full flex-row justify-center scroll-smooth transition-all duration-500 ease-out"
      >
        <BsChevronDoubleDown className="absolute bottom-0 z-10 mb-6 hidden h-10 w-10 text-stone-300 hover:text-white lg:block " />
      </a>
      <h1
        className={` flex flex-row justify-center pb-5 pt-10 text-2xl font-bold sm:text-3xl md:pt-12 md:text-4xl lg:pt-20 lg:text-5xl ${castoro.className}`}
        id="categories"
      >
        Categories
      </h1>
    </section>
  );
}
