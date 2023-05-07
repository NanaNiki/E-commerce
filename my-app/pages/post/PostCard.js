import Image from "next/image";
import Link from "next/link";
import { castoro } from "../index.js";
import { inter } from "../index.js";
import NavBar from "../NavBar";

export default function PostCard({ posts }) {
  return (
    <>
      <NavBar />
      <div className="relative flex flex-row justify-center mt-14 special-flex-wrap">
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
          <h1
            className={`lg:text-4xl special-text-3xl text-start my-auto ${castoro.className}`}
          >
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
        {posts.sections.map((section, index) => (
          <div key={index} className="lg:w-1/2">
            <h2
              className={`lg:text-3xl special-text-2xl lg:p-16 special-p-10 text-center ${castoro.className}`}
            >
              {section.sectiontitle}
            </h2>
            <p className="lg:text-lg">{section.content}</p>
          </div>
        ))}
        <Link href="/#blog" passHref>
          <button className="my-10 lg:text-2xl sm:text-xl text-center bg-stone-300  w-40 h-10 hover:text-stone-500">
            Back
          </button>
        </Link>
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
