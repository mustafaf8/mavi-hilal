import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in software development and business leadership, Alex founded Blue Crescent with a vision to create innovative digital solutions that transform businesses.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sophia Chen",
      role: "Lead Designer",
      bio: "Sophia brings creativity and user-centered design principles to every project. Her background in psychology helps her create intuitive and engaging user experiences.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Technical Director",
      bio: "Marcus oversees all technical aspects of our projects, ensuring they are built with scalable, maintainable code using the latest technologies and best practices.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Olivia Rodriguez",
      role: "Project Manager",
      bio: "Olivia ensures our projects are delivered on time and within budget while maintaining clear communication with clients throughout the development process.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
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
            About Blue Crescent
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl mb-6 text-gray-600">
                Founded in 2018, Blue Crescent is a team of passionate
                designers, developers, and strategists dedicated to creating
                exceptional digital experiences.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in the power of technology to transform businesses
                and improve lives. Our approach combines technical expertise
                with creative thinking to deliver solutions that not only meet
                but exceed our clients' expectations.
              </p>
              <p className="text-gray-600">
                Whether you're a startup looking to launch your first product or
                an established company seeking digital transformation, we have
                the skills and experience to help you succeed.
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
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and creative approaches to solve complex problems.",
                icon: "💡",
              },
              {
                title: "Quality",
                description:
                  "We are committed to excellence in every aspect of our work, from code to design to client service.",
                icon: "✨",
              },
              {
                title: "Collaboration",
                description:
                  "We work closely with our clients, treating their goals as our own and involving them throughout the process.",
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
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.twitter}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Twitter className="h-5 w-5" />
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
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and requirements through in-depth discussions.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We create a detailed roadmap outlining the project scope, timeline, and deliverables.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our team builds your solution using agile methodologies with regular updates and feedback.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We ensure a smooth deployment and provide ongoing maintenance and support.",
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
