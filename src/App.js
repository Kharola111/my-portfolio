import { Route, Routes } from "react-router";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import Projectpage from "./pages/Projectpage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <div className="bg-[#282C33]">
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
