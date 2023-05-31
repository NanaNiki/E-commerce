/* This code is importing components and fonts, defining font variables, and exporting a default
function that returns JSX elements. It also uses the `dynamic` function from Next.js to load some
components dynamically. The `Start` component is rendered along with the dynamically loaded
`Categories`, `Featured`, and `Blog` components inside a `main` element with some classes and styles
applied. */

import Start from "./components/Start";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { Castoro } from "next/font/google";
import { Castoro_Titling } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-inter",
});
export const castoro = Castoro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-castoro",
});
export const castoroT = Castoro_Titling({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-castotoT",
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-white text-stone-800 ${inter.className}`}>
      <Start />
      <DynamicCategories />
      <DynamicFeatured />
      <DynamicBlog />
    </main>
  );
}

const DynamicCategories = dynamic(() => import("./components/Categories"), {
  ssr: false,
});
const DynamicFeatured = dynamic(() => import("./components/Featured"), {
  ssr: false,
});
const DynamicBlog = dynamic(() => import("./components/Blog"), { ssr: false });
