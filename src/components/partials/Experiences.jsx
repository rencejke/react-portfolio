import React from 'react'
import AOS from 'aos';

// ..
AOS.init();

const Experiences = () => {
  return (
    <section id='experiences' className='experiences pb-12 '>
    <div className="max-w-[700px] w-full mx-auto px-4 py-1">
      <h4 className='text-center font-thicker text-[2rem] mb-12'>Experiences</h4>
      <div className="wrapper grid grid-cols-3 gap-6">

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
         data-aos="fade-right"  data-aos-duration="1000">
          <img src="../../html5.svg" alt="" className='size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
         data-aos="fade-up"  data-aos-duration="1000">
          <img src="../../css.svg" alt="" className='size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
         data-aos="fade-left"  data-aos-duration="1000">
          <img src="../../react.svg" alt="" className='size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
          data-aos="fade-right"  data-aos-duration="1000">
          <img src="../../sass.svg" alt="" className='size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
          data-aos="fade-up"  data-aos-duration="1000">
          <img src="../../wordpress.svg" alt="" className='size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
          data-aos="fade-left"  data-aos-duration="1000">
          <img src="../../mysql.svg" alt="" className='size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
          data-aos="fade-right"  data-aos-duration="1000">
          <img src="../../php.svg" alt="" className='size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
          data-aos="fade-up"  data-aos-duration="1000">
          <img src="../../bootstrap.svg" alt="" className='size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
          data-aos="fade-left"  data-aos-duration="1000">
          <img src="../../tailwind-css.svg" alt="" className='size-[90px]'/>
        </div>

       
       


        
      </div>
    </div>
  </section>
  )
}

export default Experiences