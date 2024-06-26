"use client"

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "@/app/components/Inicio/components/Navbar";
import Error from "./components/error";
/*import Mimoto from "@/app/components/Mimoto/component/mimoto"*/

const App = () => {
  // dark mode start
const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);
const element = document.documentElement;

    useEffect(() => {
    if (theme === "light") {
        element.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}, [element.classList, theme]);
  // dark mode end

    React.useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
    });
    AOS.refresh();
}, []);
    return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
        <Error/>
        
    </div>
);
};

export default App;