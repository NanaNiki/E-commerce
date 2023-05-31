/** This is a React component that displays a list of categories with their corresponding images. 
 * It also defines an array of objects called `categoriesData` that contains information
 * about each category, including the image source, name, alt text, and value. The component then maps
 * through this array to render each category as a clickable link with its corresponding image. 
 * The URL is dynamically generated based on the `val` property of the current category object.  
 */
import { castoro } from "../index.js";
import Image from "next/image.js";
import Link from "next/link";

export const categoriesData = [
  {
    image: "/images/jungle.jpg",
    name: "Jungle Plants",
    alt: "Palm house with jungle plants and view on the sky",
    val: "jungle",
  },
  {
    image: "/images/outdoors.jpg",
    name: "Outdoor Plants",
    alt: "Outdoors pool with turqoise water and blue sunbeds surrounded by plants",
    val: "outdoor",
  },
  {
    image: "/images/bedroom.jpg",
    name: "Bedroom Plants",
    alt: "Modern and simple decored bedroom with wooden floor, white and gray accents with a big plant",
    val: "bedroom",
  },
  {
    image: "/images/minimal.jpg",
    name: "Minimalistic Plants",
    alt: "Minimalistic leafy plant with wooden holder on the white table",
    val: "minimal",
  },
];

export default function Categories() {
  return (
    <section className="relative h-full mb-5">
      <div
        className="flex overflow-x-scroll scroll-smooth lg:justify-center lg:pt-10"
        id="scroll-down"
      >
        {categoriesData.map((category, index) => {
          return (
            <span key={index} className="flex flex-col me-8 flex-shrink-0">
              <Link
                className={` z-10 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 lg:text-2xl md:text-xl sm:text-lg text-sm md:p-3 p-2 mx-auto ${castoro.className} hover:scale-105 ease-in-out duration-300`}
                href={`/catalogue/category/${category.val}`}
                passHref
              >
                {category.name}
              </Link>
              <Link href={`/catalogue/category/${category.val}`} passHref>
                <Image
                  src={category.image}
                  width={280}
                  height={500}
                  alt={category.alt}
                  className="inline-block cursor-pointer hover:scale-95 ease-in-out duration-300"
                  priority = {true}
                />{" "}
              </Link>
            </span>
          );
        })}
      </div>
    </section>
  );
}
