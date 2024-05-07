import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import AOS from 'aos';

AOS.init();

const Banner = () => {
  return (
    <div className="container grid grid-cols-2 gap-20 mt-[5rem] font-regular">
          <div className='text self-center'>
            <h1 className='font-regular text-[25px]' data-aos="fade-right" data-aos-duration="1000">Hi, My Name is Clarence, Im a</h1>
            <h1 className='font-bold font-thicker' data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000">Web Designer and Developer</h1>
            <p className='w-[80%] text-[18px]' data-aos="fade-right" data-aos-delay="1400" data-aos-duration="1000">My passion lies in crafting stunning websites that not only 
            captivate users but also provide seamless functionality. I specialize in creating beautiful and 
            functional websites. Let's build something amazing together!
            </p>
            <button className='btn mt-5' data-aos="fade-right" data-aos-delay="2100" data-aos-duration="1000"><Link>See My Work</Link></button>
           </div>
        
           <div className='image self-center' data-aos="fade-left"  data-aos-duration="1000">
            <img src="https://via.placeholder.com/300x300" alt="" className='size-[80%] object-contain'/>
           </div>
           <div className='absolute  right-[30vh] bottom-[30vh]'>
            <ul className='mt-3 flex flex-col gap-5'>
               
               <li><Link className='flex flex-row items-center gap-2 text-[30px] 
               transition-all ease-in hover:text-[#76ABAE]'data-aos="fade-up"
                data-aos-delay="2700" data-aos-duration="1000"><FaFacebook /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]
                transition-all ease-in hover:text-[#76ABAE]' data-aos="fade-up"
                data-aos-delay="2000" data-aos-duration="1000"><FaTwitter /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]
                transition-all ease-in hover:text-[#76ABAE]'data-aos="fade-up"
                data-aos-delay="1300" data-aos-duration="1000"><BiLogoGmail /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]
                transition-all ease-in hover:text-[#76ABAE]' data-aos="fade-up"
                data-aos-delay="700" data-aos-duration="1000"><FaInstagram /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]
                transition-all ease-in hover:text-[#76ABAE]' data-aos="fade-up"
                data-aos-delay="100" data-aos-duration="1000"><FaGithub /></Link></li>
            </ul>
            </div>
        </div>
  )
}

export default Banner