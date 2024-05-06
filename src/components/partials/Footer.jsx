import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'
import { FaMobileScreen } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="footer max-w-[900x] w-full mx-auto px-4 py-1 font-regular bg-[#141414] text-white">
      <div className='flex flex-row justify-around p-12'>
        <div className="footer-item flex flex-col">
        <span className='text-[1.4rem]'>Cla<span>rence</span></span>
        <p className='mt-3'>Lorem ipsum dolor sit amet.</p>
  </div>
        <div className="footer-item flex flex-col">
        <span className='text-[1.4rem]'>Keep Connected</span>
        <ul className='mt-3 flex flex-col gap-2'>
          <li><Link className='flex flex-row items-center gap-2 text-[18px]'><FaFacebook />Facebook</Link></li>
          <li><Link className='flex flex-row items-center gap-2 text-[18px]'><FaTwitter />Twitter</Link></li>
          <li><Link className='flex flex-row items-center gap-2 text-[18px]'><BiLogoGmail />Gmail</Link></li>
          <li><Link className='flex flex-row items-center gap-2 text-[18px]'><FaInstagram />Instagram</Link></li>
          <li><Link className='flex flex-row items-center gap-2 text-[18px]'><FaGithub />Github</Link></li>
        </ul>

        </div>
        <div className="footer-item flex flex-col ">
        <span className='text-[1.4rem]'>Contact Information</span>
        
        <ul className='mt-3 flex flex-col gap-2'>
          <li className='text-[18px] flex flex-row items-center gap-2'><IoLocationSharp />Brgy. San Gregorio San Pablo City Laguna</li>
          <li className='text-[18px] flex flex-row items-center gap-2'><FaMobileScreen />123456789</li>
          <li className='text-[18px] flex flex-row items-center gap-2'><MdEmail />bonillaclarencejake@gmail.com</li>
        </ul>
  
        </div>
      </div>
    </div>
  )
}

export default Footer
