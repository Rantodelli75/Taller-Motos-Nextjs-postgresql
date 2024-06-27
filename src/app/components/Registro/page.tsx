import React from "react";

// Component import
import Navbar from "@/app/components/Inicio/components/Navbar";
import Registro from "@/app/components/Registro/component/registro"
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
const  App = async () => {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      console.log(error)
      console.log(data?.user)
    }


  
    return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
        {data?.user?.email || null}
        <Navbar />
        <Registro/>
    </div>
);
};

export default App;