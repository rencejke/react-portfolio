import React, { useEffect, useState } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

import Experiences from '../partials/Experiences'
import About from '../partials/About'
import Banner from '../partials/Banner'
import Projects from '../partials/Projects'
import Services from '../partials/Services'
import { Link } from 'react-router-dom'
import Cta from '../partials/Cta'
import { ImGift } from 'react-icons/im';
import ScrollToTop from '../partials/ScrollToTop'



const Home = () => {
  
  const [home, setHome] = useState('')
    const [showImg, setShowImg] = useState(true);
    useEffect (() => {

        setTimeout(() => {
            setShowImg(false);
            setHome(
               <Home />
            )
            }, 500)

        })

  return (
<>
   

           <div className='    h-[100vh] relative'>
            { showImg ? (<div className='flex justify-center items-center mx-auto pt-[23rem]'>
                <img src={`${process.env.PUBLIC_URL}/loading2.svg`} className='size-[130px]' alt="" /> 

                </div> ) : (   <div className='bg-[#081b29] text-white'>
    <div className={`banner h-[100dvh] relative isolate`}>
       
       <div className="backdrop  absolute top-0 legft-0 h-full w-full -z-10"></div>
        
       
        <Header />
        <Banner />
       </div>
       <About />
       <Experiences />      
      <Projects />
      <Services />

     <Cta />
     <Footer />  
     <ScrollToTop/>
    </div> )
     }
         
      
    

 
    </div>
</>
  )
}

export default Home