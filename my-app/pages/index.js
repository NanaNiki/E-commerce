import { Inter } from "next/font/google";
import NavBar from './NavBar';
import Start from './Start';

{/* import { Castoro_Titling } from "next/font/google";
const castoroT = Castoro_Titling({ subsets: ["latin"], weight: ["400"] }); */}
const inter = Inter({ subsets: ["latin"], weight: ["300"] });

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
      className={`flex min-h-screen flex-col items-center justify-between p-5 bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 ${inter.className}`}
    >
    <NavBar />
    <Start />  
    </main>
  )
}
