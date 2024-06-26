

// Component import
import Navbar from "./components/Inicio/components/Navbar";
import Hero from "./components/Inicio/components/Hero";
import { createClient } from "@/utils/supabase/server";

const App = async () => {
  const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      console.log(error)
      console.log(data?.user)
    }
  return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;