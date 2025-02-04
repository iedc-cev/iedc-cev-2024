import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Abhijay",
    role: "Chief Executive Officer",
    image: "/images/abijay.png",
    social: {
      Instagram: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    image: "/team2.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Mike Johnson",
    role: "Technical Lead",
    image: "/team3.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Sarah Williams",
    role: "Marketing Head",
    image: "/team4.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Alex Chen",
    role: "Event Coordinator",
    image: "/team5.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Emily Brown",
    role: "Finance Manager",
    image: "/team6.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
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

