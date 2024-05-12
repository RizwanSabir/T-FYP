
import './SignUpBrand.css'

const SignUpBrand
  = () => {
    // border-2 border-red-500
    return (
      <>
        <img src="LogoSite.svg" className="absolute top-1 left-0" alt="Logo" />
        <div className="w-[700px] BorderColor2 mt-5 BoxShadow  mx-auto  rounded-3xl overflow-hidden    flex flex-1 flex-row mt-2">

          <div className="w-full p-4">
            <img src="BrandSignUp.png" className="mt-14" alt="" />
            <h4 className="font-semibold text-3xl  TextColor">Grow your business <br /> with us</h4>
          </div>

          <div className="w-full  ">
            <div className="p-4">
              <h3 className="poppins-regular text-2xl mt-3">Tell us about Yourself</h3>
              <div>
                <InputField />
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

      <h5 className="poppins-regular  text-xs mt-3  pb-1">Which describes you  position?</h5>
      <select className=" w-full p-1 poppins-light InputBorder  w-full   rounded-xl">
        <option className='poppins-light' value="option1">Sales</option>
        <option className='poppins-light' value="option2">Manager</option>
        <option className='poppins-light' value="option3">Other</option>
      </select>

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

      <h5 className="poppins-regular  text-xs mt-5">Which Platform do you need?</h5>
      <div className='flex flex-row  mt-3   gap-2'>
        <RoundedBox value={<img src="Tiktok.svg" alt="" />} />
        <RoundedBox value={<img src="Instagram.svg" alt="" />} />

      </div>

      <div className=" mt-4  flex flex-row  justify-center bgColor p-2 rounded-3xl ">
        <button className="  poppins-regular "> Next </button>
      </div>

      <div>

        <div className='flex flex-row justify-between  mt-3'>
          <p className='poppins-light text-xs'>Creating Account </p>
          <p className='poppins-light text-xs'> 80% </p>
        </div>

        <div className='bgColor w-full h-2 rounded-xl mt-3 flex flex-row items-center'>
          <div className='bg-white w-[80%] h-1  ml-1 rounded-xl'>
          </div>
        </div>

      </div>





    </>

  )
}







export default SignUpBrand




const RoundedBox = ({ value }) => {
  return (
    <div className='InputBorder w-20 flex flex-row justify-center py-2 rounded-xl poppins-light'>
      <p>{value}</p>
    </div>

  )
}

