"use client"

import "aos/dist/aos.css";

// Component import
import Navbar from "@/app/components/Inicio/components/Navbar";
import Contacto from "@/app/components/Contacto/component/contacto"
import Users from "./components/Usuarios";
/*import Mimoto from "@/app/components/Mimoto/component/mimoto"*/

const App = () => {
  // dark mode start
    return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
        <Navbar />
        <Users/>
        
    </div>
);
};

export default App;