import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Welcome to Blue Crescent
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600">
            We create innovative digital solutions that transform businesses
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent hover:bg-gray-200 text-blue-600 font-semibold hover:text-blue-700 py-3 px-8 border border-blue-600 hover:border-transparent rounded-full transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 rounded-xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Custom websites and web applications built with the latest technologies.",
                icon: "💻",
              },
              {
                title: "Mobile Applications",
                description:
                  "Native and cross-platform mobile apps for iOS and Android.",
                icon: "📱",
              },
              {
                title: "UI/UX Design",
                description:
                  "Beautiful, intuitive interfaces that enhance user experience.",
                icon: "🎨",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-featured online store with payment processing and inventory management.",
                image:
                  "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
              },
              {
                title: "Healthcare App",
                description:
                  "Mobile application for patient management and telemedicine services.",
                image:
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <button className="text-blue-300 hover:text-white flex items-center">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl mt-16 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's work together to bring your ideas to life
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
