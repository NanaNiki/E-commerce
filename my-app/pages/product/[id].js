import { useRouter } from "next/router";
import { useState } from "react";
import plantsData from "./plants.json";
import ProductCard from "./ProductCard";
import ShoppingCart from "../ShoppingCart";

export default function ProductPage() {
  const router = useRouter();
  const plantId = parseInt(router.query.id);
  const plant = plantsData.find((plant) => plant.id === plantId);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  function updateQuantity(type) {
    if (type === "add") {
      if (quantity >= 50) {
        return;
      }
      setQuantity((prev) => prev + 1);
    } else if (type === "remove") {
      if (quantity <= 1) {
        return;
      }
      setQuantity((prev) => prev - 1);
    }
  }

  const onAddToCart = (plant, quantity) => {
    const exist = cartItems.find((item) => item.id === plant.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === plant.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...plant, quantity }]);
    }
  };

  const onRemoveFromCart = (plant) => {
    const exist = cartItems.find((item) => item.id === plant.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== plant.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === plant.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <ProductCard
        plantsData={plant}
        onAddToCart={onAddToCart}
        quantity={quantity}
        updateQuantity={updateQuantity}
      />
      <ShoppingCart
        cartItems={cartItems}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        updateQuantity={updateQuantity}
      />
    </>
  );
}
