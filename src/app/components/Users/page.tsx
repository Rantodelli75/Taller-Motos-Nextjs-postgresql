"use client"

import "aos/dist/aos.css";

// Component import
import Navbar from "@/app/components/Inicio/components/Navbar";
import Users from "./components/Usuarios";

const App = () => {
    return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
        <Navbar />
        <Users/>
        
    </div>
);
};

export default App;