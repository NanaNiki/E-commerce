import { castoro } from "../index.js";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";
import Footer from "../Footer.js";

export default function PostCard({ postsData }) {
  return (
    <>
      <NavBar />
      <div className="relative flex flex-row justify-center mt-14 lg:flex-nowrap flex-wrap">
        <Image
          src={postsData.image}
          width={900}
          height={400}
          className="mb-4 w-screen"
          alt={postsData.alt}
          priority
        />
        <div
          className={`flex flex-col text-end justify-center p-10 ${castoro.className}`}
        >
          <h1
            className={`lg:text-4xl text-3xl text-start my-auto ${castoro.className}`}
          >
            {postsData.title}
          </h1>
          <p className="text-base text-stone-600 italic">Written by</p>
          <p className="text-xl p-1">{postsData.author}</p>
          <p className="text-end text-base text-stone-600 italic">
            {postsData.date}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-10">
        {postsData.sections.map((section, index) => (
          <div key={index} className="lg:w-1/2">
            <h2
              className={`lg:text-3xl text-2xl lg:p-16 p-10 text-center ${castoro.className}`}
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
