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
        </div>
      </main>
      <Footer />
    </div>
  )
}

