import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

const Contact = () => {
  return (
   <>
   <Header />

   <div className='bg-[#222831] text-white mt-12'>
    <section className='contact mx-auto w-[100%] p-20'>
    <div className="wrapper  grid grid-cols-2 h-[560px]">
      
    <div className="left bg-[#081b29] p-6">
      <h4 className='text-[25px] mb-5 font-bold'>Let's Get in Touch</h4>
    <img src="../../contact-1.png" alt="" className='size-[65%] object-contain mx-auto  mt-20'/>
    </div>

    <div className="right bg-[#ededed] text-[#0c1216] p-6">
     <h4 className='text-[25px] mb-5  font-bold'>Contact Me</h4>
      
     <form action="">
     <div className='flex flex-col gap-2  mb-2'>
     <label htmlFor="Name">Name</label>
      <input type="text" className='w-[90%]  border border-solid
       border-black rounded-md h-[40px] 
       placeholder:p-2' placeholder='Enter Name'/>
     </div>

     <div className='flex flex-col gap-2 mb-2'>
     <label htmlFor="Email">Email</label>
      <input type="email" className='w-[90%]  
      border border-solid border-black rounded-md h-[40px]  
      placeholder:p-2' placeholder='Enter Email'/>
     </div>

     <div className='flex flex-col gap-2 mb-2'>
     <label htmlFor="Subject">Subject</label>
      <input type="text" 
      className='w-[90%] 
      border border-solid border-black rounded-md  h-[40px] placeholder:p-2'  placeholder='Enter Subject'/>
     </div>

     <div className='flex flex-col gap-2 mb-2'>
     <label htmlFor="Message">Message</label>
      <textarea className='w-[90%]  border border-solid border-black rounded-md  
      h-[170px] resize-none  placeholder:p-2' placeholder='Message'></textarea>
     </div>

     <div className="btn-container w-[345px] h-[50px]  mt-6 ">
             <Link><button type='submit'>Submit</button></Link>
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