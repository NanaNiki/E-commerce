import Image from "next/image";
import { Castoro } from "next/font/google";

const castoro = Castoro({ subsets: ["latin"], weight: ["400"] });

export default function Start() {
  return (
    <section className="start w-full h-screen p-4 flex flex-col m-auto justify-center custom-img" style={{ backgroundImage: `url(${plantsmain.jpg})` }}>
      <div className="flex flex-col justify-center mx-auto">
        <h1 className={`${castoro.className} text-5xl m-auto`}>
          Find perfect plants
        </h1>
        <h1 className={`${castoro.className} text-5xl text-center`}>
          for your home
        </h1>
        <h2 className="text-center mt-10 mb-5">
          Beautiful plants that encourage you to get creative.
        </h2>
        <button className="m-2 p-2 mx-auto cursor-pointer bg-black w-40 h-10 text-white text-sm font-bold">
          Shop Now
        </button>
        </div>
        <div className="flex flex-col justify-start">
        <span className="text-[10px] text-stone-500 text-end">
          Photo by{" "}
          <a href="https://unsplash.com/it/@nahimaaparicio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Nahima Aparicio
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/vIJAmGqEk40?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        </div>
        
    </section>
  );
}
