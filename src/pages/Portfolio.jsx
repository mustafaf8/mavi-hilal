import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Chatbot ŞİFA-AI",
      category: "web",
      description:
        "Chatbot ŞİFA-AI, hastaneler için özel olarak geliştirilen, hastaları doğru şekilde yönlendirip sağlık personeline yapay zeka destekli yanıtlar sunan modern ve etkili bir dijital asistan uygulamasıdır.",
      image: "/assets/sifaAI.png",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB"],
    },
    {
      id: 2,
      title: "Erken Yangın İhbar SIHA",
      category: "iot",
      description:
        "Erken Yangın İhbar Drone, orman yangınlarını tespit etmek amacıyla geliştirilen, yapay zeka destekli görüntü işleme teknolojisiyle hızlı müdahale sağlayan, özenle tasarlanmış etkili otonom bir sistemdir.",
      image: "/assets/yanginiha.png",
      technologies: ["Python", "OpenCV", "DroneKit", "TensorFlow"],
    },
    {
      id: 3,
      title: "NİŞANKIRAN",
      category: "web",
      description:
        "NİŞANKIRAN, rekabetçi oyunlarda sinyal bozulmalarını önlemek amacıyla geliştirilen, gerçek zamanlı veri analizi ve kontrol mekanizmasıyla müdahale sağlayan, inovatif ve güçlü sinyal bozucu uygulamadır olarak tasarlandı.",
      image: "/assets/nisankiran.jpeg",
      technologies: ["React", "Node.js", "Socket.IO", "C++"],
    },
    {
      id: 4,
      title: "PUSULA",
      category: "iot",
      description:
        "PUSULA, 5G teknolojisiyle entegre çalışan, sinyal tespiti yaparak iletişim ağlarını optimize eden, kesintisiz bağlantı için gerçek zamanlı veri sunan yenilikçi bir uygulamadır olarak tasarlandı başarıyla.",
      image: "/assets/pusula.png",
      technologies: ["React", "Node.js", "MQTT", "5G Module"],
    },
    {
      id: 5,
      title: "Yapay Zeka İnovasyonu",
      category: "web",
      description:
        "Yapay Zeka İnovasyonu, yapay zeka ve makine öğrenimi teknolojilerini kullanarak verileri analiz eden, karar destek sistemleri sunan, geleceği şekillendiren inovatif bir platformdur olarak tasarlandı modern.",
      image: "/assets/yapayzekainavasyonu.jpg",
      technologies: ["React", "Flask", "TensorFlow", "PostgreSQL"],
    },
    {
      id: 6,
      title: "Sağlıkta Yapay Zeka",
      category: "mobile",
      description:
        "Sağlıkta Yapay, mobil platformda sağlık verilerini takip eden, yapay zeka destekli analizlerle kişiye özel öneriler sunan, yaşam kalitesini artırmayı hedefleyen modern bir uygulamadır olarak tasarlandı.",
      image: "/assets/sagliktayapayzeka.png",
      technologies: ["Flutter", "Firebase", "TensorFlow Lite", "HealthKit"],
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
            Mekatronik, havacılık, gömülü sistemler, yapay zeka, yazılım ve teknoloji alanlarında yenilikçi çözümler üretiyoruz. Geleceğin mühendislik vizyonunu şekillendirirken iddialı projeler geliştiriyoruz.
          </p>

          {/* Filtre Butonları */}
          <div className="flex flex-wrap gap-4 mb-12">
            {[
              { id: "all", label: "Tümü" },
              { id: "web", label: "Web Geliştirme" },
              { id: "mobile", label: "Mobil Uygulamalar" },
              { id: "iot", label: "IoT Çözümleri" },
            ].map((kategori) => (
              <button
                key={kategori.id}
                onClick={() => setFilter(kategori.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === kategori.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {kategori.label}
              </button>
            ))}
          </div>

          {/* Proje Kartları */}
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
                        className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
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
