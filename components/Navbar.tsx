import Link from "next/link"
import Image from "next/image"


export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
        <Link href="/"><Image src="/images/logo.png" alt="IEDC Logo" width={110} height={37} className="mr-2" /></Link>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
              About
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li>
            <Link href="/event" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
              Events
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li>
            <Link href="/team" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
              Team
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

