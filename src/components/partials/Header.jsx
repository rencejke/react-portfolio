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
       
       <div className="wrapper container flex justify-between  pt-3">

        <div>
         <div className='flex justify-between'>
         <Link className='logo-header text-[25px] text-[#ededed] font-semibold'>Clarence.</Link>
         <button className='block lg:invisible md:invisible text-[22px]' onClick={handleShowNav}><RiMenu2Line /></button>
         </div>
        </div>

       <div>
       <nav className={`${showNav ? "left-0" : "-left-full"}  fixed md:static top-0 left-0 w-full h-screen bg-black z-[9999] pt-20 px-6 pb-6 transition-all md:bg-transparent  md:pt-0 md:px-0 md:pb-0 md:h-auto md:flex  md:justify-center` }>
        <ul className='md:flex md:flex-row md:gap-12 xs:flex xs:flex-col xs:gap-8 xs:text-[20px] cursor-pointer'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="/projects">Portfolio</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
        </ul> 
        </nav>
       </div>


        </div>

       
      
     


       


    </header>



  ) 


  
 
 
 
}

export default Header