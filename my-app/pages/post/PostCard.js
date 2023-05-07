import Image from "next/image";
import Link from "next/link";
import { castoro } from "../index.js";
import { inter } from "../index.js";
import NavBar from "../NavBar";

export default function PostCard({ posts }) {
  return (
    <>
      <NavBar />
      <div className="relative flex flex-row justify-between mt-14">
        <Image
          src={posts.image}
          width={900}
          height={400}
          className="mb-4"
          alt={posts.title}
          priority
        />
        <div
          className={`flex flex-col text-end justify-center p-10 ${castoro.className}`}
        >
          <h1 className={`text-4xl text-start my-auto ${castoro.className}`}>
            {posts.title}
          </h1>
          <p className="text-base text-stone-600 italic">Written by</p>
          <p className="text-xl p-1">{posts.author}</p>
          <p className="text-end text-base text-stone-600 italic">
            {posts.date}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center p-10">
      {posts.sections && posts.sections.map((section, index) => (
        <div key={index} className="w-1/2">
          <h2 className={`text-3xl p-16 text-center ${castoro.className}`}>{section.sectiontitle}</h2>
          <p className="text-lg">{section.content}</p>
        </div>
      ))}
      </div>
      <div
        className={` flex flex-col justify-between p-4 text-center text-3xl  ${castoro.className}`}
      >
        <h2 className="p-2">Get 15% off your next order,</h2>
        <h2 className="pb-2">Subscribe to our Newsletter</h2>
        <div className="flex flex-row justify-center m-auto p-10">
          <input
            type="email"
            className="ps-2 pe-72 bg-neutral-200 text-stone-950 text-base"
            placeholder="Enter your email here"
          ></input>
          <button
            className={` mx-auto cursor-pointer bg-black w-40 h-10 text-white text-sm hover:bg-stone-700 ${inter.className}`}
          >
            SUBSCRIBE
          </button>
        </div>
        <Link href="/#blog" passHref>
          <button className=" hover:underline underline-offset-4 hover:text-stone-500">Back</button>
        </Link>
      </div>
    </>
  );
}
