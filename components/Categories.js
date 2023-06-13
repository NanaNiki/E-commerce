/** This is a React component that displays a list of categories with their corresponding images.
 * It also defines an array of objects called `categoriesData` that contains information
 * about each category, including the image source, name, alt text, and value. The component then maps
 * through this array to render each category as a clickable link with its corresponding image.
 * The URL is dynamically generated based on the `val` property of the current category object.
 */
import { castoro } from "../pages/index.js";
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
    <section className="relative mb-5 h-full">
      <div
        className="flex overflow-x-scroll scroll-smooth lg:justify-center lg:pt-10"
        id="scroll-down"
      >
        {categoriesData.map((category, index) => {
          return (
            <span key={index} className="me-8 flex flex-shrink-0 flex-col">
              <Link
                className={` z-10 mx-auto h-fit w-fit translate-y-full bg-stone-200 bg-opacity-90 p-2 text-sm sm:text-lg md:p-3 md:text-xl lg:text-2xl ${castoro.className} duration-300 ease-in-out hover:scale-105`}
                href={`/catalogue/category/${category.val}`}
                passHref
              >
                {category.name}
              </Link>
              <Link
                href={`/catalogue/category/${category.val}`}
                aria-label="Go to see the category"
                passHref
              >
                <Image
                  src={category.image}
                  width={280}
                  height={500}
                  alt={category.alt}
                  className="inline-block cursor-pointer duration-300 ease-in-out hover:scale-95"
                  priority={true}
                />{" "}
              </Link>
            </span>
          );
        })}
      </div>
    </section>
  );
}
