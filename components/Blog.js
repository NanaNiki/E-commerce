/**
 * This is a React component that renders a blog section with posts fetched from a JSON file and
 * displayed with images, titles, authors, and dates.
 * @returns A React component that renders a section containing a list of blog posts. Each blog post is
 * represented by an image, author name, date, and title, and is wrapped in a Link component that
 * navigates to the individual blog post page when clicked. The data for the blog posts is sourced from
 * a JSON file.
 */
import { castoro } from "../pages/index.js";
import Image from "next/image";
import Link from "next/link.js";
import posts from "../data/posts.json";

export default function Blog() {
  return (
    <section className="flex flex-row justify-center" id="blog">
      {posts.map((post, index) => {
        return (
          <span
            key={index}
            className="flex flex-col justify-center px-2 md:px-6 lg:px-8"
          >
            <label
              className={`z-10 h-fit w-fit translate-y-full bg-stone-200 bg-opacity-90 p-2 py-3 text-xs md:px-10 md:text-lg lg:px-20 lg:text-base ${castoro.className}`}
            >
              {" "}
              <h5 className="italic text-stone-600">Written by</h5>
              <h5 className="lg:text-xl"> {post.author}</h5>
            </label>
            <Link
              href={`/post/${post.id}`}
              aria-label="Go to see the post"
              passHref
            >
              <Image
                src={post.image}
                width={530}
                height={300}
                alt={post.alt}
                className="block duration-300 ease-in-out hover:scale-95"
              />
              <div className="w-full max-w-[530px]">
                <h6
                  className={`text-end text-xs italic text-stone-600 md:text-base lg:text-base ${castoro.className}`}
                >
                  {post.date}
                </h6>
                <h3
                  className={`text-sm duration-300 ease-in-out hover:scale-95 sm:text-lg md:text-xl lg:text-2xl ${castoro.className}`}
                >
                  {post.title}
                </h3>
              </div>
            </Link>
          </span>
        );
      })}
    </section>
  );
}
