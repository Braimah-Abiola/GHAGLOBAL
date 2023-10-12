import { Link, NavLink } from "react-router-dom"
import { logo } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
    return (
        <div className="w-full mx-auto max-w-[1650px] bg-white py-4 flex flex-row justify-between items-center">
            <Link to="/">
                <img src={logo} />
            </Link>

            <div className="sm:flex hidden">
                <ul className="flex justify-center">
                    {navLinks.map((navLink) => (
                        <li key={navLink.link} className='mr-12'>
                            <NavLink
                                to={navLink.link}
                                exact
                                className="nav_link font-schibsted text-[18px] font-normal">
                                {navLink.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="bg-primary hover:bg-[#5E41D1] px-6 py-4 text-white rounded-lg">Contact Us</button>
        </div>
    )
}

export default Navbar