import { BrowserRouter } from 'react-router-dom';
import BrandRoutes from './Layout/Brand/BrandRoutes'
import SplashScreen from './Layout/SplashScreen';
import {useRef,useState,useEffect} from 'react';
import  './index.css';

const App = () => {
 
  const TimeOutAnimation = useRef()

  const [AnimationState, setAnimationState] = useState(true)

  useEffect(() => {
     let  TimeOutAnimation=setTimeout(() => {
      setAnimationState(false)
     },8000)
  })


  return (
  
  <>
  <div className=" sm:scroll-container-v1">
<BrowserRouter>

{/* {AnimationState ?   <SplashScreen/>:<BrandRoutes/>} */}

<BrandRoutes/>
{/* <InfluencerDashBoard/> */}
  
{/* <Login/> */}
</BrowserRouter>

</div>

  </>
  
  )
}

export default App