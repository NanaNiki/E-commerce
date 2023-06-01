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
            className="flex flex-col justify-center lg:px-8 md:px-6 px-2"
          >
            <label
              className={`z-10 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 py-3 p-2 lg:px-20 md:px-10 lg:text-base md:text-lg text-xs ${castoro.className}`}
            >
              {" "}
              <h5 className="text-stone-600 italic">Written by</h5>
              <h5 className="lg:text-xl"> {post.author}</h5>
            </label>
            <Link href={`/post/${post.id}`} passHref>
              <Image
                src={post.image}
                width={530}
                height={300}
                alt={post.alt}
                className="block hover:scale-95 ease-in-out duration-300"
              />
              <div className="w-full max-w-[530px]">
                <h6
                  className={`lg:text-base md:text-base text-xs text-end text-stone-600 italic ${castoro.className}`}
                >
                  {post.date}
                </h6>
                <h3
                  className={`lg:text-2xl md:text-xl sm:text-lg text-sm hover:scale-95 ease-in-out duration-300 ${castoro.className}`}
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
