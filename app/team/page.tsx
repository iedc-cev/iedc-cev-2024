import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Abhijay",
    role: "Chief Executive Officer",
    image: "/images/teamimg/Abhijay.jpg",
    social: {
      Instagram: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Zeenath",
    role: "Chief Operating Officer",
    image: "/images/teamimg/Zeenath.JPG",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Sharoon",
    role: "Chief Executive Officer",
    image: "/images/teamimg/sharron.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Hashima",
    role: "Chief Marketing Officer",
    image: "/images/teamimg/Hashima.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      twitter: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Dhanush",
    role: "Chief Technology Officer",
    image: "/images/teamimg/DHANUSH.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Anandhu",
    role: "Chief Technology Officer",
    image: "/images/teamimg/anathu.png",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Nihal Roshan",
    role: "Chief Financial Officer",
    image: "/images/teamimg/Nihal.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Sabarinath",
    role: "Chief Creative Officer",
    image: "/images/teamimg/Sabarinath.png",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Ashwini",
    role: "Women in Engineering",
    image: "/images/teamimg/Ashwini.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Ashiq",
    role: "Program Officer",
    image: "/images/teamimg/ashiq.png",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Rashdhan",
    role: "Program Officer",
    image: "/images/teamimg/RASHDHAN.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Razan",
    role: "Program Officer",
    image: "/images/teamimg/Razan.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Abhin.C",
    role: "Web Master",
    image: "/images/teamimg/Abhinc.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto py-10 px-4 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">Execom 2024-25</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-blue-600">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.Instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

