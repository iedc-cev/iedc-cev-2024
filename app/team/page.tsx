import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Abhin C",
    role: "Student Lead",
    image: "/images/teamimg/abhin.jpg",
    social: {
      Instagram: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Ashwini",
    role: "Student Lead",
    image: "/images/teamimg/aswini.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Anandhu Ashok",
    role: "Tech Lead",
    image: "/images/teamimg/anandhu.jpeg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Thaj",
    role: "Tech Lead",
    image: "/images/teamimg/a.jpeg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Jomin Binny",
    role: "Community Lead",
    image: "/images/teamimg/jomin.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      twitter: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Dhanush S Gireesh",
    role: "IPR and Research",
    image: "/images/teamimg/DHANUSH.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Lekshmikrishna M",
    role: "IPR and Research Lead",
    image: "/images/teamimg/lekshmi.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Anaswara A",
    role: "Branding and Marketing",
    image: "/images/teamimg/anaswara.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Thejus Santhosh",
    role: "Finance Lead",
    image: "/images/teamimg/thejus.jpeg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Sooraj B S",
    role: "Quality an operation Lead",
    image: "/images/teamimg/sooraj.jpg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Zeenath K P",
    role: "Women innovation Lead",
    image: "/images/teamimg/zeenth.jpeg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Adith J P",
    role: "Media Lead",
    image: "/images/teamimg/adith.jpeg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Maisa Ismail",
    role: "Innovation and Creative Lead",
    image: "/images/teamimg/maisa.jpeg",
    social: {
      facebook: "https://www.instagram.com/iedc_cev/",
      linkedin: "https://www.instagram.com/iedc_cev/",
    },
  },
  {
    name: "Muhammad Hijas M",
    role: "Quality and Operation Lead",
    image: "/images/teamimg/hijas.jpg",
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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">Execom 2025-26</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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

