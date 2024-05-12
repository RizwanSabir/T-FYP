import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import SignUpBrand2 from "./Components/Brand/SignUpBrand2"
import SignUpBrandPage1 from "./Components/Brand/SignUpBrandPage1"
import VerifyEmail from "./Components/VerifyEmail"
import ForgetPassword from "./Components/ForgetPassword"
import SignUpInfluencerPage1 from "./Components/Influencer/SignUpinfluencerPage1"
import VerifyInfluencerAccount from "./Components/Influencer/VerifyInfluencerAccount"


const App = () => {
  return (
  <>
  <Routes>
    <Route path="/Login" element={<Login/>} />
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/SignUpBrand" element={<SignUpBrand2/>}/>
    <Route path="/SignUpBrandPage1" element={<SignUpBrandPage1/>}/>
    <Route path="/VerifyEmail" element={<VerifyEmail/>}/>
    <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
    <Route path="/SignUpInfluencerPage1" element={<SignUpInfluencerPage1/>}/>
    <Route path="/" element={<VerifyInfluencerAccount/>}/>




  </Routes>
  </>
  )
}

export default App