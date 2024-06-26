import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
   
  const [activeIndex, setActiveIndex] = React.useState(1)
  const handleClick = (index) =>setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <section id='portfolio' className='projects bg-[#0c1216] pt-8 py-12'>
    <div className='"max-w-[1000px] w-full mx-auto px-4 py-1'>
      <h4 className='text-center font-thicker text-[2rem] mb-12'>Some of my <span className='text-[#00abf0]'>Projects</span></h4>
      <div className="wrapper ">
        
        <div className='bg-[#00abf0] flex  rounded-lg p-2 justify-around items-center w-[500px] mx-auto'>
          <button id="1" onClick={()=> handleClick(1)}
          className={`${checkActive(1, "bg-[#081b29] px-3 py-1 rounded-md text-[#ededed] transition")}`}
          >Web Development</button>
          <button id="2"  onClick={()=> handleClick(2)}
          className={`${checkActive(2, "bg-[#081b29] px-3 py-1 rounded-md text-[#ededed] transition")}`}
          >Mobile Development</button>
          <button id="3"  onClick={()=> handleClick(3)}
           className={`${checkActive(3, "bg-[#081b29] px-3 py-1 rounded-md text-[#ededed] transition")}`}
          >Others...</button>
        </div>

        <div className='max-w-[1000px] w-[100%] mx-auto mt-12'>
        <div id="1" className={`${checkActive(1, "active")} panel`}>
         
          <div className='flex flex-row gap-10 bg-[#ededed] p-6 rounded-md'>
            <div className='left w-[100%]'>
            <img src="https://via.placeholder.com/200x200" alt="" className='w-[300px] h-[230px] rounded-xl object-cover'/>
            
            </div>

            <div className='right text-[#081b29]'>
            <h3 className='font-bold '>Math-alino</h3>
            <p className=''>Lorem ipsum dolor sit
             amet consectetur adipisicing elit. Ex asperiores
              atque et sunt commodi veritatis, harum ratione quae nisi 
              debitis non perspiciatis doloribus dicta perferendis, cum dolorum laborum quibusdam quia.</p>
            <div className='mb-4 flex gap-2 items-center'>
            <h4 className='font-bold '>Technologies:</h4>
              <ul className='flex gap-4'>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>C#</li>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>Unity</li>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>Canva</li>
              </ul>
            </div>
             <div className="btn-container w-[345px] h-[50px] ">
             <Link><button>Learn More</button></Link>
             </div>
            </div>
          </div>
       

        </div>
        <div id="2" className={`${checkActive(2, "active")} panel`}>
          <div className='flex flex-row gap-10 bg-[#ededed] p-6 rounded-md'>
            <div className='left w-[100%]'>
            <img src="https://via.placeholder.com/200x200" alt="" className='w-[300px] h-[230px] rounded-xl object-cover'/>
            
            </div>

            <div className='right text-[#081b29]'>
            <h3 className='font-bold '>Math-alino</h3>
            <p className=''>Lorem ipsum dolor sit
             amet consectetur adipisicing elit. Ex asperiores
              atque et sunt commodi veritatis, harum ratione quae nisi 
              debitis non perspiciatis doloribus dicta perferendis, cum dolorum laborum quibusdam quia.</p>
            <div className='mb-4 flex gap-2 items-center'>
            <h4 className='font-bold '>Technologies:</h4>
              <ul className='flex gap-4'>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>C#</li>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>Unity</li>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>Canva</li>
              </ul>
            </div>
             <div className="btn-container w-[345px] h-[50px] ">
             <Link><button>Learn More</button></Link>
             </div>
            </div>
          </div></div>
        <div id="3" className={`${checkActive(3, "active")} panel`}>
          <div className='flex flex-row gap-10 bg-[#ededed] p-6 rounded-md'>
            <div className='left w-[100%]'>
            <img src="https://via.placeholder.com/200x200" alt="" className='w-[300px] h-[230px] rounded-xl object-cover'/>
            
            </div>

            <div className='right text-[#081b29]'>
            <h3 className='font-bold '>Math-alino</h3>
            <p className=''>Lorem ipsum dolor sit
             amet consectetur adipisicing elit. Ex asperiores
              atque et sunt commodi veritatis, harum ratione quae nisi 
              debitis non perspiciatis doloribus dicta perferendis, cum dolorum laborum quibusdam quia.</p>
            <div className='mb-4 flex gap-2 items-center'>
            <h4 className='font-bold '>Technologies:</h4>
              <ul className='flex gap-4'>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>C#</li>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>Unity</li>
                <li className='bg-[#081b29] px-2 py-1 rounded-md text-[#ededed] items-center'>Canva</li>
              </ul>
            </div>
             <div className="btn-container w-[345px] h-[50px] ">
             <Link><button>Learn More</button></Link>
             </div>
            </div>
          </div></div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Projects
