import { useState } from 'react';
import Logo from '../../Components/Logo/Logo';
import { motion, MotionConfig } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './index.css';
import LoginSignNavBar from '../../Components/LoginSignNavBar/LoginSignNavBar';
import NavBar from './NavBar';
import Cookies from 'js-cookie';
const BrandSignUp = () => {
  let [User, setUser] = useState(['Brand', 'SignUpBrandPage1'])
  const [stepperIndex, setStepperIndex] = useState(0);
  let [Page, setPage] = useState(true)

  const navigate = useNavigate();


  const NavigateClick = () => {
    Page ? navigate('/Login') : navigate('/SignUp')
  }

  const nextStep = () => {
    if (stepperIndex < 3) {
      setStepperIndex(stepperIndex + 1);
    }
  };

  const prevStep = () => {
    if (stepperIndex > 0) {
      setStepperIndex(stepperIndex - 1);
    }
  };
  console.log(stepperIndex);
  return (
    <div className=' w-full h-screen items-center sm:h-[550px] lg:h-screen flex text-10px bgSignUp text-[12px] '>





      {/* Middle Container */}
      <motion.div layout className={`${stepperIndex<3?"w-10/12":'w-11/12'} mx-auto  BarColor my-10 h-[350px] xs:h-[400px] sm:h-[520px]   rounded-3xl  overflow-hidden  relative  `}>



        <div className="flex flex-col  mx-10    pt-2">

          <div className="flex justify-between mx-10 items-center" >
            <img className="bg-transparent w-8  sm:w-12 lg:w-56 " src="/Logo/LogoText.jpg" alt="" />
            <h1 className=" BlackButtonWithText-v1 hidden sm:flex poppins-semibold border-2 text-center text-white rounded-xl bg-black h-[34px]    items-center  text-[7px]  sm:text-[10px] px-4    " > Home</h1>
          </div>
          <div className="w-[700px] mt-10 mx-auto flex justify-between items-center">

          {stepperIndex>0 && stepperIndex<3?<img className="cursor-pointer" onClick={prevStep} src="/Svg/BackButton.svg"/>:""}
            
            
            <div className="flex-grow">
            {stepperIndex<3?<NavBar
        stepperIndex={stepperIndex}
        nextStep={nextStep}
        prevStep={prevStep}
        setStepperIndex={setStepperIndex}
      />:""}
            </div>
          </div>
          
          <motion.img layout  initial={{y:100}} animate={{y:0}} className={` absolute  hidden md:block  -bottom-28  z-20 ${stepperIndex==0?" -left-[250px] lg:-left-[200px] ":"-right-[150px] -bottom-2 -z-10"}`} src="/Images/Mask_Group.png" alt="" />

          <div className="w-[400px] mx-auto   flex items-center h-[300px]  ">
            <div className="">
              <div className="">
                {stepperIndex==0?<BasicDetails />:""}
                {stepperIndex==1?<CompanyDetails/>:""}
                {stepperIndex==2?<TermsAndConditions/>:""}
                {stepperIndex==3?<Welcome/>:""}
              
      
       {stepperIndex<3?<div onClick={nextStep} className="  OrangeButtonWithText-v2 flex justify-center  py-2  w-[150px]  mt-5 mx-auto  cursor-pointer ">Next </div>:""}
      
              </div>
            </div>

          </div>

           {/* Example of controlling the stepper */}
     


        </div>
      </motion.div>





    </div>
  )
}

