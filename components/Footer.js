/**
 * The function exports a React component for a website footer with a newsletter subscription form and
 * various links.
 * @returns A React functional component that renders a footer section with a newsletter subscription
 * form, links to various pages, and a copyright notice. It also conditionally renders a PopUp
 * component based on the value of the `showPopUp` prop.
 */
import { castoro, inter } from "../pages/index.js";
import Link from "next/link";
import Image from "next/image.js";
import PopUp from "./PopUp.js";

const footertags = [
  { title: "Conntact" },
  { title: "Resources" },
  { title: "About" },
  { name: "Instagram", url: "https://www.instagram.com/" },
  {
    name: "Return Policy",
    url: "https://i.giphy.com/media/a93jwI0wkWTQs/giphy.webp",
  },
  { name: "Our Story", url: "https://www.wikipedia.com/" },
  { name: "Facebook", url: "https://www.facebook.com/" },
  { name: "Track An Order", url: "https://www.fedex.com/" },
  { name: "Careers", url: "https://www.linkedin.com/" },
  { name: "Pinterest", url: "https://www.pinterest.com/" },
  { name: "FAQ", url: "https://thumbs.gfycat.com/ClearMellowKillerwhale.webp" },
  { name: "Press", url: "https://www.twitter.com/" },
  { name: "Youtube", url: "https://www.youtube.com/" },
  {
    name: "Privacy Policy",
    url: "https://64.media.tumblr.com/cc3541eb31ca0bdaa6fce7cc77221e93/tumblr_ppvoy3dN7H1qisc9uo1_500.gif",
  },
  { name: null },
];

export default function Footer({ showPopUp, setShowPopUp }) {
  const handleOpen = () => setShowPopUp(true);
  const handleClose = () => setShowPopUp(false);

  return (
    <>
      <footer className="footer lg:pt-16 relative w-full">
        <div
          className={`flex flex-col justify-between p-5 pb-4 text-center lg:text-3xl sm:text-xl  ${castoro.className} `}
          id="newsletter"
        >
          <h2 className="lg:p-2">Get 15% off your next order,</h2>
          <h2 className="pb-2">Subscribe to our Newsletter</h2>

          <div className="relative flex flex-row justify-center m-auto lg:p-10 lg:flex-nowrap md:flex-nowrap flex-wrap">
            <input
              type="email"
              name="email"
              className="ps-2 lg:w-[440px] h-10 bg-neutral-200 text-stone-950 text-base mb-4 border-2 invalid:text-pink-900"
              placeholder="Enter your email here"
              required
            ></input>
            <Link href="mailto:nicol.wesolowska@gmail.com" target="_blank">
              <button
                onClick={handleOpen}
                className={` mx-auto pt-1 cursor-pointer bg-black w-40 h-10 text-white sm:text-sm hover:bg-stone-700 text-xs ${inter.className}`}
              >
                SUBSCRIBE
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between sm:p-5 pb-3">
          <div className="col-span-1 p-1.5">
            <Link href="/#start" aria-label="Go to homepage"  passHref>
              <Image
                src="/plantealogo.svg"
                alt="logo"
                width={110}
                height={50}
              />
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:w-3/4 w-11/12 ">
            {footertags.map((tag, index) => {
              return (
                <div key={index} className="w-fit mx-1">
                  <span className="sm:text-sm text-xs text-stone-400">
                    {tag.title}
                  </span>
                  <Link href={`${tag.url}`} target="_blank" passHref>
                    <span
                      className={`lg:text-base sm:text-sm text-xs hover:text-stone-500 ${castoro.className} `}
                    >
                      {tag.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row justify-between text-xs text-stone-500 pt-0 p-2">
          <p>Copyright &copy; 2023 All rights reserved</p>
          <p>
            Template from
            <a
              href="https://app.uizard.io/templates/O4Q0AGM8ZruJw9GpR5YQ?_gl=1*r55hdo*_ga*MTgwNzYxODk1MC4xNjgzMTE1NTQ5*_ga_FV1FRPC5G4*MTY4MzQ0OTg1NS4xMS4xLjE2ODM0NTE5NzMuNTAuMC4w"
              target="_blank"
              className="hover:italic hover:text-stone-950"
            >
              {" "}
              Uizard
            </a>
          </p>
        </div>
      </footer>
      {showPopUp && <PopUp onHandleClose={handleClose} />}
    </>
  );
}