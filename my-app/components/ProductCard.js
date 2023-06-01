/**
 * The ProductCard function displays a product page with information about a plant, including its
 * image, name, price, and quantity, and allows the user to add it to their cart.
 * @param props - props is an object that contains various properties passed down from the parent
 * component to the ProductCard component. These properties include plantsData, onAddToCart,
 * updateQuantity, quantity, and setCartItemsCount. The ProductCard component uses these properties to
 * render the product information and handle user interactions.
 * @returns A React functional component that renders a product card with information about a plant
 * product, including its name, price, image, and quantity. It also includes buttons to add or remove
 * items from the cart and a list of other plant products.
 */
import { castoro, inter } from "../pages/index.js";
import Image from "next/image";
import plants from "../data/plants.json";
import Link from "next/link.js";
import Soldout from "./Soldout.js";

export default function ProductCard(props) {
  const {
    plantsData,
    onAddToCart,
    updateQuantity,
    quantity,
    setCartItemsCount,
  } = props;

  return (
    <>
      <div className="flex md:flex-row flex-col w-full lg:items-end items-center mt-14">
        <div className="flex lg:flex-row-reverse flex-col lg:min-w-fit max-w-[400px] lg:pt-10 mx-auto lg:ms-auto lg:mx-0">
          <div className="relative"> {plantsData.soldout && <Soldout />} </div>
          <Image
            src={plantsData.image}
            width={400}
            height={600}
            alt={`Plant product ${plantsData.name}`}
            priority={true}
          />
          <div
            className={`md:hidden flex flex-col h-full m-auto my-5 ${castoro.className}`}
          >
            <h1 className="text-2xl ">{plantsData.name}</h1>
            <h3 className="text-4xl ">{plantsData.price}€</h3>

            <div className="flex flex-row justify-between">
              <h5 className="px-5 text-base">Quantity</h5>
              <button
                className="text-lg text-center py-auto bg-stone-300 lg:w-32 h-8 p-0.5 w-20 hover:text-stone-500"
                onClick={() => updateQuantity("remove")} aria-label="Remove one plant"
              >
                -
              </button>
              <div className="text-lg text-center text-stone-800 py-auto bg-stone-300 lg:w-32 h-8 p-0.5 w-20">
                {quantity}
              </div>
              <button
                className="text-lg text-center py-auto bg-stone-300 h-8 p-0.5 w-20 hover:text-stone-500"
                onClick={() => updateQuantity("add")} aria-label="Add one plant"
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                onAddToCart(plantsData, quantity, setCartItemsCount)
              }
              className={`m-3 mx-auto cursor-pointer bg-black w-full h-9 text-white hover:bg-stone-700 text-xs ${inter.className}`}
            >
              ADD TO CARD
            </button>
          </div>
          <div className="flex lg:flex-col md:flex-row lg:mx-5 max-h-[600px] overflow-y-scroll scroll-smooth">
            {plants.map((plant, index) => (
              <div key={index} className="me-3 flex-shrink-0">
                <Link href={`/product/${plant.id}`} aria-label="Go to see the product" passHref>
                  <Image
                    src={plant.image}
                    width={90}
                    height={100}
                    className="lg:mb-4 hover:scale-95 ease-in-out duration-300"
                    alt={`Plant product ${plant.name}`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          className={` md:flex hidden flex-col h-full me-auto lg:px-7 w-fit ${castoro.className}`}
        >
          <h1 className="lg:text-4xl text-3xl">{plantsData.name}</h1>
          <h3 className="text-5xl ">{plantsData.price}€</h3>

          <div className="flex flex-row justify-between lg:pt-32 max-w-fit flex-shrink">
            <h5 className="px-5 lg:text-lg sm:text-base">Quantity</h5>
            <button
              className="text-2xl text-center py-auto bg-stone-300 w-28 h-8 p-0.5 hover:text-stone-500"
              onClick={() => updateQuantity("remove")} aria-label="Remove one plant"
            >
              -
            </button>
            <div className="text-2xl text-center text-stone-800 py-auto bg-stone-300 w-28 h-8 p-0.5">
              {quantity}
            </div>
            <button
              className="text-2xl text-center py-auto bg-stone-300 w-28 h-8 p-0.5 hover:text-stone-500"
              onClick={() => updateQuantity("add")} aria-label="Add one plant"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onAddToCart(plantsData, quantity, setCartItemsCount)}
            className={`m-3 mb-0 mx-auto cursor-pointer bg-black w-full h-10 text-white text-sm hover:bg-stone-700 ${inter.className}`}
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    </>
  );
}