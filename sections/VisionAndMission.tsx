import React from 'react'

const VisionAndMission = () => {
  return (
    <section id="visionandmission" className="bg-white relative z-20">
        <img className='absolute -z-10 w-full h-[700px] opacity-20 md:block hidden transform scale-x-[-1] transition-transform' src="/line of blue.png" alt="" />
      <div className="container mx-auto px-16 flex items-center flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 md:mb-0 mb-10">Mission</h2>

        <div className='grid md:grid-cols-2 grid-cols-1 xl:w-[70%] mb-20 justify-center items-center'>
          
          <div className='text-lg'>
          We envision a <span className='text-red-700 font-bold'>Tunisia</span> where every <span className='text-blue-500 font-bold'> drop of water</span> plays a crucial role in sustaining life, nurturing not just the environment but also the communities that depend on it. In this future, water is more than just a resource—it is the lifeblood of thriving ecosystems, agriculture, and daily life, empowering people and fostering development. Every drop is valued, preserved, and used responsibly to ensure its availability for future generations.

          </div>
          <div className='flex justify-center mt-20'>
            <img className='h-[400px] rounded-2xl' src="/vision.png" alt="" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-blue-600">Vision</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 items-center '>
          <div className='bg-blue-400 rounded-2xl p-2 flex flex-col gap-4 items-center justify-center'>
            <div className='text-white text-lg'>Women queue at their village’s last water source</div>
            <div className='overflow-hidden'>
              <img className='rounded-2xl' src="/mission1.png" alt="" />
            </div>
          </div>
          <div className='text-lg'>
            <p className='font-semibold mb-5'>Our <span className='text-red-700'>mission</span> is to address     water challenges by :</p>
            
            <ul className="list-disc pl-8">
              <li>Building sustainable solutions</li>
              <li>Educating communities on water conservation</li>
              <li>Advocate for protective water policies</li>
            </ul>
            
            
            
          </div>
          <div className='bg-blue-400 rounded-2xl p-2 flex flex-col gap-4 items-center justify-center'>
            <div className='text-white text-lg'>Irrigation with siphon tubes</div>
            <div className='overflow-hidden'>
              <img className='rounded-2xl' src="/mission2.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      

    </section>
  )
}

export default VisionAndMission