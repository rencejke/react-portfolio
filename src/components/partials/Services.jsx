import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services' className='services p-12'>
    <h4 className='text-center font-thicker text-[2rem] mb-12'>Services</h4>
    <div className="container">
      <div className="wrapper flex flex-wrap gap-5">

        <div className="item border border-[#76ABAE] h-[270px] w-auto p-6 rounded-xl basis-[49%]">
          <div className="itens__title flex justify-between">
            <h4 className='font-regular font-bold text-[1.4rem]'>Website Development</h4>

            <ul className='flex'>
              <li><FaCircle className='text-[#76ABAE]'/></li>
              <li><FaCircle  className='text-[#76ABAE]'/></li>
              <li><FaCircle className='text-[#76ABAE]'/></li>
            </ul>
          </div>
          <div className='flex flex-row gap-6 justify-center items-center'>
          <img src="../../services/s1.png" alt="" className='size-[140px]'/>
           <p className='font-regular'>If you need a website for your project or personal brand, 
            I'm here to help. Let's collaborate to make your ideas come to life 
            on the web!</p>
          </div>
          <button className='float-end btn'><Link>Let's Talk</Link></button>
        </div>

        <div className="item border border-[#76ABAE] h-[270px] w-auto p-6 rounded-xl basis-[49%]">
        <div className="itens__title flex justify-between">
        <h4 className='font-regular font-bold text-[1.4rem]'>UI and UX Design</h4>


            <ul className='flex'>
              <li><FaCircle className='text-[#76ABAE]'/></li>
              <li><FaCircle  className='text-[#76ABAE]'/></li>
              <li><FaCircle className='text-[#76ABAE]'/></li>
            </ul>
          </div>
          <div className='flex flex-row gap-6 justify-center items-center'>
          <img src="../../services/s2.png" alt="" className='size-[140px]'/>
           <p className='font-regular'>Let's make apps and websites easy and fun to use! I can help you with UI 
           and UX design. If you want websites or apps to look better and work smoothly, let's team up</p>
          </div>
          <button className='float-end btn'><Link>Let's Talk</Link></button>
        </div>

        <div className="item border border-[#76ABAE] h-[270px] w-auto p-6 rounded-xl  basis-[49%] mx-auto">
        <div className="itens__title flex justify-between">
        <h4 className='font-regular font-bold text-[1.4rem]'>Video and Photo Editing</h4>


            <ul className='flex'>
              <li><FaCircle className='text-[#76ABAE]'/></li>
              <li><FaCircle  className='text-[#76ABAE]'/></li>
              <li><FaCircle className='text-[#76ABAE]'/></li>
            </ul>
          </div>
          <div className='flex flex-row gap-6 justify-center items-center'>
          <img src="../../services/s3.png" alt="" className='size-[140px]'/>
           <p className='font-regular'>Transform your videos into something special! I'm here to help with video and photo editing. 
           Whether it's fixing little mistakes or adding cool 
           effects, let's make your videos and photo stand out together.</p>
          </div>
          <button className='float-end btn'><Link>Let's Talk</Link></button>
        </div>


      </div>
    </div>
  </section>
  )
}

export default Services