
import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon, BiUserCircle } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { useRouter } from 'next/navigation';



<<<<<<< HEAD:src/app/components/Navbar.tsx
=======
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
>>>>>>> f770145c0de3e749db77cd0214a3e763ffcd2209:src/app/components/Inicio/components/Navbar.tsx

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
    setShowMenu(!showMenu);
};


    function signOut() {
        throw new Error("Function not implemented.");
    }

  //const isAuthenticated = Boolean(currentUser);
<<<<<<< HEAD:src/app/components/Navbar.tsx
  const router = useRouter()
=======

>>>>>>> f770145c0de3e749db77cd0214a3e763ffcd2209:src/app/components/Inicio/components/Navbar.tsx
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
                    href="#Inicio"
                    className=" text-lg font-medium  text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                >
                INICIO
                </a>
                </li>
                <li className="py-4">
                    <a
                        href=""
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    NOSOTROS
                    </a>
                </li>
                <li className="py-4">
                    <a
<<<<<<< HEAD:src/app/components/Navbar.tsx
                        onClick={() => router.push('/components/Mimoto')}
=======
                        href="/src/app/components/Mimoto"
>>>>>>> f770145c0de3e749db77cd0214a3e763ffcd2209:src/app/components/Inicio/components/Navbar.tsx
                        className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                    >
                    MI MOTO
                    </a>
                </li>
                <li className="py-4">
                    <a
<<<<<<< HEAD:src/app/components/Navbar.tsx
=======
                        href="/src/app/components/"
>>>>>>> f770145c0de3e749db77cd0214a3e763ffcd2209:src/app/components/Inicio/components/Navbar.tsx
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
        
        </div>
    </div>
    </div>
);
};

export default Navbar;