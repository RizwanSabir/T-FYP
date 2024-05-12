// import { useState } from "react"
// import {motion} from "framer-motion"

// const Testings= () => {

//     let [User,setUser]=useState('Brand')
//   let white
//     let users=[['Brand','SignUpBrandPage1'],['Influencer',],'User']
//     return (
//       <>
  
//         <div className="flex flex-row justify-center mt-5">
//           <div className="flex flex-row bgColor h-[45px] w-4/5 justify-around items-center rounded-3xl ">
//           {
//   users.map((user) => {
//     return (
//     //   <WhiteBackground
//     //     key={user}
//     //     layoutID=""
//     //     setUser={setUser}
//     //     name={user}
//     //     white={user === User} // Set white prop based on condition
//     //   />

//     user===User?(<motion.button   key={user} onMouseEnter={() => { setUser(user)  }} className={`poppins-regular px-2 py-1   relative z-30`}>
//     <h1 >{user}</h1>
//     <motion.div className="absolute w-full bg-white h-full top-0 left-0   rounded-xl   -z-10" layoutId="underline" ></motion.div>
            
 
//   </motion.button>):<motion.button  key={user} onMouseEnter={() => { setUser(user)  }} className={`poppins-regular px-2 py-1 rounded-xl `}>
//         <h1>{user}</h1>
     
//       </motion.button>
//     );
//   })
// }

  
          
           
//           </div>
//         </div>


//         <div className=" mt-4  flex flex-row  justify-center border-1 BorderColor p-1 rounded-3xl h-8">

//         <img src="Gmail.svg" alt="" />
//         <button className="text-center ml-2 poppins-regular "> Continue with google </button>


//       </div>

//       </>
//     )
//   }
  
//   const WhiteBackground = ({ name, white ,setUser ,layoutID}) => {
//     return (
//       <motion.button layoutId={layoutID} onMouseEnter={() => { setUser(name)  }} className={`poppins-regular px-2 py-1 rounded-xl ${white ? 'bg-white' : ''}`}>
//         <h1>{name}</h1>
//       </motion.button>
//     );
//   };


  
  
//   export default Testings
