import { BrowserRouter } from 'react-router-dom';
import BrandRoutes from './Layout/Brand/BrandRoutes'
import SplashScreen from './Layout/SplashScreen';
import {useRef,useState,useEffect} from 'react';
import  './index.css';
import InfluRoutes from './Layout/Influencer/InfluencerRoutes';
import InfluencerRoutes from './Layout/Influencer/InfluencerRoutes';

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
  <div className=" scrol1">
<BrowserRouter>

{/* {AnimationState ?   <SplashScreen/>:<BrandRoutes/>} */}

{1?<InfluencerRoutes/> :<BrandRoutes/>}
{/* <InfluencerDashBoard/> */}



{/* <Login/> */}
</BrowserRouter>

</div>

  </>
  
  )
}

export default App