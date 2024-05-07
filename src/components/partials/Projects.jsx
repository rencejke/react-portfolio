import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='projects'>
    <div className='"max-w-[1000px] w-full mx-auto px-4 py-1'>
      <h4 className='text-center font-thicker text-[2rem] mb-12'>Some of my Projects</h4>
      <div className="wrapper mx-auto w-[80%]">
      

      <div className="project_item flex flex-row  justify-center items-center gap-10 mb-6" data-aos="fade-right" data-aos-duration="1000">
      <div className="image">
         <img src="https://via.placeholder.com/300x300" alt="" className='h-[400px] w-[900px]'/>
        </div>
        <div className="text">
        <div>
          <h3 className='font-thicker text-2xl'  data-aos="fade-left" data-aos-duration="1000">PROJECT 1</h3>
          <span className='font-thicker text-2xl'  data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">MATH-ALINO GAME</span>
          <p className='w-[90%] font-regular text-xl my-4'  data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1000">This project is an interactive and engaging game that’s all about math that is specifically made for grades 1-3 students of Sta
             Maria Magdalena Elementary School. The game uses colorful graphics, good 
             animation and it is user-friendly. </p>
             <button className='btn' data-aos="fade-left" data-aos-delay="2100" data-aos-duration="1000"><Link>Learn More</Link></button>
         </div>
        </div>
      </div>


      <div className="project_item flex flex-row  justify-center items-center gap-10 mb-6" data-aos="fade-right" data-aos-duration="1000">
      <div className="image">
         <img src="https://via.placeholder.com/300x300" alt="" className='h-[400px] w-[900px]'/>
        </div>
        <div className="text">
        <div>
          <h3 className='font-thicker text-2xl'  data-aos="fade-left" data-aos-duration="1000">PROJECT 1</h3>
          <span className='font-thicker text-2xl'  data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">MATH-ALINO GAME</span>
          <p className='w-[90%] font-regular text-xl my-4'  data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1000">This project is an interactive and engaging game that’s all about math that is specifically made for grades 1-3 students of Sta
             Maria Magdalena Elementary School. The game uses colorful graphics, good 
             animation and it is user-friendly. </p>
             <button className='btn' data-aos="fade-left" data-aos-delay="2100" data-aos-duration="1000"><Link>Learn More</Link></button>
         </div>
        </div>
      </div>

      <div className="project_item flex flex-row  justify-center items-center gap-10 mb-6" data-aos="fade-right" data-aos-duration="1000">
      <div className="image">
         <img src="https://via.placeholder.com/300x300" alt="" className='h-[400px] w-[900px]'/>
        </div>
        <div className="text">
        <div>
          <h3 className='font-thicker text-2xl'  data-aos="fade-left" data-aos-duration="1000">PROJECT 1</h3>
          <span className='font-thicker text-2xl'  data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">MATH-ALINO GAME</span>
          <p className='w-[90%] font-regular text-xl my-4'  data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1000">This project is an interactive and engaging game that’s all about math that is specifically made for grades 1-3 students of Sta
             Maria Magdalena Elementary School. The game uses colorful graphics, good 
             animation and it is user-friendly. </p>
             <button className='btn' data-aos="fade-left" data-aos-delay="2100" data-aos-duration="1000"><Link>Learn More</Link></button>
         </div>
        </div>
      </div>

        

      </div>
    </div>
  </section>
  )
}

export default Projects
