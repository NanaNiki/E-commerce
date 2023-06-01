/**
 * This is a React component that displays all products, allows sorting by different criteria, and
 * renders each product with an image, name, and price.
 * @returns The code is returning a React component called "AllProducts" that displays a grid of plant
 * products with sorting options. The grid is generated from a JSON file called "plantsData" and each
 * product is displayed with an image, name, and price. The sorting options allow the user to sort the
 * products by price (low to high or high to low) or by name (A to Z or Z).
 */
import { castoro, inter } from "../index.js";
import Link from "next/link";
import Image from "next/image.js";
import plantsData from "../../data/plants.json";
import Soldout from "../../components/Soldout.js";
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
  /** LEARNING NOTE
   * By default sort() method order is ascending
   * localeCompare() method performs a string comparison based on alphabetical order
   *
   * localeCompare and the subtraction (a.price - b.price) || (b.price - a.price) in the
   * sort() method produce integer results (e.g., -1, 1, 0) that determine the sorting order.
   * So when the result of `a.price - b.price` is negative it means that `a.price` is smaller than
   * `b.price` and therefore `a` should be placed before `b`. And when `b.price - a.price` and the
   * result is positive it means that `b.price` is larger than `a.price`, so `b` should be placed before `a`.
   */
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
                <div className="relative"> {plant.soldout && <Soldout />} </div>
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
