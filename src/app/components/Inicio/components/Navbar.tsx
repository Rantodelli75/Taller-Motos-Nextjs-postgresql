"use client"
import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon, BiUserCircle } from "react-icons/bi";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { FaSignOutAlt } from "react-icons/fa";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { logout } from "@/app/api/auth/logout/route";
import db from "@/libs/db"
import axios from "axios";
import Link from "next/link"
let showMenu = false
let data = null
const Navbar = () => {
    const [user, setUser] = useState({})
    const supabase = createClient()
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const { data, error } = await supabase.auth.getUser();
            if (error || !data?.user) {
              console.log(error)
              console.log(data?.user)
            }
            if (error) {
              console.error('Error fetching user:', error);
            } else {
              setUser(data.user);
            }
          } catch (error) {
            console.error('Error fetching user:', error); // Handle potential errors
          }
        };
    
        fetchUser();
      }, [supabase.auth]);
    
    

    const toggleMenu = () => {
        showMenu = !showMenu;
      };


    function signOut() {
        throw new Error("Function not implemented.");
    }

  //const isAuthenticated = Boolean(currentUser);
  
        const isLoggedIn = Boolean(user != null);

        return (
            <div
              className="z-10 shadow-lg w-full dark:text-white duration-300 bg-white"
            >
              <div className="container py-2 md:py-0">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl ml-5 font-bold text-gray-700 font-serif">
                      FORZA
                      <span className="text-xl font-bold text-orange-500 font-serif">
                        MOTOR
                      </span>
                      CLUB
                    </span>
                  </div>
                  <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                      <li className="py-4">
                        <Link href="/">
                          <button
                            className="text-lg font-medium  text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                          >
                            INICIO
                          </button>
                        </Link>
                      </li>
                      <li className="py-4">
                        <Link href="/components/Servicios">
                          <button
                            className="text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                          >
                            SERVICIOS
                          </button>
                        </Link>
                      </li>
                      <li className="py-4">
                        <Link href="/components/Mimoto">
                          <button
                            className="text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                          >
                            REGISTRAR MOTO
                          </button>
                        </Link>
                      </li>
                      <li className="py-4">
                        <Link href="/components/Contacto">
                          <button
                            className="text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                          >
                            CONTACTO
                          </button>
                        </Link>
                      </li>
                      <li className="py-4">
                        <Link href="/components/Users">
                          <button
                            className="text-lg font-medium text-gray-600 hover:text-primary py-2 hover:border-b-2 hover:border-orange-600 transition-colors duration-500  "
                          >
                            GESTIONAR
                          </button>
                        </Link>
                      </li>
                    
                      <li className="py-4">
                        { Object.keys(user).length === 0 ? (
                          <Link href="/auth/login">
                            <button>Iniciar Sesion</button>
                          </Link>
                        ) : (
                          <Popover placement="bottom" offset={20} showArrow>
                            <PopoverTrigger>
                              <button className="text-orange-600 hover:text-amber-700">
                                <BiUserCircle size={25} />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent>
                              <div className="px-1 py-2 text-slate-950 bg-gray-200 rounded-xl w-full h-36">
                                <div className="text-small font-bold p-2 text-gray-500">
                                  Bienvenido
                                </div>
                                <div className="text-tiny p-2 text-gray-400 font-semibold">
                                    {user.email}
                                </div>
                                <div className="flex text-orange-600 hover:text-amber-700 p-2">
                                  
                                    <button className="flex text-orange-600 hover:text-amber-700">
                                      <FaSignOutAlt size={25} />
                                    </button>
                                  <button onClick={()=> logout()} className="ml-3">
                                    Salir
                                  </button>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          );
        };

export default Navbar;
