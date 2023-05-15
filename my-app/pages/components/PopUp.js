import { GiThreeLeaves } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { castoro } from "../index.js";

export default function PopUp({ onHandleClose }) {
  return (
    <>
      <div
        className={`peer z-30 fixed top-1/3 md:left-[30%] left-8 flex flex-col md:w-[40%] md:h-[40%] w-10/12 h-44 bg-stone-100 shadow-lg shadow-stone-400  ${castoro.className}`}
      >
        <div className="justify-end flex flex-row mt-4 me-4">
          <button
            onClick={onHandleClose}
            className="hover:text-emerald-700 text-xl"
          >
            <RxCross1 />
          </button>
        </div>
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
      </div>
    </>
  );
}
