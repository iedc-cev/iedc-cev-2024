"use client";

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800"
    >
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </motion.div>
  )
}

