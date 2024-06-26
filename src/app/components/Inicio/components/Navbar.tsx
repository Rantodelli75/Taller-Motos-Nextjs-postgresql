
import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon, BiUserCircle } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { FaSignOutAlt } from "react-icons/fa";



const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
    setShowMenu(!showMenu);
};


    function signOut() {
        throw new Error("Function not implemented.");
    }

  //const isAuthenticated = Boolean(currentUser);
    const router = useRouter()

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
                <button
                    onClick={() => router.push('/')}
                    className=" text-lg font-medium  text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                >
                INICIO
                </button>
                </li>
                <li className="py-4">
                    <button
                        onClick={() => router.push('/components/Servicios')}
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    SERVICIOS
                    </button>
                </li>
                <li className="py-4">
                    <button
                        onClick={() => router.push('/components/Mimoto')}
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    MI MOTO
                    </button>
                </li>
                <li className="py-4">
                    <button
                        onClick={() => router.push('/components/Contacto')}
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    CONTACTO
                    </button>
                </li>
                <li className="py-4">
                    <button
                        onClick={() => router.push('/components/Users')}
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    GESTIONAR
                    </button>
                </li>
                <li className="py-4">
                <Popover placement="bottom" offset={20} showArrow>
                    <PopoverTrigger>
                        <a  className="text-orange-600 hover:text-amber-700">
                        <BiUserCircle size={25}/>
                        </a>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2 text-slate-950 bg-gray-200 rounded-xl w-full h-36">
                            <div className="text-small font-bold p-2 text-gray-500">Rafael José Covarrubio</div>
                            <div className="text-tiny p-2 text-gray-400 font-semibold">rafcovte@gmail.com</div>
                            <div className="flex text-orange-600 hover:text-amber-700 p-2">
                            <a  className="flex text-orange-600 hover:text-amber-700" href="../auth/login">
                                <FaSignOutAlt size={25}/>
                            </a>
                            <a className="ml-3" href="../auth/login">Salir</a>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                </li>
                </ul>
            </nav>
        </div>
    </div>
    </div>
);
};

export default Navbar;
