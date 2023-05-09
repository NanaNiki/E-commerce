import { useRouter } from "next/router";
import plants from "./plants.json";
import ProductCard from "./ProductCard";

export default function ProductPage() {
  const router = useRouter();
  const plantId = parseInt(router.query.id);
  const plant = plants.find((plant) => plant.id === plantId);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <>
      <ProductCard plants={plant} />
    </>
  );
}
