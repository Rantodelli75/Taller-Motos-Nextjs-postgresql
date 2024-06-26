"use client"

// Component import
import Navbar from "./components/Inicio/components/Navbar";
import Hero from "./components/Inicio/components/Hero";

const App = () => {
  
  return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;