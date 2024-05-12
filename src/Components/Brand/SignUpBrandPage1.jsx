




const SignUpBrandPage1
  = () => {
    // border-2 border-red-500
    return (
      <>
        <img src="LogoSite.svg" className="absolute top-1 left-0" alt="Logo" />
        <div className="h-screen flex justify-center items-center">



          <div className="w-[700px] BorderColor2 mt-5 BoxShadow  mx-auto  rounded-3xl overflow-hidden     flex items-center ">

            <div className="w-full ">
              <img src="BrandSignUp.png" className="mt-14" alt="" />
              <h4 className="font-semibold text-3xl  TextColor p-5">Grow your business <br /> with us</h4>
            </div>

            <div className="w-full  ">
              <div className="p-4">


                <h3 className="poppins-regular text-2xl mt-3">Tell us about your brand</h3>

                <div>



                  <div className="flex flex-row">
                    <div>
                      <h5 className="poppins-regular  text-xs mt-3  pb-1">Brand Name</h5>
                      <InputField />
                      <h5 className="poppins-regular  text-xs mt-3  pb-1">Website Link</h5>
                      <InputField />
                    </div>


                    <div className="ml-3 h-28 rounded-full w-28 border-2 flex items-center justify-center">
                      <p className="poppins-light text-xs">Upload Photo </p>
                      <img src="UploadButton.svg" alt="" />
                    </div>


                  </div>
                  <h5 className="poppins-regular  text-xs mt-3  pb-1"> Brand Address</h5>
                  <InputField />



                  <h5 className="poppins-regular  text-xs mt-3  pb-1">Category</h5>
                  <div className='flex flex-row  mt-3   gap-2'>
                    <RoundedBox value="Fashion" />
                    <RoundedBox value="Travel" />
                    <RoundedBox value="Media" />
                    <RoundedBox value="Other" />


                  </div>

                  <a href="/SignUpBrand" className=" mt-4  flex flex-row  justify-center bgColor p-2 rounded-3xl ">


                    <button className="  poppins-regular "> Next </button>


                  </a>


                  <div className='flex flex-row justify-between  mt-3'>
                    <p className='poppins-light text-xs'>Creating Account </p>
                    <p className='poppins-light text-xs'> 30% </p>
                  </div>

                  <div className='bgColor w-full h-2 rounded-xl mt-3 flex flex-row items-center'>
                    <div className='bg-white w-[30%] h-1  ml-1 rounded-xl'>
                    </div>
                  </div>
                </div>



              </div>

            </div>
          </div>
        </div>
      </>
    )
  }


const InputField = () => {
  return (
    <>
      <input className="w-full p-1 poppins-light InputBorder  w-full   rounded-xl" />

    </>

  )
}







export default SignUpBrandPage1




const RoundedBox = ({ value }) => {
  return (
    <div className='InputBorder w-20 flex flex-row justify-center py-2 rounded-xl poppins-light'>
      <p>{value}</p>
    </div>

  )

}



