import React, { useEffect, useRef, useState } from 'react'
import SplashScreen from './Layout/SplashScreen'
import Login from './Layout/Login/Login'
import BrandDashBoard from './Layout/Brand/BrandDashBoard'
import InfluencerDashBoard from './Layout/Influencer/InfluencerDashBoard'
import { BrowserRouter } from 'react-router-dom';
import BrandRoutes from './Layout/Brand/BrandRoutes'

const App = () => {
 
  // const TimeOutAnimation = useRef()

  // const [AnimationState, setAnimationState] = useState(true)

  // useEffect(() => {
  //    let  TimeOutAnimation=setTimeout(() => {
  //     setAnimationState(false)
  //    },8000)
  // })


  return (
  
  <>
<BrowserRouter>

{/* {AnimationState ?   <SplashScreen/>:<Login/>} */}

<BrandRoutes/>
{/* <InfluencerDashBoard/> */}
  
{/* <Login/> */}
</BrowserRouter>



  </>
  
  )
}

export default App