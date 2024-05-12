import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import SignUpBrand2 from "./Components/Brand/SignUpBrand2"
import SignUpBrandPage1 from "./Components/Brand/SignUpBrandPage1"
import VerifyEmail from "./Components/VerifyEmail"
import ForgetPassword from "./Components/ForgetPassword"
import SignUpInfluencerPage1 from "./Components/Influencer/SignUpinfluencerPage1"
import VerifyInfluencerAccount from "./Components/Influencer/VerifyInfluencerAccount"
// import Testings from "./Components/Testings"
import BrandDashboard from "./Components/Brand/BrandDashboard"
import InfluencerDashboard from "./Components/Influencer/InfluencerDashboard"
import UserDashboard from "./Components/User/UserDashboard"


const App = () => {
  return (
  <>
  <Routes>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/"  element={<Login/>} />
    <Route  element={<Login/>} />
    <Route path="/SignUpBrand" element={<SignUpBrand2/>}/>
    <Route path="/SignUpBrandPage1" element={<SignUpBrandPage1/>}/>
    <Route path="/VerifyEmail" element={<VerifyEmail/>}/>
    <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
    <Route path="/SignUpInfluencerPage1" element={<SignUpInfluencerPage1/>}/>
    <Route path="/VerifyInfluencerAccount" element={<VerifyInfluencerAccount/>}/>
    <Route path="/InfluencerDashboard" element={<InfluencerDashboard/>}/>
    <Route path="/UserDashboard" element={<UserDashboard/>}/>
    {/* <Route path="/" element={<Testings/>}/> */}
    <Route path="/BrandDashboard" element={<BrandDashboard/>}/>




  </Routes>
  </>
  )
}

export default App