

import { useContext, useLayoutEffect, useEffect } from 'react';
import { MyContext } from '../../../../../Hooks/Context/ShowInboxContext';
const Search = () => {

  const { setShowInbox } = useContext(MyContext);


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
      {/* Container or margin from side */}
      <div className="pt-10 ">
        <div className="h-[20px] bg-red-500  xs:bg-orange-500  sm:bg-green-500 md:bg-blue-500 bg-red-500 w-full "></div>

        <p className="lato-bold md:text-xl md:text-center">
          Search from the Worlds <span style={{ color: "#FB773F" }} className="defaultTextColor">Largest Database </span>of Influencer
        </p>

        {/* options Influencer size age  */}

        <div className="flex justify-center mt-7">
          <div className="flex">

            <div className=" border-[1px] border-black/70 md:w-[100px] md:h-[50px] absolute rounded-2xl flex justify-center items-center">
              <p className="rouge-script-regular md:text-2xl">Instagram
              </p>
            </div>

            <input 
  type="text" 
  className="md:h-[50px] rounded-xl md:w-[700px] md:pl-[110px]" 
  placeholder="Enter your text here"
/>

<div className=" border-[2px] border-primary md:w-[100px] md:h-[50px] rounded-2xl flex justify-center items-center md:ml-5">
              <p className="lato-light p-2 text-sm">More Filters
              </p>
            </div>

          </div>
          
        </div>


      </div>
    </>
  )
}

export default Search