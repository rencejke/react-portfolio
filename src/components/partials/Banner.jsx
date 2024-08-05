import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';

AOS.init();

const Banner = () => {

  const [text] = useTypewriter({
    words:['Designer', 'Developer'],
    loop:{},
    typeSpeed: 180,
    delaySpeed: 200,
  })

   
   
  return (
    <section className='home h-[94dvh] flex items-center py-0 px-[10%] relative border-2 border-red-500'>
    <div className=' lg:max-w-[600px] xs:max-w-[320px] text-[#ededed] space-y-6'>
    <h1 className='lg:text-[56px] font-bold text-[#ededed] leading-[3.5rem] text-[48px] xs:text-[32px]'>Hi, I'm Clarence Jake</h1>
    <h3 className='text-[32px] font-bold text-[#00abf0] leading-10'>Web {text}<Cursor/></h3>
     <p className='text-[#ededed] text-[16px] mt-5 mb-10 xs:pr-12 text-left'>My passion lies in crafting stunning websites that not only 
            captivate users but also provide seamless functionality. I specialize in creating beautiful and 
            functional websites. Let's build something amazing together!
            </p>

        <div className="btn-container flex lg:flex-row w-[345px] lg:h-[50px] lg:justify-around xs:flex-col xs:justify-between xs:h-[100px] xs:gap-3">
            <Link to={'https://github.com/rencejke'}><button> See my Work</button></Link>
            <Link to={'https://calendly.com/bonillaclarencejake/30-minutes-discovery-concsulation?month=2024-07'}><button>Hire Me</button></Link>
        </div>

        <img src="../../profile1.png" className='absolute h-[896px] w-[700px] right-20 bottom-[3px] md:block hidden' alt="" />
        
        <div className="socials bg-[#0c263b] lg:block hidden max-w-[300px] w-[300px] py-3  px-6 rounded-md absolute  lg:right-10 lg:bottom-16 bottom-[115px] xs:bottom-[70px] right-0">
          <ul className='flex gap-5  text-[22px] text-[#081b29] items-center'>
            <li><Link><FaFacebookF/></Link></li>
            <li><Link><FaTwitter /></Link></li>
            <li><Link><FaLinkedin /></Link></li>
            <li><Link><FaInstagram /></Link></li>
            <li><Link><FaGithub /></Link></li>
          </ul>
        </div> 

              <Link className='scroll-btn mb-12'></Link>
            
</div>

</section>
  )
}

export default Banner

