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
        <p className="p-5 flex flex-row">
          Your cart is empty <RiPlantLine className="ms-2 mt-1" />
        </p>
      )}
      {cartItems.map((cartItem, index) => (
        <div key={index} className="flex flex-row justify-between">
          <div className="flex flex-row">
            <button
              className=" mx-2 text-lg font-bold my-auto text-center rounded-full bg-stone-200 w-7 h-7 hover:text-stone-500 hover:bg-stone-100"
              onClick={() => onRemoveFromCart(cartItem)} aria-label="Remove from cart"
            >
              -
            </button>
            <Image
              src={cartItem.image}
              width={30}
              height={50}
              alt={`Plant product ${cartItem.name}`}
              priority = {true}
            />
            <button
              className=" mx-2 text-lg font-bold my-auto text-center rounded-full bg-stone-200 w-7 h-7 hover:text-stone-500 hover:bg-stone-100"
              onClick={() => onAddToCart(cartItem)} aria-label="Add to cart"
            >
              +
            </button>
            <p className="text-lg my-auto px-3">{cartItem.name}</p>
          </div>
          <div className="flex flex-row">
            <p className="text-lg my-auto">
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
          className="mx-auto py-2 px-10 cursor-pointer bg-black h-10 text-white sm:text-sm hover:bg-stone-700"
        >
          Check out
        </Link>
      </div>
    </div>
  );
}
