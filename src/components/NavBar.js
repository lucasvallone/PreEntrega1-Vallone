import Links from "./Links"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/"><img src={"/assets/kyotogameslogo.png"} alt="Kyoto Games Logo" /></Link>
            <Links />
            <NavLink to="/carrito"><CartWidget numero="0" /></NavLink>
        </nav>
    )
}

export default NavBar