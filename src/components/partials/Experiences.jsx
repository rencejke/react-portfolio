import React from 'react'
import AOS from 'aos';

// ..
AOS.init({
  once: true,
});

const Experiences = () => {
  return (
    <section id='experiences' className='experiences pb-12 pt-12'>
    <div className="max-w-[700px] w-full mx-auto px-4 py-1">
      <h4 className='text-center font-thicker text-[1.9rem] mb-12'>I have experiences in these <span className='text-[#00abf0] xs:leading-10'>Technologies</span></h4>
      <div className="wrapper grid grid-cols-3 lg:gap-2 gap-6">

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0] lg:p-12 p-4 mx-auto rounded-md rounded-md mb-3"
         data-aos="fade-right"  data-aos-duration="1000">
          <img src="/public/experiences/html5.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0]  mx-auto lg:p-12 p-4 rounded-md mb-3"
         data-aos="fade-up"  data-aos-duration="1000">
          <img src="/public/experiences/css.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0]  mx-auto lg:p-12 p-4 rounded-md mb-3"
         data-aos="fade-left"  data-aos-duration="1000">
          <img src="/public/experiences/bootstrap.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0]  mx-auto lg:p-12 p-4 rounded-md mb-3"
          data-aos="fade-right"  data-aos-duration="1000">
          <img src="/public/experiences/sass.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0]  mx-auto lg:p-12 p-4 rounded-md mb-3"
          data-aos="fade-up"  data-aos-duration="1000">
          <img src="/public/experiences/tailwind.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0]  mx-auto lg:p-12 p-4 rounded-md mb-3"
          data-aos="fade-left"  data-aos-duration="1000">
          <img src="/public/experiences/wordpress.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0]  mx-auto lg:p-12 p-4 rounded-md mb-3"
          data-aos="fade-right"  data-aos-duration="1000">
          <img src="/public/experiences/react.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0]  mx-auto lg:p-12 p-4 rounded-md mb-3"
          data-aos="fade-up"  data-aos-duration="1000">
          <img src="/public/experiences/mysql.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#00abf0]  mx-auto lg:p-12 p-4 rounded-md mb-3"
          data-aos="fade-left"  data-aos-duration="1000">
          <img src="/public/experiences/git.png" alt="" className='size-[50px] lg:size-[90px]'/>
        </div>

       
       


        
      </div>
    </div>
  </section>
  )
}

export default Experiences