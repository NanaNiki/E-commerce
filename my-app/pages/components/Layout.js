import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

export default function Layout({ children }) {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div>
      <Navbar />
      <main className={`${showPopUp ? "opacity-40" : ""}`}>{children}</main>
      <Footer showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
    </div>
  );
}
