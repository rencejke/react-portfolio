import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <section className='cta'>
       
    <div className='text-center bg-[#76ABAE] py-12'>
    <h2 className='font-thick text-3xl'>Let's build something amazing together!</h2>
    <p className='text-[22px] text-white'>Contact me and let's build your   website today!</p>
    <button className='btn bg-black mt-4 
     hover:bg-transparent border border-black hover:text-black
    
    '><Link>Let's Talk</Link></button>
    </div>
   </section>
  )
}

export default Cta