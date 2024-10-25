import Link from 'next/link'
import Image from 'next/image'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-200 py-12 px-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-[#5ab0cd] mb-4">
              <Image src="/Water4ALL.png" width={40} height={40} alt='Water4All logo' />
              Water4All
            </Link>
            <p className="text-blue-700 mb-4">
              Dedicated to ensuring clean water and sanitation for all, aligning with UN Sustainable Development Goal 6.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-blue-700 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-600">
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#vision" className="hover:underline">Vision & Mission</Link></li>
              <li><Link href="#problem" className="hover:underline">Problem</Link></li>
              <li><Link href="#action" className="hover:underline">Action Plan</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-blue-700 mb-4">Contact Us</h3>
            <address className="not-italic text-blue-600">
              <p>Email: Water4All@gmail.com</p>
              <p>Phone: +216 24 719 855</p>
            </address>
          </div>
        </div>
        <div className="border-t border-blue-300 mt-8 pt-8 text-center text-blue-700">
          <p>&copy; {new Date().getFullYear()} Water4All. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}