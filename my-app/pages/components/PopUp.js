/**
 * The function returns a pop-up component with a message and an image, which can be closed by clicking
 * a button.
 * @returns A React functional component that renders a pop-up message with a title and an image, and a
 * thank you message that appears after the pop-up is closed. The pop-up has a close button and is
 * styled with CSS classes. The component takes a prop `onHandleClose` which is a function to handle
 * the closing of the pop-up.
 */
import { GiThreeLeaves } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { castoro } from "../index.js";
import Image from "next/image.js";

export default function PopUp({ onHandleClose }) {
  return (
    <>
      <div
        className={`z-30 fixed top-1/3 sm:left-[25%] left-8 flex flex-col sm:w-[50%] sm:h-[30%] w-10/12 h-44 bg-white shadow-lg shadow-stone-400 has-animation ${castoro.className}`}
      >
        <div className="flex flex-col m-auto pb-4">
          <div className="justify-center flex flex-row text-center md:text-4xl text-xl text-stone-800">
            <h1>The best</h1>
            <h1>
              <GiThreeLeaves className="mx-2 text-emerald-700" />
            </h1>
            <h1>Plant</h1>
            <h1>
              <GiThreeLeaves className="mx-2 text-emerald-700" />
            </h1>
          </div>
          <h1 className="text-center mt-5 md:text-4xl text-xl text-stone-800">
            News are on the way!
          </h1>
        </div>
        <div className="absolute top-2 w-full h-[1px] bg-stone-400 rounded-full"></div>
        <div className="absolute bottom-2 w-full h-[1px] bg-stone-400 rounded-full"></div>
        <div className="absolute left-2 h-full w-[1px] bg-stone-400 rounded-full"></div>
        <div className="absolute right-2 h-full w-[1px] bg-stone-400 rounded-full"></div>

        <div
          className={`z-30 fixed top-1/3 sm:left-[25%] left-8 flex flex-col sm:w-[50%] sm:h-[30%] w-10/12 h-44 bg-emerald-900 shadow-lg shadow-stone-400 opacity-0 popup-animation ${castoro.className}`}
        >
          <Image
            src={"/popup.svg"}
            alt="popup thank you! message on leaves"
            fill={true}
          />
          <div className="justify-end flex flex-row mt-4 me-4 z-20">
            <button
              onClick={onHandleClose}
              className="text-emerald-600 text-xl hover:text-stone-200"
            >
              <RxCross1 />
            </button>
          </div>
          <h1 className="z-20 text-center mx-auto my-auto md:text-4xl text-xl text-stone-200">
            Thank You!
          </h1>
        </div>
      </div>
    </>
  );
}
