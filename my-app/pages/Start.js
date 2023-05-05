import Image from "next/image";
import { Castoro } from "next/font/google";

const castoro = Castoro({ subsets: ["latin"], weight: ["400"] });

export default function Start() {
  return (
    <>
      <section className="start w-full h-screen">
        <div className="flex flex-col h-full overflow-hidden z-0">
          <Image
            src="/planthero.jpg"
            width={1500}
            height={200}
            className="mt-5"
          />
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
        <div className="z-10 flex flex-col justify-center w-[700px] h-[350px] bg-white absolute top-52">
          <h1 className={`${castoro.className} text-5xl text-center`}>
            Find perfect plants
          </h1>
          <h1 className={`${castoro.className} text-5xl text-center`}>
            for your home
          </h1>
          <h2 className="text-center mt-10 mb-5">
            Beautiful plants that encourage you to get creative.
          </h2>
          <button className="mt-4 p-2 mx-auto cursor-pointer bg-black w-40 h-10 text-white text-sm font-bold hover:bg-stone-900 hover:animate-pulse">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}
