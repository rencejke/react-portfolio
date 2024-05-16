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
    <section className='home h-[100vh] flex items-center py-0 px-[10%] relative'>
    <div className=' max-w-[600px] text-[#ededed] space-y-6'>
    <h1 className='text-[56px] font-bold text-[#ededed]'>Hi, I'm Clarence Jake</h1>
    <h3 className='text-[32px] font-bold text-[#00abf0] leading-10'>Web {text}<Cursor/></h3>
     <p className='text-[#ededed] text-[16px] mt-5 mb-10'>My passion lies in crafting stunning websites that not only 
            captivate users but also provide seamless functionality. I specialize in creating beautiful and 
            functional websites. Let's build something amazing together!
            </p>

        <div className="btn-container flex w-[345px] h-[50px] justify-between">
            <Link><button> See my Work</button></Link>
            <Link><button>Hire Me</button></Link>
        </div>

        <img src="../../profile1.png" className='absolute h-[720px] w-[550px] top-0 right-20 bottom-0 ' alt="" />
        
        <div className="socials bg-[#081b29] max-w-[300px] w-[300px] py-3  px-6 rounded-md absolute  right-10 bottom-16">
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

