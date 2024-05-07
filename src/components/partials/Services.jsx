import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa'

const Services = () => {
  return (
    <section className='services p-12'>
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
          <img src="https://via.placeholder.com/30x30" alt="" className='size-[140px]'/>
           <p className='font-regular'>If you need a website for your project or personal brand, 
            I'm here to help. Let's collaborate to make your ideas come to life 
            on the web!</p>
          </div>
          <button className='float-end btn'><Link>Contact Me</Link></button>
        </div>

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
          <img src="https://via.placeholder.com/30x30" alt="" className='size-[140px]'/>
           <p className='font-regular'>If you need a website for your project or personal brand, 
            I'm here to help. Let's collaborate to make your ideas come to life 
            on the web!</p>
          </div>
          <button className='float-end btn'><Link>Contact Me</Link></button>
        </div>

        <div className="item border border-[#76ABAE] h-[270px] w-auto p-6 rounded-xl  basis-[49%] mx-auto">
        <div className="itens__title flex justify-between">
        <h4 className='font-regular font-bold text-[1.4rem]'>Website Development</h4>


            <ul className='flex'>
              <li><FaCircle className='text-[#76ABAE]'/></li>
              <li><FaCircle  className='text-[#76ABAE]'/></li>
              <li><FaCircle className='text-[#76ABAE]'/></li>
            </ul>
          </div>
          <div className='flex flex-row gap-6 justify-center items-center'>
          <img src="https://via.placeholder.com/30x30" alt="" className='size-[140px]'/>
           <p className='font-regular'>If you need a website for your project or personal brand, 
            I'm here to help. Let's collaborate to make your ideas come to life 
            on the web!</p>
          </div>
          <button className='float-end btn'><Link>Contact Me</Link></button>
        </div>


      </div>
    </div>
  </section>
  )
}

export default Services