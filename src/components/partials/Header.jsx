import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className='header bg-[#31363F] py-6 font-regular'>
    <div className="max-w-[1500px] w-full mx-auto px-4 py-1">
    <div className="flex justify-between items-center ">
        <span className='text-[1.4rem]'>Cla<span>rence</span></span>
        
        <ul className='flex items-center gap-7 text-white uppercase font-bold text-[15px]'>
                        <li><Link to="/home">Home</Link></li>
                        <li><HashLink  smooth to="#about">About</HashLink></li>
                        <li><HashLink  smooth to="#experiences">Experiences</HashLink></li>
                        <li><HashLink  smooth to="#portfolio">Portfolio</HashLink></li>
                        <li><HashLink  smooth to="#services">Services</HashLink></li>
                        <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className='btn px-4'><Link to="">Let's Talk</Link></button>
    </div>
    </div>
    </header>
  )
}

export default Header