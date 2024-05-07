import React, { useEffect, useState } from 'react'
import Home from '../pages/Home'
import { ImGift } from 'react-icons/im';

const SpinLoader = () => {
    const [home, setHome] = useState('')
    const [showImg, setShowImg] = useState(true);
    useEffect (() => {

        setTimeout(() => {
            setShowImg(false);
            setHome(
               <Home />
            )
            }, 3000)

        })
  return (
    <>
         <div className='bg-[#222831] h-[100vh] relative'>
            {
                showImg ? (<div className='flex justify-center items-center mx-auto pt-[23rem]'>
                
                <img src="../../loading2.svg" className='size-[130px]' alt="" /> 

                </div> ) : (<Home />)
            }
         </div> 
    </>
  )
}

export default SpinLoader
