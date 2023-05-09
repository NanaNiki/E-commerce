import { castoro } from "../index.js";
import { inter } from "../index.js";
import Image from "next/image";
import NavBar from "../NavBar.js";
import Footer from "../Footer.js";
import { useState } from "react";
import plantsData from "./plants.json";

export default function ProductCard({ plants }) {
  const [quantity, setQuantity] = useState(1);

  function addToCart(type) {
    if (type === "add") {
      if (quantity >= 50) {
        return;
      }
      setQuantity((prev) => prev + 1);
    } else if (type === "remove") {
      if (quantity <= 0) {
        return;
      }
      setQuantity((prev) => prev - 1);
    }
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-row justify-center w-full items-end mt-14">
        <div className="flex flex-row p-10 pb-0 ">
          <div className="flex flex-col mx-5 max-h-[600px] overflow-y-scroll scroll-smooth">
            {plantsData.map((plant, index) => (
              <div key={index}>
                <Image
                  src={plant.image}
                  width={90}
                  height={600}
                  className="mb-4"
                />
              </div>
            ))}
          </div>
          <Image
            src={plants.image}
            width={400}
            height={200}
            alt={plants.alt}
            priority
          />
        </div>
        <div className={`flex flex-col h-full ${castoro.className}`}>
          <h1 className="lg:text-4xl text-3xl lg:p-5">{plants.name}</h1>
          <h3 className="text-5xl lg:p-10">{plants.price}</h3>

          <div className="flex flex-row justify-between lg:pt-32">
            <h5 className="px-5 lg:text-lg sm:text-base">Quantity</h5>
            <button
              className="lg:text-2xl sm:text-lg text-center py-auto bg-stone-300 lg:w-32 h-8 p-0.5 w-20 hover:text-stone-500"
              onClick={() => addToCart("remove")}
            >
              -
            </button>
            <div className="lg:text-2xl sm:text-lg text-center text-stone-800 py-auto bg-stone-300 lg:w-32 h-8 p-0.5 w-20">
              {quantity}
            </div>
            <button
              className="lg:text-2xl sm:text-lg text-center py-auto bg-stone-300 lg:w-32 h-8 p-0.5 w-20 hover:text-stone-500"
              onClick={() => addToCart("add")}
            >
              +
            </button>
          </div>
          <button
            className={`m-3 mx-auto cursor-pointer bg-black w-full h-10 text-white sm:text-sm hover:bg-stone-700 text-xs ${inter.className}`}
          >
            ADD TO CARD
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
