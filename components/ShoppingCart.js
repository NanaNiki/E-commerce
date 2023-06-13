/**
 * This is a React component that renders a shopping cart with items, allowing users to add or remove
 * items and proceed to checkout.
 * @param props - props is an object that contains various properties passed down from the parent
 * component to the ShoppingCart component. These properties include cartItems (an array of items in
 * the shopping cart), onAddToCart (a function to add an item to the cart), onRemoveFromCart (a
 * function to remove an item
 * @returns A React component for a shopping cart, which displays the items in the cart, allows the
 * user to add or remove items, and provides a link to the checkout page.
 */
import Link from "next/link";
import Image from "next/image.js";
import { RiPlantLine } from "react-icons/ri";

export default function ShoppingCart(props) {
  const {
    cartItems,
    onAddToCart,
    onRemoveFromCart,
    setShoppingCartOpen,
    setMiniNavOpen,
  } = props;
  return (
    <div className="shopping-cart">
      <h1 className="text-center font-bold text-stone-600">Shopping Cart</h1>
      {cartItems.length === 0 && (
        <p className="flex flex-row p-5">
          Your cart is empty <RiPlantLine className="ms-2 mt-1" />
        </p>
      )}
      {cartItems.map((cartItem, index) => (
        <div key={index} className="flex flex-row justify-between">
          <div className="flex flex-row">
            <button
              className="mx-2 my-auto h-7 w-7 rounded-full bg-stone-200 text-center text-lg font-bold hover:bg-stone-100 hover:text-stone-500"
              onClick={() => onRemoveFromCart(cartItem)}
              aria-label="Remove from cart"
            >
              -
            </button>
            <Image
              src={cartItem.image}
              width={30}
              height={50}
              alt={`Plant product ${cartItem.name}`}
              priority={true}
            />
            <button
              className=" mx-2 my-auto h-7 w-7 rounded-full bg-stone-200 text-center text-lg font-bold hover:bg-stone-100 hover:text-stone-500"
              onClick={() => onAddToCart(cartItem)}
              aria-label="Add to cart"
            >
              +
            </button>
            <p className="my-auto px-3 text-lg">{cartItem.name}</p>
          </div>
          <div className="flex flex-row">
            <p className="my-auto text-lg">
              {cartItem.quantity} x {cartItem.price.toFixed(2)}€
            </p>
          </div>
        </div>
      ))}
      <div
        className="fixed bottom-4 right-1/3"
        onClick={() => {
          setShoppingCartOpen(false);
          setMiniNavOpen(false);
        }}
      >
        <Link
          href={`/checkout`}
          passHref
          className="mx-auto h-10 cursor-pointer bg-black px-10 py-2 text-white hover:bg-stone-700 sm:text-sm"
        >
          Check out
        </Link>
      </div>
    </div>
  );
}
