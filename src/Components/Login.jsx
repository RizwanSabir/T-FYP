import { useState } from "react"
import LoginSignNav from "./LoginSignNav"

const Login = () => {


  let [User, setUser] = useState(['Brand','SignUpBrandPage1'])

  return (
    <>
      <img src="LogoSite.svg" className="absolute top-1 left-0" alt="Logo" />
      <div className="w-[700px] BorderColor2 mt-5 BoxShadow  mx-auto  rounded-3xl overflow-hidden    flex flex-1 flex-row mt-2">
        <img src="Mask.png" className="absolute top-0  right-0" alt="Logo" />
        <div className="w-full p-4">
          <img src="LoginImage.jpg" className="mt-14" alt="" />
          <h4 className="font-semibold text-4xl TextColor">Grow your business <br /> with us</h4>
        </div>

        <div className="w-full  ">
          <div className="p-4">


            <h3 className="poppins-semibold text-2xl mt-3">Welcome</h3>

            <div>



              <LoginSignNav User={User} setUser={setUser} />



              <div className="flex flex-row items-center  mt-3">

                <div className="h-[1px] bg-slate-500 w-full  mr-2"> </div>
                <div className="">OR</div>
                <div className="h-[1px] bg-slate-500 w-full ml-2"> </div>
              </div>


              <div>
                <div>
                  <h1 className="poppins-regular ">Email</h1>
                  <InputField />
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-regular ">Password</h1>
                    <button className="flex flex-row items-center">
                      <img src="PasswordHide.svg" alt="" />
                      <h1>Hide</h1>
                    </button>


                  </div>

                  <InputField />
                  <h1 className="text-right underline"><a href="/ForgetPassword">Forget Passowrd</a></h1>


                  <a href={`/${User[1]}`} className=" mt-4 block flex flex-row  w-32 justify-center bgColor p-2  py-3 rounded-3xl ">


                    <button  className="  poppins-regular "> Login </button>


                  </a>

                  <h2 className="mt-3 ">Don't have an account <a className="underline" href="/SignUp">Sign up</a></h2>
                </div>
              </div>





            </div>
          </div>



        </div>

      </div>
    </>
  )
}


const LoginButton = (User) => {
   
 switch(User){
  case 'Brand': //redirect to /BrandPage
  case 'Influencer': //redirect to /BrandPage
  case 'User': //redirect to /BrandPage
 }
  
}



const InputField = () => {
  return (
    <>


      <input className="border-2  w-full p-2 rounded-xl " />
    </>

  )
}

// let users = [['Brand','SignUpBrandPage1'], ['Influencer','SignUpinfluencerPage1'], ['User','SignUpUserPage1']]
  

export default Login