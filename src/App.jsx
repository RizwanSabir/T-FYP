import React, { useEffect, useRef, useState } from 'react'
import SplashScreen from './Layout/SplashScreen'
import Login from './Layout/Login/Login'
import BrandDashBoard from './Layout/Brand/BrandDashBoard'
import InfluencerDashBoard from './Layout/Influencer/InfluencerDashBoard'

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

{/* {AnimationState ?   <SplashScreen/>:<Login/>} */}

<BrandDashBoard/>
{/* <InfluencerDashBoard/> */}
  
{/* <Login/> */}


  </>
  
  )
}

export default App