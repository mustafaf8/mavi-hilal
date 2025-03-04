import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">Logo</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Anasayfa
          </Link>
          <Link to="/portfolio" className="hover:text-blue-500">
            Portföy
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            Hakkımızda
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
