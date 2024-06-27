"use client"

import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "@/app/components/Inicio/components/Navbar";
import Contacto from "@/app/components/Contacto/component/contacto"

const App = () => {

    return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
        <Navbar />
        <Contacto/>
        
    </div>
);
};

export default App;