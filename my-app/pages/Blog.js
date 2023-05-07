import { castoro } from "./index.js";
import { inter } from "./index.js";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "How to water your freaking plants so they don't die after one week",
    src: "/post1.jpg",
    date: "2/4/2023",
    author: "Mellissa Bail",
  },
  {
    id: 2,
    title: "How to repot a Monstera without killing it and foster its growth",
    src: "/post2.jpg",
    date: "1/3/2023",
    author: "Jesse Rowe",
  },
];

export default function Blog() {
  return (
    <>
      <div className="flex flex-row justify-center p-10 pt-0">
        {posts.map((post, index) => {
          return (
            <span key={index} className="flex flex-col p-10">
              <label
                className={`z-10 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 py-3 px-20 ${castoro.className}`}
              >
                {" "}
                <h5 className="text-base text-stone-600 italic">Written by</h5>
                <h5 className="text-xl"> {post.author}</h5>
              </label>

              <Image
                src={post.src}
                width={550}
                height={300}
                className="inline-block hover:scale-95 ease-in-out duration-300"
              />

              <div
                className={` flex flex-col justify-between py-2 text-start ${castoro.className}`}
              >
                <h5 className="text-end text-base text-stone-600 italic">
                  {post.date}
                </h5>
                <h5 className="text-xl w-[70%] hover:scale-95 ease-in-out duration-300">
                  {post.title}
                </h5>
              </div>
            </span>
          );
        })}
      </div>
      <div className={` flex flex-col justify-between p-4 text-center text-3xl  ${castoro.className}`}>
        <h2 className="p-2">
          Get 15% off your next order,
        </h2>
        <h2 className="pb-2">
          Subscribe to our Newsletter
        </h2>
        <div className="flex flex-row justify-center m-auto p-10">
        <input type="email" className="ps-2 pe-72 bg-neutral-200 text-stone-950 text-base" placeholder="Enter your email here" ></input>
        <button className={` mx-auto cursor-pointer bg-black w-40 h-10 text-white text-sm hover:bg-stone-700 ${inter.className}`}>
          SUBSCRIBE
        </button>
        </div>
      </div>
    </>
  );
}
