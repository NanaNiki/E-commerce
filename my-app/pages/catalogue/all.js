import { castoro } from "../index.js";
import { inter } from "../index.js";
import Link from "next/link";
import Image from "next/image.js";
import plantsData from "../product/plants.json";
import { useState } from "react";

export default function AllProducts() {
  const [sortMethod, setSortMethod] = useState("");

  const sortOptions = [
    { value: "", label: "Sort by" },
    { value: "priceLow", label: "Price (low to high)" },
    { value: "priceHigh", label: "Price (high to low)" },
    { value: "nameAsc", label: "Name (A to Z)" },
    { value: "nameDesc", label: "Name (Z to A)" },
  ];
  const sortPlants = (plantsData) => {
    switch (sortMethod) {
      case "priceLow":
        return plantsData.sort((a, b) => a.price - b.price);
      case "priceHigh":
        return plantsData.sort((a, b) => b.price - a.price);
      case "nameAsc":
        return plantsData.sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return plantsData.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return plantsData;
    }
  };

  return (
    <div className="p-5 mt-14">
      <h1
        className={` lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center my-10 font-bold ${castoro.className}`}
        id="catalogue"
      >
        All Products
      </h1>
      <div className="flex flex-row sm:justify-start justify-center">
        <select
          value={sortMethod}
          onChange={(e) => setSortMethod(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 p-2 justify-center mx-auto px-10 w-fit">
        {sortPlants(plantsData).map((plant, index) => {
          return (
            <div key={index} className="w-fit">
              <Link href={`/product/${plant.id}`} passHref>
                <Image
                  src={plant.image}
                  width={200}
                  height={100}
                  alt={`Plant product ${plant.name}`}
                  className="lg:mb-2 inline-block hover:scale-95 ease-in-out duration-300"
                />
                <div
                  className={` flex flex-row justify-between p-1 text-end md:text-base sm:text-sm text-xs ${inter.className}`}
                >
                  <h5>{plant.name}</h5>{" "}
                  <h5 className="font-bold">{plant.price}€</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
