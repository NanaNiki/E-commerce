import NavBar from "./NavBar";
import Start from "./Start";
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

export function observeScroll(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  elements.forEach((el) => observer.observe(el));
}

export default function Home() {
  return (
    <main
      className={` min-h-screen bg-white text-stone-800 ${inter.className}`}
    >
      <NavBar />
      <Start />
      <DynamicCategories />
      <DynamicFeatured />
      <DynamicBlog />
    </main>
  );
}

const DynamicCategories = dynamic(() => import("./Categories"), { ssr: false });
const DynamicFeatured = dynamic(() => import("./Featured"), { ssr: false });
const DynamicBlog = dynamic(() => import("./Blog"), { ssr: false });
