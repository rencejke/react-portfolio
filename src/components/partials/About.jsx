import React from 'react'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter';




const About = () => {
 
  //download resume
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '../../resume/Bonilla_Clarence_Jake_CV.pdf';
    link.download = 'Bonilla_Clarence_Jake_CV.pdf';
    link.click();
  };

  const [text] = useTypewriter({
    words:['Designer', 'Developer'],
    loop:{},
    typeSpeed: 180,
    delaySpeed: 200,
  })
  

  return (
    <div id='about' className='bg-[#0c1216] pt-16 px-12 pb-12 mt-1'>
    <div className="container">
    <div className='flex items-center justify-center'>
    <div className='wrapper flex lg:flex-row lg:gap-[90px] gap-[40px] items-center flex-col'>

<div className='left ml-[95px] xs:ml-0'>
<small className='text-[16px] mb-12 text-[#00abf0]'>About Me</small>
  <h3 className='text-[35px] mt-3 font-regular font-bold '>Web {text}<Cursor/></h3>

  <div className='abt-img w-[320px] bg-[#00abf0] px-6 mx-auto mt-8 rounded-md'>
  <img src="../../profile1.png" alt="" className=''/>
  </div>
</div>

<div className='right  text-justify max-w-[700px] mt-20 xs:mt-0'>
 <div className='space-y-6'>
 <p>I am a web developer, designer, and graduate of Laguna State Polytechnic University, where I earned
  a Bachelor of Science in Information Technology majoring in Web and Mobile Application Development.
  I am passionate about creating and designing websites.</p>
  <p>During my studies, I gained extensive experience in both web and mobile application development, working 
on numerous projects that honed my skills in coding, UI/UX design, and project management. I am excited 
to apply my knowledge and continue learning in the field of web development</p>
 </div>
       <div className="btn-container w-[345px] h-[50px] mt-6">
       <Link><button onClick={handleDownloadResume}> Download CV</button></Link>
       </div>
</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default About
