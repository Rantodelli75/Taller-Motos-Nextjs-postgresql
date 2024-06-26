
import React from "react";
import { BiSolidSun, BiSolidMoon, BiUserCircle } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import { createClient } from "@/utils/supabase/server";
import { DiBackbone } from "react-icons/di";
import db from "@/libs/db"

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
    
    let showMenu = false; // Replace useState with a regular variable
    
    const Navbar = async () => {
      const supabase = createClient()
 const onSubmit = async (data:any) => {
   
      const res = await fetch('/api/usuario', {
        method: 'GET',
        body: JSON.stringify({
          email: data,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    if (res.ok) {
        console.log("ok")
    }
}
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      console.log(error)
      console.log(data?.user)
    }else {
        onSubmit(data.user.email)
    }
    
      const toggleMenu = () => {
        showMenu = !showMenu;
      };
    
    
      function signOut() {
        throw new Error("Function not implemented.");
      }
    
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
                      className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500 "
                    >
                      INICIO
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href="#About"
                      className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500 "
                    >
                      NOSOTROS
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href="#Booking"
                      className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500 "
                    >
                      MI MOTO
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href="/auth/login"
                      className=" text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500 "
                    >
                      CONTACTO
                    </a>
                  </li>
                  {
                    data?.user
                  }
                  <li className="py-4">
                    <a href="/auth/login" className="text-orange-600 hover:text-amber-700">
                      <BiUserCircle size={25}/>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* Mobile view */}
              <div className="flex items-center gap-4 ">
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
