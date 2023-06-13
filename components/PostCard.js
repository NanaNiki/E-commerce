/**
 * The function displays a blog post with an image, title, author, date, and sections of content.
 * @returns This code is returning a React component that displays a blog post with an image, title,
 * author, date, and sections of content. The component receives a `postsData` prop that contains the
 * data for the post, including the image source, alt text, title, author, date, and an array of
 * sections with their titles and content.
 */
import { castoro } from "../pages/index.js";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ postsData }) {
  return (
    <>
      <div className="relative mt-14 flex flex-row flex-wrap justify-center lg:flex-nowrap">
        <Image
          src={postsData.image}
          width={900}
          height={400}
          className="mb-4 w-screen"
          alt={postsData.alt}
          priority={true}
        />
        <div
          className={`flex flex-col justify-center p-10 text-end ${castoro.className}`}
        >
          <h1
            className={`my-auto text-start text-3xl lg:text-4xl ${castoro.className}`}
          >
            {postsData.title}
          </h1>
          <p className="text-base italic text-stone-600">Written by</p>
          <p className="p-1 text-xl">{postsData.author}</p>
          <p className="text-end text-base italic text-stone-600">
            {postsData.date}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10">
        {postsData.sections.map((section, index) => (
          <div key={index} className="lg:w-1/2">
            <h2
              className={`p-10 text-center text-2xl lg:p-16 lg:text-3xl ${castoro.className}`}
            >
              {section.sectiontitle}
            </h2>
            <p className="lg:text-lg">{section.content}</p>
          </div>
        ))}
        <Link
          href="/#blog"
          passHref
          className="py-auto mt-10 h-8 w-20 bg-stone-300 p-0.5 text-center hover:text-stone-500 sm:text-lg lg:w-32 lg:text-xl"
        >
          Back
        </Link>
      </div>
    </>
  );
}
