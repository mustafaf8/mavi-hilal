import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

/**
 * App bileşeni. Tüm sayfa rotalarını burada belirliyoruz.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {/* Sayfa rotalarımız */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ShowFooterConditionally />
      </div>
    </BrowserRouter>
  );
}

/**
 * Yol (pathname) kontrolü yaparak Footer'ı göstermeyi veya saklamayı sağlayan bileşen.
 */
function ShowFooterConditionally() {
  const location = useLocation(); // Mevcut rotanın yolunu (pathname) alır

  // Home rotası "/" ise Footer görünmesin, aksi takdirde görünsün
  if (location.pathname === "/") {
    return null;
  }

  return <Footer />;
}

export default App;
