import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">About IEDC</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            The Innovation and Entrepreneurship Development Cell (IEDC) is a platform for students to explore and
            develop their entrepreneurial skills. Our mission is to foster innovation, creativity, and entrepreneurship
            among students.
          </p>
          <p className="text-lg mb-6">
            At IEDC, we believe in the power of ideas and the potential of young minds to transform these ideas into
            successful ventures. We provide a supportive ecosystem that includes mentorship, resources, and networking
            opportunities to help students turn their innovative ideas into reality.
          </p>
          <p className="text-lg mb-6">
            Our activities include workshops, seminars, hackathons, and startup competitions that expose students to
            real-world challenges and opportunities in the entrepreneurial landscape. We also collaborate with industry
            experts and successful entrepreneurs to provide valuable insights and guidance to our members.
          </p>
          <p className="text-lg">
            Join us in our journey to create the next generation of innovators and entrepreneurs who will shape the
            future of technology and business.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-6 text-blue-600">Our Previous Works</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li className="text-lg">
              <strong>Tech Innovators 2022:</strong> A 48-hour hackathon that resulted in the development of 10
              innovative prototypes, with the winning team's project now in incubation.
            </li>
            <li className="text-lg">
              <strong>Startup Launchpad:</strong> A 6-month mentorship program that helped 5 student startups secure
              seed funding and launch their products.
            </li>
            <li className="text-lg">
              <strong>AI for Social Good:</strong> A collaborative project with local NGOs, where our students developed
              AI solutions to address community challenges.
            </li>
            <li className="text-lg">
              <strong>Green Campus Initiative:</strong> An eco-friendly project that implemented IoT-based solutions to
              reduce energy consumption on campus by 15%.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

