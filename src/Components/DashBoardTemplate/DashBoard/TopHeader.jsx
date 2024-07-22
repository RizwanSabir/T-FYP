import { useLayoutEffect, useState } from 'react'
import { motion, MotionConfig } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TopHeader = ({ SideBar, setSideBar,Pages,activeButton }) => {

//  activeButton give the active location of the page 

  //Removing the / from the Pages so that i can display the Correct Name
  let PageName = Pages.map(path => path.substring(1));

  // If side bar is open Change the color 
  let HandBurger = `h-1 rounded-full  w-[30px] my-1  ${SideBar ? 'bg-white' : 'bg-black'}`





  return (
    <>
      <div className='w-full h-[60px] bg-white flex items-center   '>     {/* DashBoard Top Heading  */}
        <div className='poppins-semibold mx-10 flex justify-between w-full rounded-full items-center'>
          <div className='flex  items-center '>

            <MotionConfig transition={{ duration: 0.5 }}>

              <div
                className={` md:hidden mr-4 z-20 ${SideBar ? 'text-black' : 'text-white'}`}
                onClick={() => {
                  setSideBar(!SideBar)
                }}>
                {/* Hamburger Three lines and their animtion  */}
                <motion.div style={{ transformOrigin: "left center" }} animate={SideBar ? { rotate: 45, transformOrigin: "left center", x: "-2px" } : ""} className={HandBurger}  ></motion.div>
                <motion.div animate={SideBar ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }} className={HandBurger}  ></motion.div>
                <motion.div style={{ transformOrigin: "right center" }} animate={SideBar ? { rotate: -45, transformOrigin: "right center ", x: "-11px", y: -17 } : ''} className={HandBurger} ></motion.div>

              </div>

            </MotionConfig>

            {/* Header Name is Display here  */}
            <p>{PageName[activeButton]}</p>

          </div>
          {/* Profile picture and Notification Icon are Displayed Here  */}
          
          <div className='flex   justify-between w-[100px]'>
            <img src="/Svg/Notification.svg" alt="" />
            <img className='size-[45px]   Avatar' src="/Media/p1.jpg" alt="" />
          </div>

        </div>
      </div>


    </>
  )
}

export default TopHeader