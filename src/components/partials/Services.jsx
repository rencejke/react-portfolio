import React from 'react'
import { CiMobile3 } from 'react-icons/ci'
import { FaPhotoVideo } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { SiMaterialdesignicons } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section id='services' className='bg-[#081b29] pt-16 px-0 lg:px-12 pb-12'>
    <div className="container">
    <div className='wrapper grid lg:grid-cols-2'>

      <div className='left lg:ml-[95px] ml-0'>
      <small className='text-[16px] mb-12 text-[#00abf0]'>Services</small>
        <h3 className='text-[25px] mt-3 font-regular font-bold'>What Services I Do for my Client?</h3>
    
        <div className='services-left rounded-lg lg:w-[510px] w-[370px] space-y-6 mt-6'>
         <div className='card-item rounded-lg flex lg:flex-row flex-col gap-10 items-center justify-center bg-[#0c1216] py-9 px-8'>
         <div className='bg-[#111e27] p-6 rounded-full lg:block hidden'>
         <MdWeb className='text-[30px]' />
         </div>
         <div>
          <h4>Web Development</h4>
          <p>If you need a website for your project or personal brand, Im here to help. Lets collaborate to make your ideas come to life on the web!</p>
            <div className="btn-container w-[322px] h-[40px] mt-6">
             <Link><button>Learn More</button></Link>
             </div>
         </div>
         </div>

         <div className='card-item rounded-lg flex lg:flex-row flex-col gap-10 items-center justify-center bg-[#0c1216] py-9 px-8'>
         <div className='bg-[#111e27] p-6 rounded-full lg:block hidden'>
         <SiMaterialdesignicons  className='text-[30px]'/>
         </div>
         <div>
          <h4>UI and UX Design</h4>
          <p>Lets make apps and websites easy and fun to use! I can help you with UI and UX design. If you want websites or apps to look better and work smoothly, lets team up</p>
            <div className="btn-container w-[322px] h-[40px] mt-6">
             <Link><button>Learn More</button></Link>
             </div>
         </div>
         </div>
        </div>
      </div>

      <div className='services-right  rounded-lg lg:w-[510px] w-[370px] space-y-6 mt-6'>
      <div className='card-item rounded-lg flex lg:flex-row flex-col gap-10 items-center justify-center bg-[#0c1216] py-9 px-8'>
      <div className='bg-[#111e27] p-6 rounded-full lg:block hidden'>
         <FaPhotoVideo className='text-[30px]'/>
         </div>
         <div>
          <h4>Simple video And Photo Editting</h4>
          <p className='text-left'>Im here to help with video and photo editing. Whether its fixing little mistakes or adding cool effects, lets make your videos and photo stand out together.</p>
            <div className="btn-container w-[322px] h-[40px] mt-6">
             <Link><button>Learn More</button></Link>
             </div>
         </div>
         </div>

         <div className='card-item rounded-lg flex lg:flex-row flex-col gap-10 items-center justify-center bg-[#0c1216] py-9 px-8'>
         <div className='bg-[#111e27] p-6 rounded-full lg:block hidden'>
         <img src="./services/s4.png" alt="" />
         </div>
         <div>
          <h4>Virtual Assistant</h4>
          <p>I'm here to help with your tasks. Whether it's managing your calendar, answering emails, or organizing your projects, let's make your day easier together.</p>
            <div className="btn-container w-[322px] h-[40px] mt-6">
             <Link><button>Learn More</button></Link>
             </div>
         </div>
         </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Services