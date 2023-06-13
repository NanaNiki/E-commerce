/**
 * The Checkout function displays the user's order, allows them to select a delivery option and enter
 * their personal and payment information, and handles the order submission.
 * @returns A React component for the checkout page, which displays the items in the shopping cart,
 * allows the user to select a delivery option, enter their personal information and payment details,
 * and place an order. The component uses the useContext and useState hooks to manage the shopping cart
 * and form data, and includes icons from the React-icons library. The component also calculates the
 * total cost of the order and saves the order information.
 */
import Image from "next/image";
import Link from "next/link";
import { castoro } from "./index.js";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../components/ShoppingCartContext.js";
import { RiPlantLine } from "react-icons/ri";
import { BsPaypal } from "react-icons/bs";
import { FaGooglePay, FaApplePay } from "react-icons/fa";

export default function Checkout() {
  const { cartItems, onAddToCart, onRemoveFromCart, onClearCart } =
    useContext(ShoppingCartContext);
  const [formData, setFormData] = useState({});
  const [delivery, setDelivery] = useState("");

  const deliveryOptions = [
    { type: "Pick up", price: 0 },
    { type: "Eco-Shipping", price: 12 },
    { type: "Standard Shipping", price: 15 },
    { type: "Express Shipping", price: 20 },
  ];

  function calculateTotal() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    const selectedDelivery = deliveryOptions.find(
      (option) => option.type === delivery
    );
    if (selectedDelivery) {
      total += selectedDelivery.price;
    }
    return total;
  }
  const totalCost = calculateTotal().toFixed(2);
  /** LEARNING NOTE
 The function handles the order click event by storing relevant data in local storage and clearing
 the cart. Because of navigation to other page: /yourorder, or going back the data will be still 
 stored in local storage, contrary to the use of passing states and variables as props.
 */
  const handleOrderClick = () => {
    localStorage.setItem("orderItems", JSON.stringify(cartItems));
    localStorage.setItem("delivery", delivery);
    localStorage.setItem("totalCost", JSON.stringify(totalCost));
    localStorage.setItem(
      "formData",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      })
    );
    setFormData({});
    setDelivery("");
    onClearCart();
  };

  return (
    <div className={`mx-auto mt-14 lg:w-8/12 ${castoro.className}`}>
      <h1 className="py-5 text-center text-2xl font-bold text-stone-600 lg:pt-10">
        Your Order
      </h1>
      {cartItems.length === 0 && (
        <p className="mx-auto flex w-fit flex-row p-5 text-2xl lg:pt-16">
          Your order is empty <RiPlantLine className="ms-2 mt-1" />
        </p>
      )}
      {cartItems.map((cartItem, index) => (
        <div key={index} className="flex flex-row justify-between">
          <div className="flex flex-row">
            <button
              className=" mx-2 my-auto h-7 w-7 rounded-full bg-stone-200 text-center text-lg font-bold hover:bg-stone-100 hover:text-stone-500"
              onClick={() => onRemoveFromCart(cartItem)}
            >
              -
            </button>
            <Image
              src={cartItem.image}
              width={70}
              height={90}
              alt={`Plant product ${cartItem.name}`}
              priority={true}
              className="mx-3"
            />
            <button
              className=" mx-2 my-auto h-7 w-7 rounded-full bg-stone-200 text-center text-lg font-bold hover:bg-stone-100 hover:text-stone-500"
              onClick={() => onAddToCart(cartItem)}
            >
              +
            </button>
            <p className="my-auto px-3 text-xl">{cartItem.name}</p>
          </div>
          <div className="flex flex-row">
            <p className="my-auto text-xl">
              {cartItem.quantity} x {cartItem.price.toFixed(2)}€
            </p>
          </div>
        </div>
      ))}
      <div className="h-[1px] w-full rounded-full bg-stone-400"></div>
      <div className="flex flex-row justify-between px-2 pt-3">
        <h1 className=" ps-14 text-2xl font-bold text-stone-600 lg:ps-16">
          Total
        </h1>
        <span className="pe-14 text-2xl font-bold text-stone-600 lg:pe-0">
          {calculateTotal().toFixed(2)}€
        </span>
      </div>
      <div className="mt-5 flex flex-row justify-end">
        <h1 className="text-base font-bold text-stone-600 lg:pe-16">
          Choose your delivery:
        </h1>
        <select
          value={delivery.type}
          onChange={(e) => setDelivery(e.target.value)}
        >
          {deliveryOptions.map((option) => (
            <option key={option.type} value={option.type}>
              {option.type} {option.price.toFixed(2)}€
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5 flex flex-row lg:mt-0">
        <form name="user checkoutmn data">
          <div className="lg:mx-none mx-auto flex w-8/12 flex-col justify-between lg:w-full">
            {/** LEARNING NOTE
            * || (OR) statement in the `value` atribute provides a default value of an empty string, 
           preventing the input field from being controlled by an undefined or null value, which 
           could lead to unexpected behavior or errors.
            * spread operator (...formData), although it is used to create a new object by copying all the 
           existing properties of formData (which are non-existent, as formData is initialized as empty object), 
           here it let's us dynamically build the object "from scratch" by adding or updating properties with the 
           current values from the input fields.
           */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="my-2 rounded-sm border-2 border-stone-500 p-0.5 ps-1"
              value={formData.name || ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              name="phone"
              required=""
              placeholder="Phone number"
              className="my-2 rounded-sm border-2 border-stone-500 p-0.5 ps-1"
              value={formData.phone || ""}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input
              name="email"
              required=""
              placeholder="E-mail"
              type="email"
              className="my-2 rounded-sm border-2 border-stone-500 p-0.5 ps-1"
              value={formData.email || ""}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="mt-2 flex flex-row justify-evenly text-2xl ">
              <BsPaypal className="mt-3 hover:scale-105 hover:text-stone-400" />
              <FaGooglePay className="text-5xl hover:scale-105 hover:text-stone-400" />
              <FaApplePay className="text-5xl hover:scale-105 hover:text-stone-400" />
            </div>
            <div className="lg:mx-none mx-auto h-[1px] w-10/12 rounded-full bg-stone-400 lg:w-full"></div>
            <p className="my-4 text-center">or pay using credit card</p>
            <div className="lg:mx-none mx-auto flex w-8/12 flex-col lg:w-full">
              <label>Card holder full name</label>
              <input
                name="card-name"
                type="text"
                placeholder="Enter your full name"
                className="my-2 rounded-sm border-2 border-stone-500 p-0.5 ps-1"
              />
              <label>Card Number</label>
              <input
                type="text"
                name="cardnumber"
                placeholder="0000 0000 0000 0000"
                pattern="(\d{4}\s?){3}\d{4}(?!\d)"
                maxLength="19"
                className="my-2 rounded-sm border-2 border-stone-500 p-0.5 ps-1 invalid:text-pink-900"
              />
              <div className="flex flex-row justify-between">
                <h5>Expiry Date</h5> <h5> CVV</h5>
              </div>
              <div className="flex flex-row">
                <input
                  type="text"
                  name="carddate"
                  title="Expiry Date"
                  placeholder="01/23"
                  pattern="(0[1-9]|1[0-2])\/\d{2}"
                  maxLength={5}
                  className="my-2 w-6/12 rounded-sm border-2 border-stone-500 p-0.5 ps-1 invalid:text-pink-900 lg:w-fit"
                />
                <input
                  type="text"
                  name="cvv"
                  title="CVV"
                  placeholder="CVV"
                  pattern="\d{3}"
                  maxLength="3"
                  className="my-2 w-6/12 rounded-sm border-2 border-stone-500 p-0.5 ps-1 invalid:text-pink-900 lg:w-fit"
                />
              </div>
              <Link href="/yourorder" className="mx-auto my-5 md:hidden">
                <button
                  onClick={handleOrderClick}
                  className="h-10 w-40 cursor-pointer bg-black pt-1 text-xs text-white hover:bg-stone-700 sm:text-sm"
                >
                  ORDER
                </button>
              </Link>
            </div>
          </div>
        </form>
        <div className="hidden md:flex md:flex-row md:justify-end md:ps-48">
          <Link href="/yourorder" className="md:m-auto">
            <button
              onClick={handleOrderClick}
              className="h-10 w-40 cursor-pointer bg-black pt-2 text-xs text-white hover:bg-stone-700 sm:text-sm"
            >
              ORDER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
