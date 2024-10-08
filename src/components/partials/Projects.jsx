import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
   
  return (
    <section id='portfolio' className='projects bg-[#0c1216] pt-8 py-12 overflow-hidden'>
    <div className='"max-w-[1000px] w-full mx-auto px-4 py-1'>
      <h4 className='text-center font-thicker text-[2rem] mb-12'>Some of my <span className='text-[#00abf0]'>Project</span></h4>
      <div className="wrapper">
      
  <div className='max-w-[1000px] w-[100%] mx-auto mt-12'>
          <div>
           
            <div className='tab-item flex lg:flex-row flex-col gap-10 bg-[#ededed]  p-6 rounded-md mb-5'>
              <div className='left w-[100%]'>
              <img src="./projectImg/math-alino.jpg" alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
              
              </div>
  
              <div className='right text-[#081b29]'>
              <h3 className='font-bold '>Math-alino</h3>
              <p className=''>This project is an interactive and engaging game that’s all about math that is specifically made for grades 1-3 students of Sta Maria Magdalena Elementary School. The game uses colorful graphics, good animation and it is user-friendly. 
  </p>

              <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>C#</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>Unity</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>Canva</li>
             </ul>
             </div>
              
               <div className="btn-container w-[345px] h-[50px] ">
               <Link to='/projects'><button>Learn More</button></Link>
               </div>
              </div>
            </div>
  
          </div>
       

          </div>
      </div>
    </div>
  </section>
  )
}

export default Projects
