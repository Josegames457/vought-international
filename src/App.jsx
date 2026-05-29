import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Series from "./pages/Series";
import Heroes from "./pages/Heroes";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";

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
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}