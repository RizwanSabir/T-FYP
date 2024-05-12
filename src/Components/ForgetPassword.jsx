

const ForgetPassword = () => {
  return (
    <>

      <div className=" mx-auto w-[700px] mt-10 ">
        <div className="flex flex-row">
          <img src="BackArrow.svg" className="" alt="Logo" />
          <p>Back</p>
        </div>
        <div className="  flex flex-col items-center">

          <img src="LogoSite.svg" className="" alt="Logo" />
          <img src="MaskGroup.jpg" className="absolute top-0 right-0 -z-10" alt="Logo" />
          <img src="ArrowDesign.svg" className="absolute  left-0 -z-10" alt="Logo" />
          <img src="ArrowDesign2.svg" className="absolute bottom-0 right-0 -z-10" alt="Logo" />


          <p className="spirax-regular">Influencer Harbour</p>
          <p className="poppins-bold mt-3">Forget Password?</p>
          <p className="poppins-light text-center mt-2">Enter your email address to get the <br /> password reset link.</p>
          <div className="flex flex-col items-start mt-5">
            <h1 className="poppins-regular">Email</h1>
            <InputField />
          </div>
          <a href="/" className=" mt-4 block flex w-[300px] flex-row   justify-center bgColor p-2  py-3 rounded-xl ">


            <button className="  poppins-regular "> Reset Password </button>


          </a>
        </div>

      </div>



    </>
  )
}


const InputField = () => {
  return (
    <>


      <input className="  p-2 rounded-xl  w-[300px] BorderColor" />
    </>

  )
}

export default ForgetPassword