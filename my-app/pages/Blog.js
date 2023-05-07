import { castoro } from "./index.js";
import { inter } from "./index.js";
import Image from "next/image";
import Link from "next/link.js";
import posts from "./post/posts.json";

export default function Blog() {
  return (
    <>
      <div
        className="flex flex-row justify-center w-screen lg:p-10 pt-0"
        id="blog"
      >
        {posts.map((post, index) => {
          return (
            <span
              key={index}
              className="flex flex-col h-fit lg:p-10 special-p-5"
            >
              <label
                className={`z-10 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 py-3 lg:px-20 special-text-sm special-p-2 ${castoro.className}`}
              >
                {" "}
                <h5 className="lg:text-base text-stone-600 italic">
                  Written by
                </h5>
                <h5 className="lg:text-xl"> {post.author}</h5>
              </label>
              <Link href={`/post/${post.id}`} passHref>
                <Image
                  src={post.image}
                  width={550}
                  height={300}
                  className="inline-block hover:scale-95 ease-in-out duration-300"
                />
              </Link>

              <div
                className={` flex flex-col w-fit justify-end py-2 text-start ${castoro.className}`}
              >
                <h5 className="text-end text-base me-1 text-stone-600 italic  special-text-sm">
                  {post.date}
                </h5>
                <Link href={`/post/${post.id}`} passHref>
                  <h5 className="lg:text-xl lg:w-[70%] hover:scale-95 ease-in-out duration-300  special-text-sm">
                    {post.title}
                  </h5>
                </Link>
              </div>
            </span>
          );
        })}
      </div>
      <div
        className={`flex flex-col justify-between p-4 text-center lg:text-3xl sm:text-xl  ${castoro.className} `}
        id="newsletter"
      >
        <h2 className="lg:p-2">Get 15% off your next order,</h2>
        <h2 className="pb-2">Subscribe to our Newsletter</h2>

        <div className="relative flex flex-row justify-center m-auto lg:p-10 sm:flex-wrap special-flex-wrap">
          <input
            type="email"
            className="ps-2 lg:pe-72 lg:h-10 bg-neutral-200 text-stone-950 text-base mb-4"
            placeholder="Enter your email here"
          ></input>
          <button
            className={` mx-auto cursor-pointer bg-black w-40 h-10 text-white text-sm hover:bg-stone-700 ${inter.className}`}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </>
  );
}
