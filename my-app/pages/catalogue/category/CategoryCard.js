import { castoro } from "../../index.js";
import { inter } from "../../index.js";
import Link from "next/link";
import Image from "next/image.js";
import Categories from "../../Categories.js";
import plantsData from "../../product/plants.json";

export default function CategoryCard({ categoriesData }) {
  const categoryPlants = plantsData.filter((plant) => plant[categoriesData.val] === true)

  return (
    <div id="">
      <div
        className={` pt-10 flex flex-row w-fit mx-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center lg:my-20 my-10 font-bold ${castoro.className}`}
        id="catalogue"
      >
       {categoriesData.name}
      </div>
      <div className="flex flex-row overflow-x-scroll scroll-smooth justify-start mx-auto pb-10">
        {categoryPlants.map((plant, index) => {
          return (
            <div key={index} className="w-fit lg:pe-6 shrink-0">
              <Link href={`/product/${plant.id}`} passHref target="_parent">
                <Image
                  src={plant.image}
                  width={270}
                  height={100}
                  alt={`Plant product ${plant.name}`}
                  className="lg:mb-2 inline-block hover:scale-95 ease-in-out duration-300"
                />
                <div
                  className={` flex flex-row lg:justify-between p-1 text-end md:text-base sm:text-sm text-xs ${inter.className}`}
                >
                  <h5 className="p1-2 lg:ps-0">{plant.name}</h5>{" "}
                  <h5 className="font-bold ps-2 lg:ps-0">{plant.price}</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div>
      <Categories />
      </div>
    </div>
  );
}
