import { useState } from 'react';
import Logo from '../../Components/Logo/Logo';
import { motion, MotionConfig } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './index.css';
import LoginSignNavBar from '../../Components/LoginSignNavBar/LoginSignNavBar';
const Login2 = () => {
  let [User, setUser] = useState(['Brand', 'Brand'])

  let [Page,setPage]=useState(true)

  const navigate = useNavigate();


  const NavigateClick = () => {
    if (Page) {
        navigate('/Login');
    } else {
        navigate(`/SignUp/${User[1]}`);
    }
}

  console.log("user us "+User);

  return (
    <div className=' h-screen items-center sm:h-[550px] lg:h-screen flex text-10px bgSignUp text-[12px] '>


      
      {/* Left hand Side  */}

{/* Middle Container */}
<div className="w-8/12 mx-auto BarColor my-10 h-[350px] xs:h-[400px] sm:h-[500px]   rounded-3xl  overflow-hidden  relative ">

<div className="flex  justify-between items-center  mx-10   pt-2">
<div className="" >
       <img className="bg-transparent w-8  sm:w-12 lg:w-20  " src="/Logo/Logo.jpg" alt="" />
       </div>

<img  className="w-[240px] "  src="/Logo/LogoText.jpg" alt="" />

<h1 className=" hidden sm:flex poppins-semibold border-2 text-center text-white rounded-xl bg-black    py-[4px] text-[7px]  sm:text-[10px] px-2   " >Home</h1>

</div>
{/* <h1 className="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-red-500">t</h1> */}
      { <div className='   flex  items-center      '>
         
        

      
{/* Inner Container  */}
{Page? <img className= "hidden md:flex w-96 absolute bottom-0 -right-[100px] z-20 " src="/Images/undraw_influencer.svg" alt="" /> :
<img className="hidden lg:block  w-[600px] absolute -left-[160px] bottom-0  z-20 " src="/Images/undraw_2.svg" alt="" />}
<motion.img layout  initial={{y:100}} animate={{y:0}} className={` absolute  hidden md:block  -bottom-28  z-20 ${Page?" -left-[250px] lg:-left-[200px] ":"-right-[250px] -z-10"}`} src="/Images/Mask_Group.png" alt="" />
      <div className={`  w-full flex   ${Page?"justify-center":"justify-center sm:justify-end"}`} >
      <div className=" w-[500px]   ">

{/* <img className=" absolute  right-0 top-0" src="/Images/Mask.png" alt="" /> */}
<p className='text-center  poppins-semibold mt-1 text-[12px] sm:text-xl '>{Page?'Login':'Sign Up'}</p>

<div className="w-full  ">
  <div className="sm:p-4">

  <LoginSignNavBar User={User} setUser={setUser} />
    <div className='w-8/12 mx-auto'>


      
      <div className='my-2'>
        <p className='poppins-light text-[9px] sm:text-[12px]'>Email</p>
        <input type="email" name="" className='inputField  rounded-md' id={`email`} />

      </div>
      <div className='my-2'>
        <p className='poppins-light  text-[8px] sm:text-[12px]'>Password</p>
        <input type="password" name="" className='inputField rounded-md' id={`password`} />

      </div>
      <p className=' poppins-extralight text-[8px] sm:text-[12px]'>Use 8 or more characters with a mix of letters, numbers & symbols</p>

      <button 
      onClick={NavigateClick}
      className='Button poppins-regular rounded-md  py-[5px] md:py-[6px] text-[12px] px-5 cursor-pointer'>{Page?"Login":"Sign Up"}</button>

      <p className='poppins-light mt-1 sm:my-1 text-[8px] sm:text-[12px]' >{Page?"Create an account?":"Already have an account?"} <a
       className='underline cursor-pointer text-[8px] sm:text-[12px]' onClick={() => {
        
            setPage((pre) => !pre)
          }} >{Page?"Sign Up":"Login"} </a>  </p>
     {Page? <a href='#' className='poppins-light  underline cursor-pointer   text-[8px] sm:text-[12px]'>Forget Password</a>:''}
    </div>



  </div>
</div>

</div>
      </div>



      </div>

      }
</div>
  


    

    </div>
  )
}

export default Login2