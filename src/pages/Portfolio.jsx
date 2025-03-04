import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "chatbot",
      category: "web",
      description:
        "Hastaneler için asistanlık yapmak, hastaları yönendirmek ve tanılara yardımcı olmak için tasarlanmış Chatbot ŞİFA-AI",
      image:
        "https://bipartisan-policy-center.imgix.net/wp-content/uploads/2024/11/shutterstock_2474984611_AI_health_care_digital-scaled.jpg?auto=compress%2Cformat&q=90&ixlib=imgixjs-3.4.2",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Otonom erken yangın ihbar uçağı",
      category: "iot",
      description:
        "Orman yangınlarını en erken aşamada tespit ederek hızlı müdahale sağlamak amacıyla geliştirdiğimiz otonom erken yangın ihbar uçağı, yapay zeka destekli görüntü işleme sistemi teknolojileri ile donatılmıştır. Otonom uçuş yeteneği sayesinde ",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React Native", "Firebase", "WebRTC"],
    },
    // geniş alanları tarayarak yangın belirtilerini anlık olarak analiz eder ve tespit edilen konumu yetkililere ileterek hızlı aksiyon alınmasını sağlar. Çevreyi koruma ve doğal yaşamı güvence altına alma hedefiyle tasarlanan İHA, yangınların erken tespiti ve hızlı müdahale konusunda yetkililerin en büyük yardımcısı olacaktır
    {
      id: 3,
      title: "NİŞANKIRAN",
      category: "web",
      description:
        "Interactive dashboard for financial analytics with real-time data visualization and reporting.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    },
    {
      id: 4,
      title: "PUSULA",
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
      title: "Sağlıkta yapay",
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
            Projelerimiz
          </h1>
          <p className="text-xl mb-12 text-gray-600 max-w-3xl">
            Mekatronik, havacılık, gömülü sistemler, yapay zeka, yazılım ve
            teknoloji alanlarında yenilikçi çözümler üretmeye devam ediyoruz.
            Geleceğin mühendislik vizyonunu şekillendirirken, verimli ve yüksek
            performanslı ve en önemlisi iddialı projeler geliştiriyoruz.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {[
              { id: "all", label: "Tümü" },
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
                    Detay
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
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
