import { useState } from 'react'
import MainBar from './DashBoard/MainBar.jsx/MainBar'
import RightSideBar from './DashBoard/RightSideBar/RightSideBar'
import LeftSideBar from './DashBoard/LeftSideBar.jsx/LeftSideBar';
import HiddenSideBar from './DashBoard/HiddenSideBar';
import TopHeader from './DashBoard/TopHeader';

const BrandDashBoard = () => {

  const [SideBar, setSideBar] = useState(false)






  return (
    <>
      <div  >

        <div className='flex      h-screen'>
          {/* Left Side Bar Showing the Home Search ... and other Icons  */}
          <LeftSideBar />

          <div className='w-full  '>
            {/* Side Bar that is visible on Click */}
            <HiddenSideBar SideBar={SideBar} setSideBar={setSideBar} />

            {/* DashBoard Top Heading i.e Dashboard with __-__-__ hanbuger sign  */
            /* As Hamburger Sign is on Header and we want to toggle it , that's is why we 
          passed the state varibles to Hidden and top header */}
            <TopHeader SideBar={SideBar} setSideBar={setSideBar} />

            {/* Dashboard  Top Header Bottom Two Components  */}
            {/* Not passing any State because they are using the Location Hooks for the Path  */}
            <div className='grid grid-cols-12  w-full h-full'>
              <div className=' col-span-12   lg:col-span-9 '><MainBar /></div>
              <div className=' col-span-3 mx-5 hidden lg:block'><RightSideBar /></div>
            </div>

          </div>
        </div>


      </div>


    </>
  )
}

export default BrandDashBoard