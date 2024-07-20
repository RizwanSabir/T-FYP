

import { useContext, useLayoutEffect, useEffect, useState } from 'react';
import { MyContext } from '../../../../../Hooks/Context/ShowInboxContext';
import { AnimatePresence, motion } from 'framer-motion';
const Search = () => {

  const { setShowInbox } = useContext(MyContext);


  const [IsFilterOpen, setIsFilterOpen] = useState(0)


  useLayoutEffect(() => {

    setShowInbox(0)

  })

  useEffect(() => {


    return () => {
      setShowInbox(1)
    }
  })



  return (
    <>

      {/* Side bar Filter  .That will open when IsFilterOpen is Clicked */}

      <AnimatePresence>
        {IsFilterOpen && (
          <div className="bg-neutral-300/65 z-20 h-full w-full absolute top-0 right-0 ">
            <motion.div
              initial={{ x: 700 }}
              animate={{ x: 0 }}
              exit={{ x: 700 }}
              transition={{ duration: 0.4 }}
              className="bg-white h-full  w-[300px] sm:w-[600px] absolute top-0 right-0  "
            >
              <div className="mx-8 my-5  ">
                <div className="hover:cursor-pointer" onClick={() => setIsFilterOpen(false)}>
                  <img src="Svg/Close.svg" alt="" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* Container or margin from side */}
      <div className="pt-10 ">
        <div className="h-[20px]  w-full  bg-red-500  xs:bg-green-500 sm:bg-blue-600 md:bg-slate-700 lg:bg-red-600"></div>

        <p className="lato-bold md:text-xl  text-center">
          Search from the Worlds <span style={{ color: "#FB773F" }} className="defaultTextColor">Largest Database </span>of Influencer
        </p>

        {/* options Influencer size age  */}

        <div className="flex justify-center mt-7 ">
          <div className="flex">

            <div className=" border-[1px] border-black/70  md:w-[100px] md:h-[50px] absolute rounded-2xl xs:flex justify-center items-center hidden xs:block">
              <p className="rouge-script-regular p-1  text-2xl">Instagram
              </p>
            </div>

            {/* Search bar  */}

            <input
              type="text"
              className=" w-[250px]  xs:w-[350px]  sm:w-[400px] pl-2 xs:pl-[90px] rounded-xl   md:h-[50px] md:w-[700px] md:pl-[110px] outline-0 "
              placeholder="Search  anything here ... "
            />

            {/* Filter button . Upon click the side menu of IsFilerState will open  */}
            <div className=" border-[2px] border-primary md:w-[100px] md:h-[50px] rounded-2xl flex justify-center items-center ml-1 xs:ml-5 md:ml-5 hover:cursor-pointer hover:bg-primary hover:text-white hover:border-white" onClick={() => {
              setIsFilterOpen(1)
            }} >
              <p className="lato-light p-2 text-sm  flex justify-between ">
                <p className="hidden xs:block">More   </p>
                <p className="ml-1">Filters</p>
              </p>
            </div>

          </div>

        </div>


        {/* influencer Profile will be show below in form of list  */}

        <div className="">
          {/* wrapper div orr background of list  */}
          <div className="bg-white OverViewBox1 grid grid-cols-12 w-[900px] p-2 border-2 mx-auto mt-10 rounded-xl">

            {/* Left side of profile  */}
            <div className="flex flex-col  col-span-4 items-center mt-3">
              <div className="flex size-[150px] items-center">
                <img className=" aspect-square Avatar" src="Media/p1.jpg" alt="" />
              </div>
              {/* Name of Influencer  */}
              <p className="poppins-bold mt-4" >Sana Sabir</p>
              {/* Id of Influencer  */}
              <p className="poppins-light">@sanasabir321</p>
              {/* Influencer Actions  */}
       
              {/* End of left side  */}
            </div>

            {/* Middle of profile  */}
            <div className="   col-span-5 flex flex-col  mt-10 mr-4">
              

              <div className="flex items-center justify-between mr-2">


                <div className="lato-regular">
                  <p><span className="poppins-bold">93.3k</span><span className="ml-1 text-sm">Followers</span></p>
                  <div className="flex items-center  mt-2">
                    {/* bottom side  */}
                    <img className="h-[15px] mr-2" src="Svg/Instagram.svg" alt="" />
                    <p className="lato-light text-sm">4.9K</p>
                  </div>
                </div>
                <div className="lato-regular " >
                  <p><span className="poppins-bold">34%</span><span className="ml-1 text-sm">Engagement Rate</span></p>
                  <div className=" flex justify-center gap-x-3 mt-2">
                    <p className=" flex items-center gap-x-1 marker:">
                      <img src="/Svg/Heart.svg" className="Avatar size-[15px]" alt="" />
                      <p className="text-sm lato-light"> 12.2K</p>
                    </p>
                    <p className="flex items-center  gap-x-1">
                      <img src="/Svg/Comment.svg" className="Avatar size-[15px]" alt="" />
                      <p className="text-sm lato-light">  23K</p>
                    </p>



                  </div>
                  
                </div>
                
              </div>

              {/* Bio Heading in Middle section  */}
              <div className="poppins-regular text-base mt-5 ">
                <p>Embrace the Ashin Aura :</p>
                <p>Where Tradition Meets Trend.</p>
              </div>

              <div className="flex  mt-4 gap-x-2">
                <p className='SilverButtonWithText'>View Report</p>
                <p className="OrangeButtonWithText flex items-center"><p>Add to my network</p></p>
              </div>
            </div>

            {/* Right of profile  */}

            <div className="col-span-3  place-content-center">

              {/* making the grid of 4 pictures of influencer */}


              <div className="grid grid-cols-2 grid-rows-2  rounded-xl overflow-hidden ">
                <div className="flex items-center ">
                  <img className="aspect-square Avatar-v1" src="Media/p1.jpg" alt="" />
                </div>
                <div className="flex items-center ">
                  <img className="aspect-square Avatar-v1" src="Media/p6.jpg" alt="" />
                </div>
                <div className="flex items-center ">
                  <img className="aspect-square Avatar-v1" src="Media/p7.jpg" alt="" />
                </div>
                <div className="flex items-center ">
                  <img className="aspect-square Avatar-v1" src="Media/p9.jpg" alt="" />
                </div>


              </div>
              {/* End of the Grid of influncer pictures */}
            </div>

            {/* End Wrapper div */}
          </div>

          {/* end of influencer List */}
        </div>




      </div>
    </>
  )
}

export default Search