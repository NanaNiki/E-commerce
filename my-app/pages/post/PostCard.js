import { castoro } from "../index.js";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";
import Footer from "../Footer.js";

export default function PostCard({ posts }) {
  return (
    <>
      <NavBar />
      <div className="relative flex flex-row justify-center mt-14 lg:flex-nowrap md:flex-nowrap flex-wrap">
        <Image
          src={posts.image}
          width={900}
          height={400}
          className="mb-4"
          alt="three plants o the table with a watering pot"
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
        <Link
          href="/#blog"
          passHref
          className="mt-10 lg:text-xl sm:text-lg text-center py-auto bg-stone-300 lg:w-32 h-8 p-0.5 w-20 hover:text-stone-500"
        >
          Back
        </Link>
      </div>

      <Footer />
    </>
  );
}
