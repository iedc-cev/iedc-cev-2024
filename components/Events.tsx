import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Events() {
  const events = [
    {
      title: "Startup Pitch Competition",
      date: "June 15, 2023",
      description: "Present your innovative ideas to a panel of judges and win exciting prizes.",
    },
    {
      title: "Tech Workshop Series",
      date: "July 1-3, 2023",
      description: "Learn cutting-edge technologies from industry experts in this 3-day workshop series.",
    },
    {
      title: "Entrepreneurship Summit",
      date: "August 20, 2023",
      description: "Network with successful entrepreneurs and gain insights into building a successful startup.",
    },
  ]

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card key={index} className="bg-gray-700">
                <CardHeader>
                  <CardTitle className="text-purple-500">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

