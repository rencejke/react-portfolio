import React from 'react'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter';




const About = () => {
 
  //download resume
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '../../resume/resume_clarence.pdf';
    link.download = 'resume_clarence.pdf';
    link.click();
  };

  const [text] = useTypewriter({
    words:['Designer', 'Developer'],
    loop:{},
    typeSpeed: 180,
    delaySpeed: 200,
  })
  

  return (
    <div id='about' className='bg-[#0c1216] pt-16 px-12 pb-12'>
    <div className="container">
    <div className='wrapper flex gap-[90px] items-center'>

      <div className='left ml-[95px]'>
      <small className='text-[16px] mb-12 text-[#00abf0]'>About Me</small>
        <h3 className='text-[35px] mt-3 font-regular font-bold '>Web {text}<Cursor/></h3>
    
        <div className='abt-img w-[320px] bg-[#00abf0] px-6 mx-auto mt-8 rounded-md'>
        <img src="../../profile1.png" alt="" className=''/>
        </div>
      </div>

      <div className='right  text-justify max-w-[700px] mt-20'>
       <div className='space-y-6'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eos. Sit eius necessitatibus, quaerat commodi obcaecati quod ab. 
        Dolores animi inventore perspiciatis vitae libero 
        illo voluptatibus quae placeat voluptatum recusandae.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, corporis inventore 
          hic facere aperiam voluptates, eligendi dolorum maiores, voluptatibus 
          odio eaque eum neque? Est excepturi dolorem ipsum natus, voluptates expedita.</p>
       </div>
             <div className="btn-container w-[345px] h-[50px] mt-6">
             <Link><button onClick={handleDownloadResume}> Download CV</button></Link>
             </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
