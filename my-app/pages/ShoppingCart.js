import { useState, useEfect } from "react";
// import { castoro } from "../index.js";
// import { inter } from "../index.js";
// import Link from "next/link";
// import Image from "next/image.js";
// import plantsData from "../product/plants.json";

export default function ShoppingCart({ setShoppingCartOpen, setMiniNavOpen }) {
  const [cartItems, setCartItems] = useState([]);


  return (
    <div className="shopping-cart fixed sm:top-14 top-44 right-0 z-20 h-screen sm:w-4/12 w-4/12 flex flex-col bg-stone-300 ">
      <h1>Your Shopping Cart</h1>
      {cartItems.map((cartItem, index) => (
        <div key={index}>
          <p>{cartItem.item.name}</p>
          <p>{cartItem.quantity}</p>
        </div>
      ))}
    </div>
  );
}
