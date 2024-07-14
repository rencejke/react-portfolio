import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <section className='cta'>
       
    <div className='text-center bg-[#0c1216] py-12'>
    <h2 className='font-thick text-3xl'>Let's build something amazing together!</h2>
    <p className='text-[22px] text-white'>Contact me and let's build your   website today!</p>
    <div className="container btn-container w-[345px] h-[50px] mt-6">
             <Link><button> Let's Talk</button></Link>
             </div>
    </div>
   </section>
  )
}

export default Cta