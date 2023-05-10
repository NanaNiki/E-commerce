import { useRouter } from "next/router";
import { categoriesData } from "../../Categories";
import CategoryCard from "./CategoryCard";

export default function CategoryPage() {
  const router = useRouter();
  const categoryVal = router.query.val;
  const category = categoriesData.find((cat) => cat.val === categoryVal);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <CategoryCard categoriesData={category} />
    </>
  );
}
