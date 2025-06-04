"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-600 gap-4 py-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-col justify-center items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-center">IEDC</h3>
          <p className="text-sm">Innovation and Entrepreneurship Development Cell</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/iedc.cev.17" className="hover:text-blue-200 transition-colors social-icon transform hover:scale-110">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/iedc_cev/" className="hover:text-blue-200 transition-colors social-icon transform hover:scale-110">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/company/iedc-cev/" className="hover:text-blue-200 transition-colors social-icon transform hover:scale-110">
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-sm">© 2025 IEDC. All rights reserved.</div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .social-icon:hover {
          animation: pulse 1s infinite;
        }
      `}</style>
    </footer>
  )
}

