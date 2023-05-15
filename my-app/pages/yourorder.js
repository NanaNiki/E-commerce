import { useState, useEffect } from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { castoro } from "./index.js";
import Image from "next/image.js";

export default function SeeYourOrder() {
  const [orderItems, setOrderItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [delivery, setDelivery] = useState("");
  const [totalCost, setTotalCost] = useState(0);

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
    <div className={`mt-14 lg:w-6/12 mx-auto ${castoro.className}`}>
      <h1 className="text-center pt-10 text-2xl font-bold text-stone-600">
        Your Order
      </h1>
      <h2 className="p-5 mx-auto text-2xl flex flex-row w-fit"><GiThreeLeaves className="me-2" />  New Plants: </h2>
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
            <p className="text-center my-auto">{item.quantity} of</p>
            <p key={item.id} className="text-center my-auto">
              {item.name}{" "}
            </p>
          </div>
        ))}
      </div>

      <h2 className="pt-10 pb-5 text-2xl lg:text-start text-center">
        Your Details:
      </h2>
      <div className="lg:ps-0 ps-6">
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Delivery: {delivery ? delivery : "Not selected"}</p>
        <p>Total: {totalCost}€</p>
      </div>
      <div className="flex flex-row justify-end pt-5">
        <button
          onClick={() => window.history.back()}
          className="pt-2 px-14 m-auto cursor-pointer bg-black w-60 h-10 text-white sm:text-base hover:bg-stone-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
