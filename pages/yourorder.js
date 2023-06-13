/**
 * This function displays the user's order details, including the items ordered, delivery information,
 * and total cost.
 * @returns A React component that displays the user's order details, including the items ordered,
 * delivery information, and total cost. It also includes a button to go back to the previous page.
 */
import { useState, useEffect } from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { castoro } from "./index.js";
import Image from "next/image.js";

export default function SeeYourOrder() {
  const [orderItems, setOrderItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [delivery, setDelivery] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  /* LEARNING NOTE
Here we retrieve data from the browser's local storage then parse the data 
from JSON format using `JSON.parse()` and update the state variables accordingly.
*/
  useEffect(() => {
    const storedItems = localStorage.getItem("orderItems");
    const storedFormData = localStorage.getItem("formData");
    const storedDelivery = localStorage.getItem("delivery");
    const storedTotalCost = localStorage.getItem("totalCost");

    if (storedItems && storedFormData) {
      setOrderItems(JSON.parse(storedItems));
      setFormData(JSON.parse(storedFormData));
      setDelivery(storedDelivery);
      setTotalCost(JSON.parse(storedTotalCost));
    }
  }, []);

  return (
    <div className={`mx-auto mt-14 lg:w-6/12 ${castoro.className}`}>
      <h1 className="pt-10 text-center text-2xl font-bold text-stone-600">
        Your Order
      </h1>
      <h2 className="mx-auto flex w-fit flex-row p-5 text-2xl">
        <GiThreeLeaves className="me-2" /> New Plants:{" "}
      </h2>
      <div className="flex flex-row justify-center">
        {orderItems.map((item) => (
          <div className="flex flex-col">
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={70}
              className="mx-4 mb-2"
            />
            <p className="my-auto text-center">{item.quantity} of</p>
            <p key={item.id} className="my-auto text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <h2 className="pb-5 pt-10 text-center text-2xl lg:text-start">
        Your Details:
      </h2>
      <div className="ps-6 lg:ps-0">
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Delivery: {delivery ? delivery : "Not selected"}</p>
        <p>Total: {totalCost}€</p>
      </div>
      <div className="flex flex-row justify-end pt-5">
        <button
          onClick={() => window.history.back()}
          className="m-auto h-10 w-60 cursor-pointer bg-black px-14 pt-2 text-white hover:bg-stone-700 sm:text-base"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
