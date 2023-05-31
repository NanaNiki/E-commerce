/**
 * This is a Next.js page component that displays a category card based on the category value passed in
 * the URL query parameter.
 * @returns If the category is not found, the component returns a div with the text "Category not
 * found". Otherwise, it returns a CategoryCard component with the data of the found category.
 */
import { useRouter } from "next/router";
import { categoriesData } from "../../components/Categories";
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
