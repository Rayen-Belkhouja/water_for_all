import { AlertTriangle, DropletIcon, ThumbsUp, DollarSign, Handshake, AlertCircle, CloudRain, Lightbulb, Hand } from 'lucide-react';


const ActionPlan = () => {
  return (
    <section id="actionplan" className=" bg-white text-lg">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-blue-600">Our Action Plan</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-8">
     
      <div className="border-r-4 pr-6 border-blue-700">
        <h2 className="text-blue-600 text-xl font-bold mb-4 text-center">Awareness campaign <AlertTriangle className="inline ml-2 text-yellow-400" /></h2>
        <ul className="list-disc space-y-2 pl-4">
          <li className="flex items-center">The extent of water scarcity in Tunisia <DropletIcon className="ml-2 text-blue-500" /></li>
          <li className="flex items-center">The responsible water use/practices <ThumbsUp className="ml-2 text-blue-500" /></li>
          <li className="flex items-center">Hygiene and proper sanitation <DropletIcon className="ml-2 text-blue-500" /></li>
        </ul>
      </div>


      <div className="border-r-4 pr-6 border-blue-700">
        <h2 className="text-blue-600 text-xl font-bold mb-4 text-center">Fundraising <Hand className="inline ml-2 text-green-500" /></h2>
        <ul className="list-disc space-y-2 pl-4">
          <li className="flex items-center">Organize fundraising events <DollarSign className="ml-2 text-green-500" /></li>
          <li className="flex items-center">Look for partnerships <Handshake className="ml-2 text-blue-500" /></li>
        </ul>
      </div>

    
      <div className="pr-6">
        <h2 className="text-blue-600 text-xl font-bold mb-4 text-center">Field actions <AlertCircle className="inline ml-2 text-orange-500" /></h2>
        <ul className="list-disc space-y-2 pl-4">
          <li className="flex items-center">Short-term: Water filtration systems/emergency water distribution <AlertCircle className="ml-2 text-red-500" /></li>
          <li className="flex items-center">Mid-term: Water storage facilities and pipelines/Rainwater harvesting <CloudRain className="ml-2 text-blue-400" /></li>
          <li className="flex items-center">Long-term: Integration of new technology <Lightbulb className="ml-2 text-yellow-500" /></li>
        </ul>
      </div>
    </div>
        

       


      </div>

      <div className='w-full mt-4'>
          <img className='w-full h-[400px] object-cover object-top' src="/actionplan.png" alt="wed"/>
        </div>
      
    </section>
  )
}

export default ActionPlan