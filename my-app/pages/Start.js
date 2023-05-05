import Image from "next/image";
import { castoro } from "./index.js";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Start() {
  return (
    <section className="w-full h-full overflow-hidden" id="start">
      <Image src="/planthero.jpg" width={1400} height={200} className="mt-5" />
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
      <div className="z-10 flex flex-col justify-center lg:w-[700px] lg:h-[350px] p-8 bg-white absolute top-52">
        <h1
          className={`${castoro.className} mt-3 lg:text-5xl sm:text-3xl text-center special-text-3xl`}
        >
          Find perfect plants
        </h1>
        <h1
          className={`${castoro.className} mb-3 lg:text-5xl sm:text-3xl text-center special-text-3xl`}
        >
          for your home
        </h1>
        <h2 className="text-center mt-5 mb-5 special-text-sm">
          Beautiful plants that encourage you to get creative.
        </h2>
        <button className="mt-4 p-2 mx-auto cursor-pointer bg-black w-40 h-10 text-white text-sm font-bold hover:bg-stone-900 hover:animate-pulse">
          Shop Now
        </button>
      </div>
      <div className="z-10 absolute bottom-0 w-full flex flex-row justify-center mb-6">
        <a
          href="#categories"
          className="transition-all duration-500 ease-out scroll-smooth"
        >
          <BsChevronDoubleDown className="text-stone-300 w-10 h-10 hover:text-white" />
        </a>
      </div>
    </section>
  );
}
