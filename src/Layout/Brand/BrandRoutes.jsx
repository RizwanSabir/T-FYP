import { Router, Routes,Route } from 'react-router-dom';
import BrandDashBoard from './BrandDashBoard';
import ErrorPage from './DashBoard/Pages/ErrorPage/ErrorPage';
const BrandRoutes = () => {
  return (
    <>
    
    <Routes>

        <Route index path="/*"  element={<BrandDashBoard />} />
        <Route  path="/Error" element={<ErrorPage />} />
      
        
 
    </Routes>
    
    
    
    </>
  )
}

export default BrandRoutes