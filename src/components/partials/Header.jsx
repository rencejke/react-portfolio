import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header bg-[#31363F] py-6 font-regular'>
    <div className="max-w-[1500px] w-full mx-auto px-4 py-1">
    <div className="flex justify-between items-center ">
        <span className='text-[1.4rem]'>Cla<span>rence</span></span>
        
        <ul className='flex items-center gap-7 text-white uppercase font-bold text-[15px]'>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Experiences</Link></li>
                        <li><Link to="">Portfolio</Link></li>
                        <li><Link to="">Contact</Link></li>
        </ul>
        <button className='btn px-4'><Link to="">Let's Talk</Link></button>
    </div>
    </div>
    </header>
  )
}

export default Header