import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Series from "./pages/Series";
import Heroes from "./pages/Heroes";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";
import TheBoys from "./pages/TheBoys";
import GenV from "./pages/GenV";
import Diabolical from "./pages/Diabolical"
import Voughtrising from "./pages/Voughtrising"
import TheBoysMexico from "./pages/TheBoysMexico"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/theboys" element={<TheBoys />} />
          <Route path="/genv" element={<GenV />} />
          <Route path="/voughtrising" element={<Voughtrising/>} />
          <Route path="/diabolical" element={<Diabolical />} />
          <Route path="/theboysmexico" element={<TheBoysMexico />} />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}