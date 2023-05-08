import { castoro } from "./index.js";
import { inter } from "./index.js";
import Link from "next/link";

export default function Footer() {
    return (
            <footer className="footer p-5 lg:pt-16">
            <div
        className={`flex flex-col justify-between p-4 text-center lg:text-3xl sm:text-xl  ${castoro.className} `}
        id="newsletter"
      >
        <h2 className="lg:p-2">Get 15% off your next order,</h2>
        <h2 className="pb-2">Subscribe to our Newsletter</h2>

        <div className="relative flex flex-row justify-center m-auto lg:p-10 lg:flex-nowrap md:flex-nowrap flex-wrap">
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
                <div className="flex flex-col justify-end text-center">
                    
                        
                            <p>Copyright &copy; 2023</p>
                            <p>All rights reserved</p>
                            <p>Template from 
                            <Link href="https://app.uizard.io/templates/O4Q0AGM8ZruJw9GpR5YQ?_gl=1*r55hdo*_ga*MTgwNzYxODk1MC4xNjgzMTE1NTQ5*_ga_FV1FRPC5G4*MTY4MzQ0OTg1NS4xMS4xLjE2ODM0NTE5NzMuNTAuMC4w" className="hover:italic hover:text-stone-500"> Uizard</Link></p>
                    
                    </div>
            </footer>
        )
}