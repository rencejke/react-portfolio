import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

const Home = () => {
  return (
<>
<div className='bg-[#222831] text-white'>
    <div className={`banner h-[100dvh] relative isolate`}>
       
       <div className="backdrop  absolute top-0 legft-0 h-full w-full -z-10"></div>
        
        <Header />

        <div className="container grid grid-cols-2 gap-20 mt-[5rem] font-regular">
          <div className='text self-center'>
            <h1 className='font-regular text-[25px]'>Hi, My Name is Clarence, Im a</h1>
            <h1 className='font-bold font-thicker'>Web Designer and Developer</h1>
            <p className='w-[80%] text-[18px]'>My passion lies in crafting stunning websites that not only 
            captivate users but also provide seamless functionality. I specialize in creating beautiful and 
            functional websites. Let's build something amazing together!
            </p>
            <button className='btn mt-5 '><Link>See My Work</Link></button>
           </div>
        
           <div className='image self-centerx'>
            <img src="https://via.placeholder.com/300x300" alt="" className='size-[80%] object-contain'/>

            <div className='absolute  right-[26vh] bottom-[16vh]'>
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

    <div className='bg-[#222831] p-6'>
    <div className="container">
    <div className='wrapper grid grid-cols-2 gap-5'>

      <div className='image'>
      <img src="https://via.placeholder.com/300x300" alt="" className='size-[80%] object-contain'/>
      </div>

      <div className='text mt-12 text-justify'>
      <h4 className='text-[2rem] font-thicker mb-8'>About Me</h4>
      <p className='w-[70%] text-[18px] font-regular'>I am a web developer, designer, and student at Laguna State Polytechnic University, pursuing a Bachelor of Science in Information Technology majoring in Web 
      and Mobile Application Development in the Philippines. I am passionate about creating and designing websites. </p>
      <p className='w-[70%] text-[18px] font-regular'>I thrive on challenges and consistently seek opportunities to expand my knowledge. Currently, I am exploring Crypto, NFTs, DeFi, and the Metaverse</p>
       <button className='btn mt-6'><Link>Download CV</Link></button>

      </div>
    </div>
    </div>
    </div>

    <section className='experiences pb-12 '>
      <div className="max-w-[700px] w-full mx-auto px-4 py-1">
        <h4 className='text-center font-thicker text-[2rem] mb-12'>Experiences</h4>
        <div className="wrapper grid grid-cols-3 gap-0">
          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

          <div className="item bg-[#31363F]/50 mx-auto p-6 rounded-md mb-3">
            <img src="../../html5.svg" alt="" className='size-[80px]'/>
          </div>

  

          
        </div>
      </div>
    </section>
    </div>
    <Footer />
   
</>
  )
}

export default Home