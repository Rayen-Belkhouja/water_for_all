import { DropletIcon, GlobeIcon, Layers, Scale, HandHeart, Handshake } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">About Water4All</h2>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
          <div className='flex-1'>
            <p className="text-lg mb-6">
            <span className='text-blue-500 font-bold'>WATER4ALL</span> is an NGO founded in <span className='text-red-700 font-bold'>Tunisia</span> in 2024 and is dedicated not only to delivering sustainable clean water solutions to all Tunisian communities
            but also preserving water ressources in the future.
            </p>
          </div>


          <div className="grid grid-cols-3 gap-4 text-center items-center flex-1">
            <div className='py-6 px-2 flex flex-col border-2 rounded-xl border-blue-500'>
              <Handshake size={32} className="mx-auto text-blue-500 mb-2" />
              <p className="font-semibold">Collaboration</p>
            </div>
            <div className='py-6 flex flex-col border-2 rounded-xl border-blue-500'>
              <GlobeIcon size={32} className="mx-auto text-blue-500 mb-2" />
              <p className="font-semibold">Sustainability</p>
            </div>
            <div className='py-6 flex flex-col border-2 rounded-xl border-blue-500'>
              <Scale size={32} className="mx-auto text-blue-500 mb-2" />
              <p className="font-semibold">Equity</p>
            </div>
            <div className='py-6 flex flex-col border-2 rounded-xl border-blue-500'>
              <HandHeart size={32} className="mx-auto text-blue-500 mb-2" />
              <p className="font-semibold">Compassion</p>
            </div>
            <div className='py-6 flex flex-col border-2 rounded-xl border-blue-500'>
              <DropletIcon size={32} className="mx-auto text-blue-500 mb-2" />
              <p className="font-semibold">Hope</p>
            </div>
            <div className='py-6 flex flex-col border-2 rounded-xl border-blue-500'>
              <Layers size={32} className="mx-auto text-blue-500 mb-2" />
              <p className="font-semibold">Dedication</p>
            </div>
          </div>
        </div>

       


      </div>
      <div className='w-full mt-20'>
          <img className='w-full h-[400px] object-cover object-top' src="/about.png" alt="wed"/>
        </div>
    </section>
  )
}
export default About