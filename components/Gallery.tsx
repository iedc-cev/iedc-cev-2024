"use client";

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const images = [
  { src: "/gallery1.jpg", alt: "Startup Pitch Competition" },
  { src: "/gallery2.jpg", alt: "Tech Workshop" },
  { src: "/gallery3.jpg", alt: "Entrepreneurship Summit" },
  { src: "/gallery4.jpg", alt: "Innovation Expo" },
  { src: "/gallery5.jpg", alt: "Hackathon" },
  { src: "/gallery6.jpg", alt: "Networking Event" },
  // Add more images as needed
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

