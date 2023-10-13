import { Link, NavLink } from "react-router-dom"
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="w-full px-5 md:px-0 mx-auto max-w-[1440px] bg-white py-4 flex flex-row justify-between items-center">
            <Link to="/">
                <img className="w-fit h-10 md:w-fit md:h-fit" src={logo} />
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
            <Link to="/contact">
                <button className="bg-primary hover:bg-[#5E41D1] px-10 py-4 text-white rounded-lg hidden md:block">Contact Us</button>
            </Link>

            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center md:hidden"
                onClick={() => setToggle((prev) => !prev)}>
                <img src={toggle ? close : menu} alt="Menu icon" />
            </div>

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}>
                            <a href={`${nav.link}`}>{nav.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Navbar