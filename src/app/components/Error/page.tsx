"use client"

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "@/app/components/Inicio/components/Navbar";
import Error from "./components/error";
/*import Mimoto from "@/app/components/Mimoto/component/mimoto"*/

const App = () => {
    return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
        <Error/>
        
    </div>
);
};

export default App;