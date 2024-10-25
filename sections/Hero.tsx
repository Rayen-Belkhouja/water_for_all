import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const Hero = () => {
  return (
    <section className='h-[100vh] px-16 pt-20 flex items-center justify-center'>
      <Image src="/hero.png" alt='hero-picture' fill className='-z-10' />
      <div className='text-white -mt-16 text-center flex flex-col gap-4 jutify-center items-center'>
        <h1 className='lg:text-7xl md:text-6xl text-5xl font-black max-w-[1200px]'>
          WATER CHANGES EVERYTHING
        </h1>
        <p className='text-lg text-gray-200 tracking-widest'>
          Water supply and sanitation in Tunisia
        </p>
        <div className='flex gap-4'>
          <Button name="Donate" variant="bg-blue-600 text-white py-2 w-[110px] rounded" />
          <Button name="Learn More" variant="bg-white text-blue-600 py-2 w-[110px] rounded" />
        </div>
      </div>
    </section>
  )
}

export default Hero