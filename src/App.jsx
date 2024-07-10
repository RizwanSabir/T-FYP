import React, { useEffect, useRef, useState } from 'react'
import SplashScreen from './Layout/SplashScreen'
import Login from './Layout/Login/Login'
import BrandDashBoard from './Layout/Brand/BrandDashBoard'

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
  
{/* <Login/> */}


  </>
  
  )
}

export default App