const BasicDetails = () => {
  return (
    <>

      <h5 className="poppins-regular  text-xs mt-3  pb-1">Which describes you  position?</h5>
      <select className="  p-2 poppins-light InputBorder  w-full   rounded-xl">
        <option className='poppins-light' value="option1">Sales</option>
        <option className='poppins-light' value="option2">Manager</option>
        <option className='poppins-light' value="option3">Other</option>
      </select>
      <img className="hidden md:flex w-96 absolute -bottom-2 -right-10 z-20 " src="/Svg/SignUp1.svg" alt="" />
      <h5 className="poppins-regular  text-xs mt-5">How big is your Company?</h5>

      <div className='flex flex-row  mt-3  justify-center flex-wrap gap-2'>
        <RoundedBox value="Only Me" />
        <RoundedBox value="10-20" />
        <RoundedBox value="50-100" />
        <RoundedBox value="100-500" />
        <RoundedBox value="500+" />

      </div>

      <h5 className="poppins-regular  text-xs mt-5">How  many Influencer did you work with last month?</h5>
      <div className='flex flex-row  mt-3   gap-2'>
        <RoundedBox value="0" />
        <RoundedBox value="1-10" />
        <RoundedBox value="11-50" />
        <RoundedBox value="50+" />
      </div>
      









    </>

  )
}

const CompanyDetails = () => {
  return (
    <>
    
    <img className="hidden md:flex w-96 absolute bottom-2 -left-0 h-[300px] z-20 " src="/Svg/SignUp4.svg" alt="" />
    <div className="w-[500px] ">



<div className="flex flex-row justify-between">
  <div>
    <h5 className="poppins-regular  text-xs mt-1  pb-1">Brand Name</h5>
    <input className=" p-2 poppins-light InputBorder  w-[250px]   rounded-xl" />
    <h5 className="poppins-regular  text-xs mt-1  pb-1">Website Link</h5>
    <input className=" p-2 poppins-light InputBorder  w-[350px]   rounded-xl" />
  </div>
  


  <div className="ml-3 h-28 rounded-full w-28 border-2 flex flex-col items-center justify-center ">
    <img src="/Svg/Upload.svg" alt="" />
    <p className="poppins-light text-xs">Upload Photo </p>
  </div>


</div>
<h5 className="poppins-regular  text-xs mt-3  pb-1">Category</h5>
<div className='flex flex-row  mt-1   gap-2 '>
  <RoundedBox value="Fashion" />
  <RoundedBox value="Travel" />
  <RoundedBox value="Media" />
  <RoundedBox value="Other" />


</div>












</div>
    </>
  )
}




const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
    <img className="hidden md:flex w-96 h-[250px]  mt-10  z-20 " src="/Svg/SignUp3.svg" alt="" />
    <div className="w-[500px] flex  mt-3">
      <input type="checkbox" name="" id="" />
<h1 className="ml-2 ">I confirm that I have read and accept the terms and conditions and privacy policy.</h1>
    </div>
    </>
  );
};



const Welcome = () => {

  const setCookie = (name, value, options) => {
    return new Promise((resolve) => {
      Cookies.set(name, value, options);
      resolve(); // Resolve the promise once the cookie is set
    });
  };
  const navigate = useNavigate();

  Cookies.set('yourCookieName', 'b', { expires: 7 });
  return (
    <>
    <h1 className="text-xl poppins-semibold text-center mb-5">Account successfully created!</h1>
       <img className="hidden md:flex w-96  h-[300px] z-20 " src="/Svg/Welcome.svg" alt="" />
       <div  onClick={() => {
         const setCookieAndNavigate = async () => {
          // Set the cookie and wait for it to be set
          await setCookie('yourCookieName', 'b', { expires: 7 });
    
          // Navigate to the home page after the cookie is set
          navigate('/Dashboard/OverView');
          
        };
        setCookieAndNavigate();
       }} className="  OrangeButtonWithText-v2 flex justify-center  py-2  w-[150px]  mt-5 mx-auto  cursor-pointer ">
        <p >{"Get Started"}</p>
      </div>
    </>
  )
}

const RoundedBox = ({ value }) => {
  return (
    <div className='InputBorder w-20 flex flex-row justify-center py-2 rounded-xl poppins-light'>
      <p>{value}</p>
    </div>

  )
}




const InputField = () => {
  return (
    <>
      <input className=" p-2 poppins-light InputBorder  w-[200px]   rounded-xl" />

    </>

  )
}

export default BrandSignUp