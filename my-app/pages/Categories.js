import { castoro } from "./index.js";
import Image from "next/image.js";

const categories = [
  {
    image: "/jungle.jpg",
    name: "Jungle Plants",
  },
  {
    image: "/outdoors.jpg",
    name: "Outdoor Plants",
  },
  {
    image: "/bedroom.jpg",
    name: "Bedroom Plants",
  },
  {
    image: "/minimal.jpg",
    name: "Minimalistic Plants",
  },
];

export default function Categories() {
  return (
    <section className="relative h-full" >

      <div className="flex overflow-x-scroll scroll-smooth justify-center pt-10" id="categories">
        {categories.map((category, index) => {
          return (
            <span
              key={index}
              className="inline-flex flex-col me-8 lg:flex-shrink-0 md:flex-shrink-0 sm:flex-shrink-0"
            >
             <label
                className={` z-10 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 lg:text-2xl md:text-xl p-3 mx-auto special-text-sm special-p-2 ${castoro.className}`}
              >
                {category.name}
              </label>
              <Image
                src={category.image}
                width={280}
                height={400}
                className="inline-block cursor-pointer hover:scale-95 ease-in-out duration-300"
              />
              
            </span>
          );
        })}
      </div>
    </section>
  );
}
