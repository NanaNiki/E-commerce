import { castoro } from "../index.js";
import { inter } from "../index.js";
import Link from "next/link";
import Image from "next/image.js";
import NavBar from "../NavBar.js";
import Footer from "../Footer.js";
import plantsData from "../product/plants.json";

export default function AllProducts() {
  return (
    <div className="p-5 mt-14">
      <NavBar />
      <h1
        className={` lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center my-10 font-bold ${castoro.className}`}
        id="catalogue"
      >
        All Products
      </h1>
      <div className="grid grid-cols-4 p-2 justify-center mx-auto px-10">
        {plantsData.map((plant, index) => {
          return (
            <div key={index}>
              <Link href={`/product/${plant.id}`} passHref target="_parent">
                <Image
                  src={plant.image}
                  width={150}
                  height={100}
                  className="lg:mb-2"
                />
                <div
                  className={` flex flex-row justify-between p-1 text-end md:text-base sm:text-sm text-xs ${inter.className}`}
                >
                  <h5>{plant.name}</h5> <h5>{plant.price}</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
