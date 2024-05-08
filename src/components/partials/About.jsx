import React from 'react'
import { Link } from 'react-router-dom'




const About = () => {
 
  //download resume
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '../../resume/resume_clarence.pdf';
    link.download = 'resume_clarence.pdf';
    link.click();
  };
  

  return (
    <div id='about' className='bg-[#222831]  md:pt-[12rem] pt-12'>
    <div className="container">
    <div className='wrapper grid grid-cols-2 gap-5'>

      <div className='image'>
      <img src="../../profile2.jpg" alt="" className='size-[80%] object-contain' data-aos="fade-right" data-aos-duration="1000"/>
      </div>

      <div className='text mt-12 text-justify'>
      <h4 className='text-[2rem] font-thicker mb-8' data-aos="fade-left" data-aos-duration="1000">About Me</h4>
      <p className='w-[70%] text-[18px] font-regular' data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">I am a web developer, designer, and student at Laguna State Polytechnic University, pursuing a Bachelor of Science in Information Technology majoring in Web 
      and Mobile Application Development in the Philippines. I am passionate about creating and designing websites. </p>
      <p className='w-[70%] text-[18px] font-regular' data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1000">I thrive on challenges and consistently seek opportunities to expand my knowledge. Currently, I am exploring Crypto, NFTs, DeFi, and the Metaverse</p>
       <button className='btn mt-6' data-aos="fade-left" data-aos-delay="2100" data-aos-duration="1000" onClick={handleDownloadResume} ><Link>Download CV</Link></button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
