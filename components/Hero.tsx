"use client";

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Innovate. Create. Elevate."

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&controls=0&loop=1&playlist=VIDEO_ID&showinfo=0&rel=0&modestbranding=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none"
          style={{ opacity: 0.3 }}
        ></iframe>
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Welcome to the Innovation and Entrepreneurship Development Cell, College of Engineering Vadakara
        </motion.p>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <Button className="bg-blue-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            <a href="https://dhyuksha.vercel.app/">Join Now</a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

