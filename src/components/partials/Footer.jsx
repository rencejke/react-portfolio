import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaMobileScreen } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="footer max-w-[900x] w-full mx-auto px-4 py-1 font-regular bg-[#081b29] text-white">
      <div className='flex lg:flex-row lg:gap-0 flex-col gap-8 justify-around p-12'>
        <div className="footer-item flex flex-col">
        <span className='logo text-[1.4rem]'>Clarence.</span> 
        <p className='mt-3'>Frontend Developer</p>
  </div>
        <div className="footer-item  socials flex flex-col">
        <span className='text-[1.4rem]'>Socials</span>
        <ul className='flex gap-5  mt-3  text-[22px] text-[#081b29] items-center'>
            <li><Link to={'https://www.linkedin.com/in/clarence-jake-bonilla-86a144311/'}><FaLinkedin /></Link></li>
            <li><Link to={'https://github.com/rencejke'}><FaGithub /></Link></li>
          </ul>

        </div>
        <div className="footer-item flex flex-col ">
        <span className='text-[1.4rem]'>Contact Me</span>
        
        <ul className='mt-3 flex flex-col gap-2'>
          <li className='text-[15px] flex flex-row items-center gap-2'><MdEmail />bonillaclarencejake@gmail.com</li>
        </ul>
  
        </div>
      </div>
    </div>
  )
}

export default Footer
