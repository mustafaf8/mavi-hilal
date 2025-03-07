import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Mustafa Nahsan",
      role: "Bilgisayar Mühendisi",
      bio: "Mustafa Nahsan, çeşitli yazılım dillerinde geliştirilen projeler aracılığıyla modern mobil ve web teknolojilerinde deneyim kazanmış bir Bilgisayar Mühendisidir. Takım çalışmasına yatkınlığı ve yeni teknolojilere hızlı adaptasyonu sayesinde projelere yüksek performans ve kullanıcı dostu çözümler kazandırmaktadır.",
      image: "public/assets/mustafa.jpg",
      social: {
        twitter:
          "https://www.instagram.com/mustafa_3dr/profilecard/?igsh=eDVpNGc1YTI4Nmc3",
        linkedin: "https://www.linkedin.com/in/mustafa-nahsan-a811b2307/",
        github: "https://github.com/mustafaf8",
      },
    },
    {
      name: "Eren Karagöz",
      role: "Mekatronik Mühendisi",
      bio: "Eren Karagöz, mekanik, elektronik ve yazılım sistemlerinin entegrasyonu konusundaki uzmanlığıyla projelere inovatif çözümler sunan bir Mekatronik Mühendisidir. Otomasyon ve kontrol sistemlerindeki deneyimi, verimliliği artıran akıllı tasarımların oluşturulmasını sağlamaktadır.",
      image: "public/assets/profiles/EK.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "İsmal Sarıteke",
      role: "Bilgisayar Mühendisi",
      bio: "İsmal Sarıteke, yazılım geliştirme ve sistem tasarımı konularında uzmanlaşmış bir Bilgisayar Mühendisidir. Hem ön yüz hem de arka uç teknolojilerinde edindiği deneyimle, güvenilir ve ölçeklenebilir çözümler üretilmesine katkıda bulunmaktadır.",
      image: "public/assets/profiles/IS.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Abdülkadir Günümdoğdu",
      role: "Makine Mühendisi",
      bio: "Abdülkadir Günümdoğdu, makine tasarımı, prototip geliştirme ve üretim optimizasyonu alanlarında uzmanlaşmış bir Makine Mühendisidir. Teknik bilgi ve analitik yaklaşımıyla, projelerin verimliliğini artıran çözümler sunmaktadır.",
      image: "public/assets/profiles/AG.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emirhan Çakmakçı",
      role: "Biyokimya",
      bio: "Emirhan Çakmakçı, ileri biyokimyasal analizler ve araştırma tekniklerinde uzmanlaşmış bir biyokimyacı olarak, bilimsel yöntemlerin ve analitik yaklaşımların projelere entegre edilmesine katkıda bulunmaktadır.",
      image: "public/assets/profiles/EC.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Hamza Almudllel",
      role: "Mekatronik Mühendisi",
      bio: "Hamza Almudllel, mekanik ve elektronik sistemlerin entegrasyonu konusunda yetkin bir Mekatronik Mühendisidir. Otomasyon, robotik ve kontrol teknolojilerindeki bilgisiyle modern sistemlerin geliştirilmesine katkıda bulunmaktadır.",
      image: "public/assets/profiles/HH.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Yavuz Selim Taşpınar",
      role: "Takım Danışmanı",
      bio: "Yavuz Selim Taşpınar, proje stratejileri ve ekip koordinasyonu konularında deneyimli bir danışman olarak, süreçlerin verimli yürütülmesine ve projelerin hedeflerine ulaşmasına destek vermektedir.",
      image: "public/assets/profiles/YST.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Yusuf Furkan Umutlu",
      role: "Bilgisayar Mühendisi",
      bio: "Yusuf Furkan Umutlu, modern yazılım geliştirme ve sistem entegrasyonu konularında uzmanlaşmış bir Bilgisayar Mühendisidir. Teknolojik yeniliklere olan açıklığı ve güncel programlama dillerindeki yetkinliği, dijital çözümlerin etkin bir şekilde üretilmesine katkı sağlamaktadır.",
      image: "public/assets/profiles/YFU.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  return (
    <div className="text-gray-800">
      {/* About Us Hero */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Mavi Hilal Hakkında
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl mb-6 text-gray-600">
                2025 yılında kurulan Mavi Hilal, olağanüstü dijital deneyimler
                yaratmaya adanmış tutkulu tasarımcılar, geliştiriciler ve
                stratejistlerden oluşan bir ekiptir.
              </p>
              <p className="text-gray-600 mb-6">
                Teknolojinin işletmeleri dönüştürme ve hayatları iyileştirme
                gücüne inanılarak, müşterilere yenilikçi ve etkili çözümler
                sunulmaktadır.
              </p>
              <p className="text-gray-600">
                İster ilk ürününüzü piyasaya sürmek isteyen bir girişim olun,
                ister dijital dönüşüm arayan köklü bir şirket, Mavi Hilal
                projelerinizi gerçeğe dönüştürmeye hazırdır.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Blue Crescent Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100 rounded-xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Yenilik",
                description:
                  "Karmaşık sorunları çözmek için yeni teknolojileri ve yaratıcı yaklaşımları benimsiyoruz.",
                icon: "💡",
              },
              {
                title: "Kalite",
                description:
                  "Kodlamadan tasarıma, müşteri hizmetlerine kadar işimizin her aşamasında mükemmelliğe bağlıyız.",
                icon: "✨",
              },
              {
                title: "İşbirliği",
                description:
                  "Müşterilerimizle yakın çalışarak, hedeflere birlikte ulaşmayı amaçlıyoruz.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Ekibimiz ile Tanışın
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                // Kartı flex-col yaparak, metin üstte - ikonlar altta
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Üstte resim */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                {/* Altta içerik */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.twitter}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-100 rounded-xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Sürecimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "keşif",
                description:
                  "Derinlemesine görüşmeler yoluyla işinizi, hedeflerinizi ve ihtiyaçlarınızı anlayarak başlıyoruz.",
              },
              {
                step: "02",
                title: "Planlama",
                description:
                  "Projenin kapsamını, zaman çizelgesini ve teslimatlarını ana hatlarıyla belirten ayrıntılı bir yol haritası oluşturuyoruz.",
              },
              {
                step: "03",
                title: "Geliştirme",
                description:
                  "Ekibimiz, düzenli güncellemeler ve geri bildirimlerle çevik metodolojileri kullanarak çözümünüzü oluşturur.",
              },
              {
                step: "04",
                title: "Kurulum & Destek",
                description:
                  "Sorunsuz bir dağıtım sağladıktan sonra sürekli bakım ve destek ile projenizi izliyoruz.",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
