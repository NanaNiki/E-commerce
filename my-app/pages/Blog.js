import { castoro } from "./index.js";
import Image from "next/image";
import Link from "next/link.js";
import posts from "./post/posts.json";
import Footer from "./Footer.js";

export default function Blog() {
  return (
    <>
      <section className="flex flex-row justify-center" id="blog">
        {posts.map((post, index) => {
          return (
            <span key={index} className="flex flex-col md:px-8 sm:px-4 special-px-2">
              <label
                className={`z-10 translate-y-full w-fit h-fit bg-stone-200 bg-opacity-90 py-3 lg:px-20 md:px-10 special-text-sm special-p-2 ${castoro.className}`}
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
                  width={530}
                  height={300}
                  className="hover:scale-95 ease-in-out duration-300"
                />
                <label className="flex flex-col">
                  <h6
                    className={`text-base text-stone-600 italic special-text-xs ${castoro.className}`}
                  >{post.date}
                  </h6>
                  <h4
                    className={`lg:text-2xl md:text-xl lg:w-[70%] hover:scale-95 ease-in-out duration-300 special-text-sm  ${castoro.className}`}
                  >{post.title}
                  </h4>
                </label>
              </Link>
            </span>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
