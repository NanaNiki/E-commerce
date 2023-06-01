/**
 * The Layout function returns a component that includes a Navbar, a main section with children
 * components, and a Footer with a pop-up window that can be toggled on and off.
 * @returns The `Layout` component is being returned, which contains a `Navbar`, a `main` element with
 * `children` passed as props, and a `Footer` component with `showPopUp` and `setShowPopUp` passed as
 * props. The `useState` hook is used to manage the state of `showPopUp` which is initially set to
 * `false`.
 */
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

export default function Layout({ children }) {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div>
      <Navbar />
      <main className={`${showPopUp ? "opacity-30" : ""}`}>{children}</main>
      <Footer showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
    </div>
  );
}
