import { useState } from 'react'
import MainBar from '../../Components/DashBoard/MainBar.jsx/MainBar'
import RightSideBar from '../../Components/DashBoard/RightSideBar/RightSideBar'
import { motion, MotionConfig } from 'framer-motion';
import SearchIcon from '../../Components/Svg/SearchIcon';
import HomeIcon from '../../Components/Svg/HomeIcon';
import CompaignIcon from '../../Components/Svg/CompaignIcon';
import SavedIcon from '../../Components/Svg/SavedIcon';
import GroupIcon from '../../Components/Svg/Group';
import Message from '../../Components/Svg/Messages';
import HelpIcon from '../../Components/Svg/Help';
import LeftSideBar from '../../Components/DashBoard/LeftSideBar.jsx/LeftSideBar';
import HiddenSideBar from '../../Components/DashBoard/HiddenSideBar';
import TopHeader from '../../Components/DashBoard/TopHeader';

const BrandDashBoard = () => {

  const [SideBar, setSideBar] = useState(false)


  
  return (
    <>
      <div className='flex      h-screen' >

        <LeftSideBar />

        <div className='w-full  '>

          <HiddenSideBar SideBar={SideBar} />   {/* Side Bar that is visible on Click */}
         
          <TopHeader SideBar={SideBar} setSideBar={setSideBar}/>   {/* DashBoard Top Heading i.e Dashboard with __-__-__ hanbuger sign  */}

          <div className='grid grid-cols-12  w-full h-full'>     {/* Dashboard  Top Header Bottom Two Components  */}
            <div className=' col-span-12   lg:col-span-9 '><MainBar /></div>
            <div className=' col-span-3 mx-5 hidden lg:block'><RightSideBar /></div>
          </div>

        </div>

      </div>


    </>
  )
}

export default BrandDashBoard