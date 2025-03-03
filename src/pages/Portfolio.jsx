import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description:
        "A comprehensive e-commerce solution with advanced filtering, cart management, and secure payment processing.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      description:
        "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React Native", "Firebase", "WebRTC"],
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "web",
      description:
        "Interactive dashboard for financial analytics with real-time data visualization and reporting.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    },
    {
      id: 4,
      title: "Smart Home Control System",
      category: "iot",
      description:
        "IoT solution for home automation with mobile app control and voice integration.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Node.js", "MQTT", "Raspberry Pi"],
    },
    {
      id: 5,
      title: "Educational Platform",
      category: "web",
      description:
        "Online learning platform with course management, video streaming, and interactive assessments.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["React", "Django", "AWS", "WebSockets"],
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics with social features.",
      image:
        "https://images.unsplash.com/photo-1510016177406-c25fe02ae885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="text-gray-800">
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl mb-12 text-gray-600 max-w-3xl">
            Explore our diverse range of projects showcasing our expertise in
            web development, mobile applications, and IoT solutions.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Web Development" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "iot", label: "IoT Solutions" },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 text-xs  px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-100 rounded-xl mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Blue Crescent transformed our business with their innovative e-commerce solution. Sales have increased by 40% since launch.",
                author: "Sarah Johnson",
                position: "CEO, FashionForward",
              },
              {
                quote:
                  "The team's attention to detail and technical expertise made our healthcare app a success. Patients love the intuitive interface.",
                author: "Dr. Michael Chen",
                position: "Director, HealthTech Solutions",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-blue-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
