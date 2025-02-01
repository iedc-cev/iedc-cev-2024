import Image from "next/image"
import { motion } from "framer-motion"

export default function Features() {
  const events = [
    {
      image: "/images/9.webp",
      title: "Build Your own Enterprise",
      description: "Intensive 3-day program for aspiring entrepreneurs",
    },
    {
      image: "/images/1.jpg",
      title: "Shart Hunt",
      description: "Showcasing cutting-edge technologies and innovations",
    },
    {
      image: "/images/2.jpg",
      title: "Town",
      description: "Empowering women leaders in the startup ecosystem",
    },
    {
      image: "/images/3.jpg",
      title: "Her Era",
      description: "Hands-on sessions on artificial intelligence and machine learning",
    },
  ]

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

