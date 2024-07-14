import {  Routes,Route, useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import BrandDashBoard from './BrandDashBoard';
import ErrorPage from './DashBoard/Pages/ErrorPage/ErrorPage';
import Home from './DashBoard/Pages/Home/Home';
import Search from './DashBoard/Pages/Search/Search';
import Saved from './DashBoard/Pages/Saved/Saved';
import Group from './DashBoard/Pages/Group/Group';
import Message from './DashBoard/Pages/Message/Message';
import Info from './DashBoard/Pages/Info/Info';
import Compaign from './DashBoard/Pages/Compaign/Compaign';


const BrandRoutes = () => {

  


  
  return (
    <>
    <Routes>

        <Route  path="/*"  element={<BrandDashBoard />} />
        <Route  path="/Error" element={<ErrorPage />} />

   
      
        
 
    </Routes>
    
    
    
    </>
  )
}

export default BrandRoutes