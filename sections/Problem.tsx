import React from 'react'

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-blue-600">Problem Statement</h2>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 justify-center items-center mx-auto'>
          <div className='border-2 border-blue-700 p-4 flex flex-col gap-4 rounded-xl items-center'>
            <div>
              <img className='rounded-xl' src="/problem1.png" alt="" />
            </div>
            <div className='font-bold  text-2xl w-full text-center text-white bg-blue-400 rounded-xl py-2'>
              Water Shortage
            </div>
          </div>
          <div className='border-2 border-blue-700 p-4 flex flex-col gap-4 rounded-xl items-center'>
            <div>
              <img className='rounded-xl' src="/problem2.png" alt="" />
            </div>
            <div className='font-bold  text-2xl w-full text-center text-white bg-blue-400 rounded-xl py-2'>
            Poor Management
            </div>
          </div>
          <div className='border-2 border-blue-700 p-4 flex flex-col gap-4 rounded-xl items-center'>
            <div>
              <img className='rounded-xl' src="/problem3.png" alt="" />
            </div>
            <div className='font-bold  text-2xl w-full text-center text-white bg-blue-400 rounded-xl py-2'>
            Bad Infrastructure
            </div>
          </div>

          
          <div className='border-2 border-blue-700 p-4 flex flex-col gap-4 rounded-xl items-center'>
            <div>
              <img className='rounded-xl' src="/problem4.png" alt="" />
            </div>
            <div className='font-bold  text-2xl w-full text-center text-white bg-blue-400 rounded-xl py-2'>
            Safe clean water
            </div>
          </div>
          <div className='border-2 border-blue-700 p-4 flex flex-col gap-4 rounded-xl items-center  '>
            <div>
              <img className='rounded-xl' src="/problem5.png" alt="" />
            </div>
            <div className='font-bold  text-2xl w-full text-center text-white bg-blue-400 rounded-xl py-2'>
            Effect on agriculture
            </div>
          </div>
          
        </div>




      </div>

    </section>
  )
}

export default Problem