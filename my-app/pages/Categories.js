import { castoro } from "./index.js";
import Image from "next/image.js";

const categories = [
  {
    image: "/jungle.jpg",
    name: "Jungle Plants",
    alt: "Palm house with jungle plants and view on the sky",
  },
  {
    image: "/outdoors.jpg",
    name: "Outdoor Plants",
    alt: "Outdoors pool with turqoise water and blue sunbeds surrounded by plants",
  },
  {
    image: "/bedroom.jpg",
    name: "Bedroom Plants",
    alt: "Modern and simple decored bedroom with wooden floor, white and gray accents with a big plant",
  },
  {
    image: "/minimal.jpg",
    name: "Minimalistic Plants",
    alt: "Minimalistic leafy plant with wooden holder on the white table",
  },
];

export default function Categories() {
  return (
    <section className="relative h-full mb-5">
      <div
        className="flex overflow-x-scroll scroll-smooth lg:justify-center lg:pt-10"
        id="categories"
      >
        {categories.map((category, index) => {
          return (
            <span key={index} className="flex flex-col me-8 flex-shrink-0">
              <label
                className={` z-10 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 lg:text-2xl md:text-xl sm:text-lg text-sm md:p-3 p-2 mx-auto ${castoro.className}`}
              >
                {category.name}
              </label>
              <Image
                src={category.image}
                width={280}
                height={500}
                alt={category.alt}
                className="inline-block cursor-pointer hover:scale-95 ease-in-out duration-300"
              />
            </span>
          );
        })}
      </div>
    </section>
  );
}
