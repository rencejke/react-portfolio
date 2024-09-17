import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  
  const [showNav, setShowNav] = React.useState(false);
  const handleShowNav = () => setShowNav(!showNav);


  return (
    <header className='header'>
       
       <div className="wrapper container flex justify-between items-center  mt-4  relative">

        <div>
         <Link className='logo-header text-[22px] text-[#ededed] font-semibold mt-0 pt-0'>Clarence.</Link>
        </div>
       <div> 
     
       <nav className={`${showNav ? "left-0" : "-left-full"}  navbar fixed lg:static md:static top-0 w-full h-screen bg-black z-[9999]
         pt-20 px-6 pb-6 transition-all md:bg-transparent  md:pt-0 md:px-0 md:pb-0 md:h-auto md:flex  md:justify-center
       ` }>
        <ul className='md:flex md:flex-row md:items-center md:gap-12 flex flex-col gap-8 text-[20px] cursor-pointer'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="/projects">Portfolio</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
        </ul> 
        <button className='absolute top-8 right-5 text-lg md:hidden' onClick={handleShowNav}><FaTimes/></button>
        </nav>

        <button className='block lg:invisible md:invisible text-[22px]' onClick={handleShowNav}><RiMenu2Line /></button>
       </div>
        </div>
    </header>
  ) 


  
 
 
 
}

export default Header