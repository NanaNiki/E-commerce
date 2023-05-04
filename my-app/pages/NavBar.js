import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi";

export default function NavBar() { 
    return ( 
        <nav className="fixed top-0 left-0 h-16 w-full">
        <h1>Plantea</h1>
        <ul>
            <li>
            <Link className="navbar-brand" to="/">Home</Link>
            </li>
            <li>
            <Link className="navbar-brand" to="/">Catalogue</Link>
            </li>
            <li>
            <Link className="navbar-brand" to="/">Contact</Link>
            </li>
        </ul>
        <FaShoppingCart />
        <HiOutlineMagnifyingGlass />
        </nav>
    ) 
}