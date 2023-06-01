/**
 * This is a Next.js page component that displays a product card for a specific plant, allows the user
 * to add it to their shopping cart, and updates the cart item count.
 * @returns The `ProductPage` component is being returned.
 */
import { useRouter } from "next/router";
import plantsData from "../../data/plants.json";
import ProductCard from "../../components/ProductCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../components/ShoppingCartContext";

export default function ProductPage() {
  const router = useRouter();
  const plantId = parseInt(router.query.id);
  const plant = plantsData.find((plant) => plant.id === plantId);
  const { onAddToCart, updateQuantity, quantity, setCartItemsCount } =
    useContext(ShoppingCartContext);

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
        setCartItemsCount={setCartItemsCount}
      />
    </>
  );
}
