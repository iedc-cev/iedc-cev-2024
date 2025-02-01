import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
  {
    title: "Hackathon 2023",
    date: "September 10-11, 2023",
    description: "48-hour coding marathon to solve real-world problems and showcase your technical skills.",
  },
  {
    title: "Innovation Expo",
    date: "October 5, 2023",
    description: "Showcase your projects and prototypes to potential investors and industry leaders.",
  },
  {
    title: "Mentor Connect",
    date: "November 15, 2023",
    description: "One-on-one mentoring sessions with experienced entrepreneurs and industry experts.",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-blue-600">{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

