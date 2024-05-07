import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

const Contact = () => {
  return (
   <>
   <Header />

   <div className='bg-[#222831] text-white'>
    <section className='contact p-12 mx-auto w-[50%] '>
    <div className="container bg-[#76ABAE] p-12 rounded-xl">
    <h4 className='text-[1.5rem] font-thicker uppercase mb-8'>Get in Touch</h4>
      <div className="wrapper">
        <form action="">
          <div  className=' grid grid-cols-2 gap-2 mb-2'>
          <div className='flex flex-col'>
          <label htmlFor="Name" className='font-regular uppercase text-[1rem]'>Name</label>
          <input type="text" placeholder='Enter your Name' className='h-[40px] p-2 font-regular'/>
          </div>

          <div className='flex flex-col'>
          <label htmlFor="Email" className='font-regular uppercase text-[1rem]'>Email</label>
          <input type="email" placeholder='Enter your Name'  className='h-[40px] p-2 font-regular'/>
          </div>
          </div>
          <div className='flex flex-col mb-2'>
          <label htmlFor="Subject" className='font-regular uppercase text-[1rem]'>Subject</label>
          <input type="text" placeholder='Enter Subject'  className='h-[40px] p-2 font-regular'/>
          </div>

          <div className='flex flex-col'>
          <label htmlFor="Message" className='font-regular uppercase text-[1rem]'>Message</label>
          <textarea type="text" placeholder='Your Message Here'  className='h-[200px] p-2 resize-none font-regular'/>
          </div>

         <div className='text-center'>
         <button className='btn bg-black mt-6 px-6 text-white'><Link>Submit</Link></button>
         </div>
          
        </form>
      </div>
    </div>

  </section>
  <Footer />
     

    </div>


   </>
  )
}

export default Contact