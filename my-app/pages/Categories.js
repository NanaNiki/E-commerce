import { castoro } from "./index.js";
import Image from "next/image.js";

const categories = [
  {
    src: "/jungle.jpg",
    name: "Jungle Plants",
  },
  {
    src: "/outdoors.jpg",
    name: "Outdoor Plants",
  },
  {
    src: "/bedroom.jpg",
    name: "Bedroom Plants",
  },
  {
    src: "/minimal.jpg",
    name: "Minimalistic Plants",
  },
];

export default function Categories() {
  return (
    <section className="h-full flex flex-col" id="categories">
      <div className="relative w-full flex flex-row justify-start ps-16 pt-16">
        <h1
          className={` lg:text-5xl sm:text-3xl font-bold ${castoro.className}`}
        >
          Categories
        </h1>
      </div>

      <div className="flex overflow-x-scroll scroll-smooth lg:flex-nowrap lg:ms-48">
        {categories.map((category, index) => {
          return (
            <span
              key={index}
              className="inline-flex flex-col lg:flex-shrink-0 me-20"
            >
              <label
                className={` z-20 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 lg:text-2xl p-3 mx-auto ${castoro.className}`}
              >
                {category.name}
              </label>
              <Image
                src={category.src}
                width={380}
                height={500}
                className="inline-block cursor-pointer hover:scale-95 ease-in-out duration-300"
              />
            </span>
          );
        })}
      </div>
    </section>
  );
}
