
import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon, BiUserCircle } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { useRouter } from 'next/navigation';


export const Navlinks = [
{
    id: 1,
    name: "HOME",
    link: "/#",
},
{
    id: 2,
    name: "ACERCA DE",
    link: "#About",
},
{
    id: 3,
    name: "BOOKING",
    link: "#Booking",
},
];

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
    setShowMenu(!showMenu);
};


    function signOut() {
        throw new Error("Function not implemented.");
    }

  //const isAuthenticated = Boolean(currentUser);
return (
    <div
        className=" z-10 shadow-lg w-full dark:text-white duration-300 bg-white"
    >
    <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
            <div>
            <span className="text-xl ml-5 font-bold text-gray-700 font-serif">FORZA<span className="text-xl font-bold text-orange-500 font-serif">MOTOR</span>CLUB</span>
            </div>
            <nav className="hidden md:block">
                <ul className="flex items-center gap-8">
                <li className="py-4">
                <a
                    href="/"
                    className=" text-lg font-medium  text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                >
                INICIO
                </a>
                </li>
                <li className="py-4">
                    <a
                        href="#About"
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    NOSOTROS
                    </a>
                </li>
                <li className="py-4">
                    <a
                        href="#Booking"
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    MI MOTO
                    </a>
                </li>
                <li className="py-4">
                    <a
                        href="/auth/login"
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    CONTACTO
                    </a>
                </li>
                <li className="py-4">
                    <a href="/auth/login" className="text-orange-600 hover:text-amber-700">
                        <BiUserCircle size={25}/>
                    </a>
                </li>
                </ul>
            </nav>
          {/* Mobile view  */}
        <div className="flex items-center gap-4  ">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
                <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                />
            ) : (
                <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                />
            )}
        </div>
        </div>
    </div>
    </div>
);
};

export default Navbar;