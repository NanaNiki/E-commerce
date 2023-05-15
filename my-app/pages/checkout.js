import Image from "next/image";
import Link from "next/link";
import { castoro } from "./index.js";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
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
    <div className={`mt-14 lg:w-8/12 mx-auto ${castoro.className}`}>
      <h1 className="text-center lg:pt-10 py-5 text-2xl font-bold text-stone-600">
        Your Order
      </h1>
      {cartItems.length === 0 && (
        <p className="p-5 lg:pt-16 mx-auto text-2xl flex flex-row w-fit">
          Your order is empty <RiPlantLine className="ms-2 mt-1" />
        </p>
      )}
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
      <div className="flex flex-row px-2 justify-between pt-3">
        <h1 className=" text-2xl lg:ps-16 ps-14 font-bold text-stone-600">
          Total
        </h1>
        <span className="lg:pe-0 pe-14 text-2xl font-bold text-stone-600">
          {calculateTotal().toFixed(2)}€
        </span>
      </div>
      <div className="flex flex-row justify-end mt-5">
        <h1 className="text-base lg:pe-16 font-bold text-stone-600">
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
      <div className="flex flex-row lg:mt-0 mt-5">
        <form>
          <div className="flex flex-col lg:w-full w-8/12 lg:mx-none mx-auto justify-between">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border-2 border-stone-500 p-0.5 my-2 rounded-sm ps-1"
              value={formData.name || ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              name="phone"
              required=""
              placeholder="Phone number"
              className="border-2 border-stone-500 p-0.5 my-2 rounded-sm ps-1"
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
              className="border-2 border-stone-500 p-0.5 my-2 rounded-sm ps-1"
              value={formData.email || ""}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-row text-2xl justify-evenly mt-2 ">
              <BsPaypal className="mt-3 hover:text-stone-400 hover:scale-105" />
              <FaGooglePay className="text-5xl hover:text-stone-400 hover:scale-105" />
              <FaApplePay className="text-5xl hover:text-stone-400 hover:scale-105" />
            </div>
            <div className="lg:w-full lg:mx-none mx-auto w-10/12 h-[1px] bg-stone-400 rounded-full"></div>
            <p className="my-4 text-center">or pay using credit card</p>
            <div className="flex flex-col lg:w-full w-8/12 lg:mx-none mx-auto">
                <label>Card holder full name</label>
                <input
                  name="card-name"
                  type="text"
                  placeholder="Enter your full name"
                  className="border-2 border-stone-500 p-0.5 my-2 rounded-sm ps-1"
                />
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardnumber"
                  placeholder="0000 0000 0000 0000"
                  pattern="(\d{4}\s?){3}\d{4}(?!\d)"
                  maxLength="19"
                  className="border-2 border-stone-500 p-0.5 my-2 rounded-sm invalid:text-pink-900 ps-1"
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
                    className="lg:w-fit w-6/12 border-2 border-stone-500 p-0.5 my-2 rounded-sm invalid:text-pink-900 ps-1"
                  />
                  <input
                    type="text"
                    name="cvv"
                    title="CVV"
                    placeholder="CVV"
                    pattern="\d{3}"
                    maxLength="3"
                    className="lg:w-fit w-6/12 border-2 border-stone-500 p-0.5 my-2 rounded-sm invalid:text-pink-900 ps-1"
                  />
                </div>
                <Link href="/yourorder" className="mx-auto my-5 md:hidden">
                  <button
                    onClick={handleOrderClick}
                    className="pt-1 cursor-pointer bg-black w-40 h-10 text-white sm:text-sm hover:bg-stone-700 text-xs"
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
              className="pt-2 cursor-pointer bg-black w-40 h-10 text-white sm:text-sm hover:bg-stone-700 text-xs"
            >
              ORDER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
