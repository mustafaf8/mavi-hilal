import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="text-gray-800">
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
            Aklınızda bir proje mi var veya projelerimiz hakkında daha fazla
            bilgi edinmek mi istiyorsunuz? Sizden haber almak isteriz.
            Ekibimizle iletişime geçin.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  İletişime Geç
                </h2>

                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <Mail className="h-6 w-6 text-blue-600 mb-2" />
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600">mavihilal@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <Phone className="h-6 w-6 text-blue-600 mb-2" />
                    <div>
                      <h3 className="font-medium text-gray-800">Telefon</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                    <div>
                      <h3 className="font-medium text-gray-800">Ofis</h3>
                      <p className="text-gray-600">Konya / Selçuklu</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium text-gray-800 mb-4">
                    Çalışma saatleri
                  </h3>
                  <p className="text-gray-600">
                    Cuma - Pazar: 10:00 - 18:00
                    <br />
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Mesaj Gönder
                </h2>

                {submitSuccess && (
                  <div className="bg-green-100 border border-green-500 text-green-700 rounded-lg p-4 mb-6">
                    <p className="font-medium">
                      Mesajınız için teşekkür ederiz!
                    </p>
                    <p>En kısa sürede size geri dönüş yapacağız.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2"
                      >
                        Adınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Mustafa Nahsan"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="mustafa@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 mb-2"
                    >
                      Konu
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" disabled>
                        Konu Seç
                      </option>
                      <option value="Genel Sorgulama">Genel Sorgulama</option>
                      <option value="Proje Talebi">Proje Talebi</option>
                      <option value="ortaklık">Ortaklık</option>
                      <option value="Kariyer">Kariyer</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={1}
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Projenizi veya sorunuzu bize anlatın..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        Gönder <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 rounded-xl mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Sıkça Sorulan Sorular
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Ne tür projeler üzerinde çalışıyorsunuz?",
                answer:
                  "Her büyüklükteki işletme için web geliştirme, mobil uygulamalar, e-ticaret çözümleri ve özel yazılım geliştirme konularında uzmanız.",
              },
              {
                question: "Tipik bir proje ne kadar sürer?",
                answer:
                  "Proje zaman çizelgeleri karmaşıklığa ve kapsama bağlı olarak değişir. Basit bir web sitesi 4-6 hafta sürebilirken, karmaşık bir uygulama 3-6 ay sürebilir. İlk görüşmemizde ayrıntılı bir zaman çizelgesi sunacağız.",
              },
              {
                question: "Lansman sonrası bakım ve destek sunuyor musunuz?",
                answer:
                  "Evet, uygulamanızın lansman sonrasında sorunsuz çalışmaya devam etmesini sağlamak için çeşitli bakım ve destek paketleri sunuyoruz. Bu seçenekleri özel ihtiyaçlarınıza göre tartışabiliriz.",
              },
              {
                question: "Proje fiyatlandırmasını nasıl ele alıyorsunuz?",
                answer:
                  "Proje gereksinimlerine bağlı olarak hem sabit fiyatlı hem de zaman ve malzeme fiyatlandırma modelleri sunuyoruz. Görüşmemiz sırasında projeniz için en iyi yaklaşımı tartışacağız.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
