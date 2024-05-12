

const VerifyInfluencerAccount = () => {
  return (
    <>
    <img src="ArrowDesign3.svg" className="absolute top-10 left-5" alt="" />
    <div className=" mx-auto w-[500px]      mb-10 flex flex-col items-center">
      
    <img src="LogoSite.svg" className="" alt="Logo"/>
    <div className="flex flex-col justify-start w-full ml-10">
    <p className="poppins-bold">Verify Instagram Account</p>
    </div>
   

  <div className="h-[1px] bg-slate-500 w-full   mt-3"> </div>
  <div className="text-center poppins-semibold mt-3">
    <p>Leave any comment from your account  <br /> under the post below</p>
  </div>
  <div className="text-center poppins-light mt-3"> 
    <p>We want to confirm you are the owner of this <br /> account.Once we detected your comment your account will <br /> be verified.Access the post by the scan the QR code.</p>
  </div>
      <img src="QRCode.svg" className="w-full h-[200px]"  alt="" />

      <a href="https://www.instagram.com" target="_blank" className=" mt-4 block flex flex-row  w-[400px] justify-center bgColor p-2  py-3 rounded-3xl ">
  
 <div href=""  className="flex flex-row justify-between gap-2">


  <button  className="  poppins-regular  text-white"> Open Post </button>
  <img src="ShareRedirect.svg" alt="" />

 </div>


 

</a>     
<div className="bg-slate-100 w-[400px] text-center  mt-4 rounded-lg  ">

  <p className="p-3">Verification Status</p>
  <div className=" bg-blue-200  p-3 w-[70%] mx-auto  flex flex-row justify-center items-center gap-2 rounded-xl  mb-3 ">
    <img className="w-5 h-5" src="Loading.svg" alt="" />
    <p>Searching for Comment</p>
  </div>
 </div>

    </div>
    
    </>
  )
}

export default VerifyInfluencerAccount