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
      <div className="mt-14 flex w-full flex-col items-center md:flex-row lg:items-end">
        <div className="mx-auto flex max-w-[400px] flex-col lg:mx-0 lg:ms-auto lg:min-w-fit lg:flex-row-reverse lg:pt-10">
          <div className="relative"> {plantsData.soldout && <Soldout />} </div>
          <Image
            src={plantsData.image}
            width={400}
            height={600}
            alt={`Plant product ${plantsData.name}`}
            priority={true}
          />
          <div
            className={`m-auto my-5 flex h-full flex-col md:hidden ${castoro.className}`}
          >
            <h1 className="text-2xl ">{plantsData.name}</h1>
            <h3 className="text-4xl ">{plantsData.price}€</h3>

            <div className="flex flex-row justify-between">
              <h5 className="px-5 text-base">Quantity</h5>
              <button
                className="py-auto h-8 w-20 bg-stone-300 p-0.5 text-center text-lg hover:text-stone-500 lg:w-32"
                onClick={() => updateQuantity("remove")}
                aria-label="Remove one plant"
              >
                -
              </button>
              <div className="py-auto h-8 w-20 bg-stone-300 p-0.5 text-center text-lg text-stone-800 lg:w-32">
                {quantity}
              </div>
              <button
                className="py-auto h-8 w-20 bg-stone-300 p-0.5 text-center text-lg hover:text-stone-500"
                onClick={() => updateQuantity("add")}
                aria-label="Add one plant"
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                onAddToCart(plantsData, quantity, setCartItemsCount)
              }
              className={`m-3 mx-auto h-9 w-full cursor-pointer bg-black text-xs text-white hover:bg-stone-700 ${inter.className}`}
            >
              ADD TO CARD
            </button>
          </div>
          <div className="flex max-h-[600px] overflow-y-scroll scroll-smooth md:flex-row lg:mx-5 lg:flex-col">
            {plants.map((plant, index) => (
              <div key={index} className="me-3 flex-shrink-0">
                <Link
                  href={`/product/${plant.id}`}
                  aria-label="Go to see the product"
                  passHref
                >
                  <Image
                    src={plant.image}
                    width={90}
                    height={100}
                    className="duration-300 ease-in-out hover:scale-95 lg:mb-4"
                    alt={`Plant product ${plant.name}`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          className={` me-auto hidden h-full w-fit flex-col md:flex lg:px-7 ${castoro.className}`}
        >
          <h1 className="text-3xl lg:text-4xl">{plantsData.name}</h1>
          <h3 className="text-5xl ">{plantsData.price}€</h3>

          <div className="flex max-w-fit flex-shrink flex-row justify-between lg:pt-32">
            <h5 className="px-5 sm:text-base lg:text-lg">Quantity</h5>
            <button
              className="py-auto h-8 w-28 bg-stone-300 p-0.5 text-center text-2xl hover:text-stone-500"
              onClick={() => updateQuantity("remove")}
              aria-label="Remove one plant"
            >
              -
            </button>
            <div className="py-auto h-8 w-28 bg-stone-300 p-0.5 text-center text-2xl text-stone-800">
              {quantity}
            </div>
            <button
              className="py-auto h-8 w-28 bg-stone-300 p-0.5 text-center text-2xl hover:text-stone-500"
              onClick={() => updateQuantity("add")}
              aria-label="Add one plant"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onAddToCart(plantsData, quantity, setCartItemsCount)}
            className={`m-3 mx-auto mb-0 h-10 w-full cursor-pointer bg-black text-sm text-white hover:bg-stone-700 ${inter.className}`}
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    </>
  );
}
