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
    <section className="h-full flex flex-col" >

      <div className="flex overflow-x-scroll scroll-smooth lg:flex-nowrap justify-between mx-10 pt-5" id="categories">
        {categories.map((category, index) => {
          return (
            <span
              key={index}
              className="inline-flex flex-col"
            >
             <label
                className={` z-10 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 text-2xl p-3 mx-auto ${castoro.className}`}
              >
                {category.name}
              </label>
              <Image
                src={category.src}
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
