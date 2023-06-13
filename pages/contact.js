/**
 * The Contact function renders a page with customer service contact information and a map component.
 * @returns A React component for the Contact page, which includes a heading, phone and email contact
 * information with links, and a dynamic map component.
 */
import { castoro } from "./index.js";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import Link from "next/link.js";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map.js"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div className={`mx-auto mt-14 lg:w-8/12 ${castoro.className}`}>
      <h1 className="mx-auto flex w-fit flex-row p-5 text-center text-xl md:text-start md:text-2xl lg:pt-16">
        Our Customer Service is always happy to help You!
      </h1>
      <div className="flex flex-row justify-center text-base md:ps-4 md:text-xl">
        <BsFillTelephoneFill className="me-3 mt-1" />
        <Link
          href="tel:123-456-789"
          target="_blank"
          className="hover:scale-105 hover:text-stone-600"
        >
          +00 123 456 789
        </Link>
        <BsMailbox2 className="mx-3 mt-1" />
        <Link
          href="mailto:nicol.wesolowska@gmail.com"
          target="_blank"
          className="hover:scale-105 hover:text-stone-600"
        >
          plantea@gmail.com
        </Link>
      </div>
      <h1 className="mx-auto flex w-fit flex-row p-5 text-xl md:text-2xl lg:pt-7">
        Visit us!
      </h1>
      <div className="flex flex-row justify-center md:px-20">
        <DynamicMap />
      </div>
    </div>
  );
}
