import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import emailjs from '@emailjs/browser';

const Contact = () => {
   
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w3xn2uv', 'template_cjcdknj', form.current, {
        publicKey: 'h4r89uXNSY-VRw5aq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

  return (
   <>
  <Header/>

   <div className='bg-[#222831] text-white'>
    <section className='contact mx-auto w-[100%] p-16 lg:mb-[12rem] mb-[6rem]'>
    <div className="wrapper grid grid-cols-1  lg:grid-cols-2 h-[560px] ">
      
    <div className="left bg-[#081b29] px-12 pt-12  hidden lg:block">
      <h4 className='text-[25px] mb-5 font-bold'>Let's Get in Touch</h4>
    <img src={`${import.meta.env.BASE_URL}contact-1.png`} alt="" className='size-[65%] object-contain mx-auto  mt-20'/>
    
    </div>

    <div className="right bg-[#ededed] text-[#0c1216] px-12 pt-12 lg:pb-0 pb-12 lg:rounded-none rounded-sm ">
     <h4 className='text-[25px] mb-5  font-bold'>Contact Me</h4>
      
     <form ref={form} onSubmit={sendEmail}>
     <div className='flex flex-col gap-2  mb-2'>
     <label htmlFor="Name">Name</label>
      <input type="text" className='w-[90%]  border border-solid
       border-black rounded-md h-[40px] 
       ' placeholder='Enter Name' name='user_name' required/>
     </div>

     <div className='flex flex-col gap-2 mb-2'>
     <label htmlFor="Email">Email</label>
      <input type="email" className='w-[90%]  
      border border-solid border-black rounded-md h-[40px]  
      ' placeholder='Enter Email' name='user_email' required/>
     </div>


     <div className='flex flex-col gap-2 mb-2'>
     <label htmlFor="Message">Message</label>
      <textarea className='w-[90%]  border border-solid border-black rounded-md  
      h-[170px] resize-none  placeholder:pt-2' placeholder='Message' name='message' required></textarea>
     </div>

     <div className="btn-container w-[345px] h-[50px]  mt-6 ">
             <button type='submit' className='relative inline-flex w-[150px] h-[100%] bg-[#00abf0]
    border-2 border-solid border-[#00abf0] rounded-md text-[15px]
    text-[#081b29] font-semibold justify-center items-center z-[1] overflow-hidden
    transition-all'>Submit</button>
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