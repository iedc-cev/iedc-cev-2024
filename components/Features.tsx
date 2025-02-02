import Image from "next/image"
import { motion } from "framer-motion"

export default function Features() {
  const events = [
    {
      image: "/images/9.webp",
      title: "Build Your own Enterprise",
      description: "Unlock your entrepreneurial spirit with Noureen Aisha's insights on building your own enterprise. Join us to transform your ideas into action and shape your future",
    },
    {
      image: "/images/conclave.webp",
      title: "Conclave",
      description: "Reflecting on an incredible Conclave 2024 hosted by IEDC CEV! Grateful for the inspiring discussions, innovative ideas, and the amazing people who made it unforgettable.",
    },
    {
      image: "/images/Find.jpg",
      title: "Find Nima",
      description: "Embark on a thrilling adventure with IEDC CEV treasure hunt, 'Finding Nima'! Unravel clues, solve puzzles, and navigate through the campus to discover the hidden treasures.",
    },
    {
      image: "/images/her.jpg",
      title: "Her Era",
      description: "An empowering workshop designed to equip girls with essential self defence techniques and strategies to stay safe and confident",
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

