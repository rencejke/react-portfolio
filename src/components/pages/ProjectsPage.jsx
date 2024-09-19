import React from 'react'
import Header from '../partials/Header'
import Cta from '../partials/Cta'
import Footer from '../partials/Footer'
import GitHubCalendar from 'react-github-calendar'
import { Link } from 'react-router-dom'


const ProjectsPage = () => {

  const [activeIndex, setActiveIndex] = React.useState(1)
  const handleClick = (index) =>setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <>
    <div className='text-[#ededed]'>
    <Header/>
     
    <section id='portfolio' className='projects bg-[#0c1216] dark:bg-[#ededed]/10 pt-8 py-12  overflow-hidden'>
    <div className='"max-w-[1000px] w-full mx-auto px-4 py-1'>
      <h4 className='text-center font-thicker text-[2rem] mb-12'>Some of my <span className='text-[#00abf0]'>Projects</span></h4>
      <div className="wrapper ">
        
        <div className='bg-[#00abf0] flex flex-col lg:flex-row lg:gap-0 gap-2 rounded-lg py-1 p-6 justify-center lg:justify-around items-center lg:w-[500px] mx-auto'>
          <button id="1" onClick={()=> handleClick(1)}
          className={`${checkActive(1, "bg-[#081b29] px-3 rounded-md text-[#ededed] transition")}`}
          >Web Development</button>
          <button id="2"  onClick={()=> handleClick(2)}
          className={`${checkActive(2, "bg-[#081b29] px-3 rounded-md text-[#ededed] transition")}`}
          >Game Development</button>
        </div>

        <div className='flex flex-col max-w-[1000px] w-[100%] mx-auto mt-12'>

        {/* project1 */}
       <div id="1" className={`${checkActive(1, "active")} panel`}>
         
       <div className='tab-item flex flex-col gap-10 lg:flex-row  bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
      <div className='left max-w-[320px]'>
      <img src={import.meta.env.BASE_URL + "./projectImg/collab-techida.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

      <div className='right text-[#081b29] max-w-[600px]x'>
     <div className='grid grid-rows-1 gap-10'>
     <div>
      <h3 className='font-bold dark:text-[#ededed]'>Techida Clone</h3>
      <p className='dark:text-[#ededed] text-wrap text-[14px]'>
        Cloned project: Techida is an IT Solutions & Business Services Responsive template that is the perfect choice for tech businesses.
      </p>
      <div className='mb-4 flex flex-wrap gap-2 items-center'>
        <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
        <ul className='flex flex-wrap gap-2 items-center'>
          <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
          <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>CSS</li>
          <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>JS</li>
          <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>Tailwind</li>
          <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>Wordpress</li>
        </ul>
      </div>
      </div>
      <div className="btn-container w-[345px] h-[50px] ">
        <Link to={'https://github.com/lourenrubico23/Techida-Collab'}>
          <button>Learn More</button>
        </Link>
      </div>
     </div>
    </div>
  </div>
      </div>

       <div id="1" className={`${checkActive(1, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row   bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL + "./projectImg/faqs.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>FCA Clone Page</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>Frontline Christian Academy, Inc. (FCA) started as a homeschool for the children of staff members at Philippine Frontline Ministries, Inc. (PFM) (www.thefrontline.asia). PFM later expanded its mission to help abandoned and abused street children by creating a child care initiative called Face the Children (FTC) (www.facethechildren.org).</p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>CSS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>JS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29]  items-center'>Tailwind</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/FAQS__Tailwind__Practice'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>

       <div id="1" className={`${checkActive(1, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row   bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL + "./projectImg/frontline-web.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1 gap-10'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>Frontline Business Solutions</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>

            Cloned project: Frontline Business Solutions 
            is a company based in San Pablo City, Laguna, 
            Philippines. Offers website design, web hosting, 
            accounting, and SEO.

           </p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>CSS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>JS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29]  items-center'>Tailwind</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/Frontline_Website'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>

       <div id="1" className={`${checkActive(1, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row  bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL + "./projectImg/insights.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1 gap-10'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>Insights Clone</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>

           Insights Clone is a project that is given to us by our instructor month of May year 2024

           </p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>CSS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>JS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29]  items-center'>Tailwind</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/Frontline_Website'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>

       <div id="1" className={`${checkActive(1, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row  bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL +  "./projectImg/lms.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1 gap-10'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>Library Management System</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>

           Library Management System that can handle everyday transactions of a library. Admin can view, update, add, delete books and students can borrow or return book

           </p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>CSS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>JS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>PHP</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/project-library-management'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>

       <div id="1" className={`${checkActive(1, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL + "./projectImg/michi-ramen.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1 gap-10'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>Michi Ramen</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>

           Michi ramen is a cloned project

           </p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>REACT</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>TAILWIND</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/react-ramen'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>

       <div id="1" className={`${checkActive(1, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL +  "./projectImg/onlineshop.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1 gap-10'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>Online Shop</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>

           This project allows user to buy anime figures. Admin can add, update, delete, and view products

           </p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>CSS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>JS</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>PHP</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/project-shop'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>
      
       <div id="1" className={`${checkActive(1, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL + "./projectImg/react-netflix.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1 gap-10'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>Netflix Clone</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>

           Cloned project: Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device.

           </p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>REACT</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>TAILWIND</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>REST API</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>PHP</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/React-Netflix'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>

       <div id="1" className={`${checkActive(1, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL + "./projectImg/react-youtube.png"} alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1 gap-10'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>Youtube Clone</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>

           YouTube is a free video sharing website that makes it easy to watch online videos. You can even create and upload your own videos to share with others. Originally created 
           in 2005, YouTube is now one of the most popular sites 
           on the Web, with visitors watching around 6 billion hours of
            video every month.
           </p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>HTML</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>REACT</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>TAILWIND</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/react-youtube'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>

       <div id="2" className={`${checkActive(2, "active")} panel`}>  
       <div className='tab-item flex flex-col gap-10 lg:flex-row bg-[#ededed] dark:bg-[#0c1216] p-6 rounded-md mb-5'>
       <div className='left max-w-[320px]'>
       <img src={import.meta.env.BASE_URL + "./projectImg/math-alino.jpg" } alt="" className='w-[450px] h-[230px] rounded-xl object-cover'/>
      </div>

           <div className='right text-[#081b29] max-w-[600px]'>
           <div className='grid grid-rows-1 gap-10'>
           <div>
           <h3 className='font-bold dark:text-[#ededed]'>Math-alino</h3>
           <p className='dark:text-[#ededed] text-wrap text-[14px]'>
           This project is an interactive and engaging game that’s all 
           about math that is specifically made for grades 1-3 students 
           of Sta Maria Magdalena Elementary School. The game uses colorful 
           graphics, good animation and it is user-friendly.

           </p>
           <div className='mb-4 flex gap-2 items-center'>
           <h4 className='font-bold dark:text-[#ededed]'>Technologies:</h4>
             <ul className='flex flex-wrap gap-1 items-center lg:gap-[6px]'>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>C#</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>Unity</li>
               <li className='bg-[#081b29] dark:bg-[#ededed] px-2 py-1 rounded-md text-[#ededed] dark:text-[#081b29] items-center'>Canva</li>
             </ul>
             </div>
           </div>
            <div className="btn-container w-[345px] h-[50px] ">
            <Link to={'https://github.com/rencejke/Mathalino-src'}><button>Learn More</button></Link>
            </div>
           </div>
           </div>
         </div>
       </div>
  
        </div>

      </div>
    </div>
  </section>
    
  <section className='days-code p-8'>
    <div className='max-w-[950px] w-[100%] mx-auto mt-12'>
    <h3 className='text-[30px] mb-5 '>Days I <span className='text-[#00abf0]'>Code</span></h3>
      <GitHubCalendar username='rencejke'  blockMargin={6}/>
      </div>
    </section>

    <Cta/>
    <Footer/>
    </div>
    </>
  )
}

export default ProjectsPage