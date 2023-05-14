import { useRouter } from "next/router";
import plantsData from "./plants.json";
import ProductCard from "./ProductCard";
import { useContext } from 'react'
import { ShoppingCartContext } from '../ShoppingCartContext'

export default function ProductPage() {
  const router = useRouter();
  const plantId = parseInt(router.query.id);
  const plant = plantsData.find((plant) => plant.id === plantId);
  const { onAddToCart, updateQuantity, quantity } = useContext(ShoppingCartContext);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <>
      <ProductCard
        plantsData={plant}
        onAddToCart={onAddToCart}
        quantity={quantity}
        updateQuantity={updateQuantity}
      />
    </>
  );
}
