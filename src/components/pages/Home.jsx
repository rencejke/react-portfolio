import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

const Home = () => {
  return (
<>
<div className='bg-[#141414] text-white'>
    <div className={`banner h-[100vh] relative isolate`}>
       
       <div className="backdrop bg-black/30 absolute top-0 legft-0 h-full w-full -z-10"></div>
        
        <Header />

        <div className="max-w-[1500px] w-full mx-auto px-4 py-1 grid grid-cols-2 gap-20 mt-[5rem] font-regular">
          
          <div className='text self-center'>
            <h1 className='font-regular text-[25px]'>Hi, My Name is Clarence, Im a</h1>
            <h1 className='font-bold font-thicker'>Web Designer and Developer</h1>
            <p className='w-[80%] text-[18px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem error, optio dolore deserunt eaque labore.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem error, optio dolore deserunt eaque labore.
            </p>
            <button className='btn mt-5'><Link>See My Work</Link></button>
           </div>
        
           <div className='image self-center'>
            <img src="https://via.placeholder.com/300x300" alt="" className='size-[80%] object-cover'/>

            <div className='absolute  right-[30vh] bottom-[20vh]'>
            <ul className='mt-3 flex flex-col gap-5'>
               
               <li><Link className='flex flex-row items-center gap-2 text-[30px]'><FaFacebook /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]'><FaTwitter /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]'><BiLogoGmail /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]'><FaInstagram /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]'><FaGithub /></Link></li>
            </ul>
            </div>
           </div>
        
        </div>
            
    </div>
    </div>
    <Footer />
   
</>
  )
}

export default Home