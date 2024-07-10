
import { motion } from "framer-motion"

const LoginSignNavBar = ({User,setUser}) => {

 
  let users = [['Brand','SignUpBrandPage1'], ['Influencer','SignUpinfluencerPage1'], ['User','SignUpUserPage1']]
  
  return (
    <>

      <div className="flex flex-row justify-center mt-5">
        <div className="flex flex-row bgColor h-[45px] w-full justify-around items-center rounded-3xl ">
          {
            users.map((user) => {
              return (


                user[0] === User[0] ? (<WhiteBackground  key={user} user={user} setUser={setUser}>

                  <motion.div className="absolute w-full bg-white h-full top-0 left-0   rounded-xl   -z-10" layoutId="underline" ></motion.div>
                </WhiteBackground>


                ) : <WhiteBackground  key={user} user={user} setUser={setUser} />

              );
            })
          }




        </div>
      </div>


      <div className=" my-2  flex flex-row  justify-center  rounded-full  inputField hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2">

        <img src="Svg/Gmail.svg" alt="" />
        <button className="text-center ml-2 poppins-regular  "> Continue with google </button>


      </div>

    </>
  )
}

const WhiteBackground = ({ user, setUser, children }) => {
  return (
    <motion.button key={user} onMouseEnter={() => { setUser(user) }} className={ `poppins-regular px-2 py-1   relative z-30`}>
      <h1 >{user[0]}</h1>
      {children}


    </motion.button>
  );
};




export default LoginSignNavBar
