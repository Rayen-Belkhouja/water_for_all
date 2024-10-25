'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <nav className={`fixed w-full transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} bg-white h-14 px-4 md:px-16 flex items-center justify-between z-50`}>
      <div className='flex items-center gap-2 font-bold text-xl md:text-2xl text-[#5ab0cd]'>
        <Image src="/Water4ALL.png" width={40} height={40} alt='Water4All logo' />
        Water4All
      </div>
      <ul className="hidden md:flex space-x-6 text-blue-700">
        <li><Link href="#about" className="hover:underline">About</Link></li>
        <li><Link href="#visionandmission" className="hover:underline">Vision & Mission</Link></li>
        <li><Link href="#problem" className="hover:underline">Problem</Link></li>
        <li><Link href="#action" className="hover:underline">Action Plan</Link></li>
        <li><Link href="#contact" className="hover:underline">Contact</Link></li>
      </ul>
      <button className="md:hidden" aria-label="Toggle menu">
        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}