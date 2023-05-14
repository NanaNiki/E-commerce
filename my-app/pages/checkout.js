import Image from "next/image";
import Link from "next/link";
import { castoro } from "./index.js";
import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { RiPlantLine } from "react-icons/ri";

export default function Checkout() {
    const { cartItems, onAddToCart, onRemoveFromCart } = useContext(ShoppingCartContext);

    function calculateTotal() {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    }
    return (
        <div className={`mt-14 w-8/12 mx-auto ${castoro.className}`}>
      <h1 className="text-center pt-10 text-2xl font-bold text-stone-600">Your Order</h1>
      {cartItems.length === 0 && <p className="p-5 pt-16 mx-auto text-2xl flex flex-row w-fit">Your order is empty <RiPlantLine  className="ms-2 mt-1"/></p>}
      {cartItems.map((cartItem, index) => (
    <div key={index} className="flex flex-row justify-between">
       <div className="flex flex-row">
       <button
            className=" mx-2 text-lg font-bold my-auto text-center rounded-full bg-stone-200 w-7 h-7 hover:text-stone-500 hover:bg-stone-100"
            onClick={() => onRemoveFromCart(cartItem)}
          >
            -
          </button>
          <Image
            src={cartItem.image}
            width={70}
            height={90}
            alt={`Plant product ${cartItem.name}`}
            priority
            className="mx-3"
          />
          <button
            className=" mx-2 text-lg font-bold my-auto text-center rounded-full bg-stone-200 w-7 h-7 hover:text-stone-500 hover:bg-stone-100"
            onClick={() => onAddToCart(cartItem)}
          >
            +
          </button>
          <p className="text-xl my-auto px-3">{cartItem.name}</p>
       </div>
       <div className="flex flex-row">
            <p className="text-xl my-auto">
              {cartItem.quantity} x {cartItem.price.toFixed(2)}€
            </p>
        </div>       
    </div>
      ))}
      <div className="w-full h-[1px] bg-stone-400 rounded-full"></div>
      <div className="flex flex-row justify-between pt-3">
      <h1 className=" text-2xl lg:ps-20 font-bold text-stone-600">Total</h1>
      <span className=" text-2xl font-bold text-stone-600">{calculateTotal().toFixed(2)}€</span>
      </div>
    </div>
    );
}