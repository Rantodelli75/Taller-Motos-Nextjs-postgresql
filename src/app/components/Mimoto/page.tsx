
// Component import
import Navbar from "@/app/components/Inicio/components/Navbar";
import Mimoto from "./component/mimoto";
/*import Mimoto from "@/app/components/Mimoto/component/mimoto"*/

const App = () => {
    return (
    <div className="scroll-smooth bg-white text-black overflow-x-hidden">
        <Navbar/>
        <Mimoto/>
    </div>
);
};

export default App;