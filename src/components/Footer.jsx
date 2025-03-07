import { Moon } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bottom-0 ">
      <footer className="bg-white text-gray-800 py-6 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              <img src="src/assets/mavilogo.png" className="max-w-32 max-h-32" alt="Logo" />
              </span>
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Mavi Hilal. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
