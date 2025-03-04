import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-gray-800 mb-20">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Merhaba
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600">
            Mavi Hilal Takımı olarak, güncel içeriklerimizden haberdar olmak
            için bizleri sosyal medya hesaplarınızdan takip edebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/portfolio">
              <button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Üzerinde Çalıştığımız Projeler
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <button className="bg-transparent hover:bg-gray-200 text-blue-600 font-semibold hover:text-blue-700 py-3 px-8 border border-blue-600 hover:border-transparent rounded-full transition-all duration-300">
              İletişime Geç
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
