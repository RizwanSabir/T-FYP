import { useState } from 'react';
import Logo from '../../Components/Logo/Logo';
import { motion, MotionConfig } from 'framer-motion';
import './index.css';
import LoginSignNavBar from '../../Components/LoginSignNavBar/LoginSignNavBar';
const Login = () => {
  let [User, setUser] = useState(['Brand', 'SignUpBrandPage1'])
  const [IsSignUp, setIsSignUp] = useState(false)



  return (
    <div className='w-screen h-screen flex '>



      <motion.div
      layoutId='Logo'
      
      className='absolute top-1 z-20'>
        <Logo />
      </motion.div>
      {/* Left hand Side  */}


      {!IsSignUp && <div className='w-8/12 border-2 border-green-300  flex flex-col  justify-center '>


        <p className='text-center text-2xl poppins-semibold '>Login</p>
        <div className="w-full  ">
          <div className="p-4">


            <div className='w-8/12 mx-auto'>


              <LoginSignNavBar User={User} setUser={setUser} />
              <div className='my-2'>
                <p className='poppins-light '>Email</p>
                <input type="email" name="" className='inputField rounded-md' id="" />

              </div>
              <div className='my-2'>
                <p className='poppins-light '>Password</p>
                <input type="password" name="" className='inputField rounded-md' id="" />

              </div>
              <p className='text-sm poppins-extralight'>Use 8 or more characters with a mix of letters, numbers & symbols</p>

              <button className='Button h-11 rounded-md px-8 my-2'>Login</button>

              <p className='poppins-light text-sm my-1'>Create an account? <a onClick={() => {
                setIsSignUp(true)
              }} href='#' className='underline'>Sign Up </a>  </p>
              <a href='#' className='poppins-light text-sm underline'>Forget Password</a>
            </div>



          </div>
        </div>
      </div>

      }

      {/* right hand Side  */}

      <motion.div

        layout

        className={` ${!IsSignUp ? 'w-6/12 backgroundPicture' : 'w-5/12 bgSignUp '}   flex flex-col items-center justify-center relative relative`}>
        <MotionConfig transition={{ duration: 0.5 }}>

         


        <>   <motion.div layout="position"
            layoutId='1'

            className='w-[300px] h-[400px] border-2  glassDiv  text-white  poppins-medium text-2xl rounded-3xl' >
           <p className='p-5'>Very good <br />
              works are <br />
              waiting for
              you <br /> {!IsSignUp ? 'Login Now !!!' : "Sign Up Now!!!"} </p>
        
          </motion.div>
           <motion.img



              className=' w-[600px]  absolute ' src="Images/WomenLogin.png" alt="" />
</>

          


        </MotionConfig>






      </motion.div>


      {/* Sign Up form  */}
      {IsSignUp && <motion.div




        layoutId='1' className=' bg-white w-7/12' >

        <div className='    flex flex-col  justify-center '>


          <p className='text-center text-2xl poppins-semibold mt-4'>Sign Up</p>
          <div className="w-full  ">
            <div className="p-4">


              <div className='w-8/12 mx-auto'>


                <LoginSignNavBar User={User} setUser={setUser} />
                <div className='my-2'>
                  <p className='poppins-light '>Email</p>
                  <input type="email" name="" className='inputField rounded-md' id="" />

                </div>
                <div className='my-2'>
                  <p className='poppins-light '>Password</p>
                  <input type="password" name="" className='inputField rounded-md' id="" />

                </div>
                <p className='text-sm poppins-extralight'>Use 8 or more characters with a mix of letters, numbers & symbols</p>

                <button className='Button h-11 rounded-md px-8 my-2'>Sign Up</button>

                <p className='poppins-light text-sm my-1'>Already have an account? <a href='#' onClick={() => {
                   setIsSignUp(false)
                }} className='underline'>Login </a>  </p>
                <a href='#' className='poppins-light text-sm underline'>Forget Password</a>
              </div>



            </div>
          </div>
        </div>



      </motion.div>}

    </div>
  )
}

export default Login