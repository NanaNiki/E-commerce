import { castoro } from "./index.js";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import Link from "next/link.js";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(
    () => import('./components/Map'),
    { ssr: false }
  );

export default function Contact() {  
  return (
    <div className={`mt-14 lg:w-8/12 mx-auto ${castoro.className}`}>
      <h1 className="p-5 lg:pt-16 mx-auto text-2xl flex flex-row w-fit">Our Customer Service is always happy to help You!</h1>
        <div className="flex flex-row ps-4 justify-center text-lg">
          <BsFillTelephoneFill className="me-3 mt-1" /> <Link href="tel:123-456-789"
            target="_blank" className="hover:text-stone-600 hover:scale-105"> +00 123 456 789 </Link>
          <BsMailbox2 className="mx-3 mt-1"/> <Link href="mailto:nicol.wesolowska@gmail.com"
            target="_blank" className="hover:text-stone-600 hover:scale-105">plantea@gmail.com</Link>
        </div> 
        <h1 className="p-5 lg:pt-7 mx-auto text-2xl flex flex-row w-fit">Visit us!</h1>  
        <DynamicMap />
    </div>
  );
}
