
import { useState } from 'react';

import './Index.css';
import Logo from '../../../../Components/Logo/Logo';

const LeftSideBar = ({setActivePage}) => {


  let IconNames = [['HomeIcon','Dashboard'], ['Compaign','Compaign'], ['Saved','Your Network'], ['Group','Group'], ['message','Message']]



  const [isHover, setisHover] = useState(-1)

  const [activeButton, setactiveButton] = useState(0)
  return (
    <>
      <div className='  hidden  md:flex md:justify-center   md:border-r-2 '>
       
        <div className=' w-[50px]   flex flex-col items-center  justify-between  h-screen'>  {/* Setting the Width - Height of Container  */}

          <div className='flex flex-col items-center gap-5'>
          
            <div className='mt-4'>  {/* Logo Settings */}
              <Logo/>
            </div>

            <div className='  '>   {/* Contains the Buttons of Left Side Bar */}

              <div onClick={() => { setactiveButton(5);setActivePage(0) }}    onMouseEnter={() => {
           setisHover(0)
         }}
         onMouseLeave={() => {
           setisHover(-1)
         }} className={`size-[30px] rounded-xl   grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2  ${activeButton === 5 ? 'Button' : ''} relative`}>   {/* Search Icon  */}
                {isHover===0? <div className=' absolute w-[120px] right-[-135px] text-center border-[2px] rounded-lg  border-red-400 Button'>Search</div>:""}
                <img src="Svg/SearchIcon.svg" alt="" />
              </div>

              <div className=' mt-10 flex flex-col gap-4'> {/* Other's Icon  */}
                <SideBarIcons  setActivePage={setActivePage} setactiveButton={setactiveButton} names={IconNames} active={activeButton} />
              </div>

            </div>
          </div>

          <div
          onMouseEnter={() => {
            setisHover(1)
          }}
          onMouseLeave={() => {
            setisHover(-1)
          }}
          
          onClick={() => { setactiveButton(6);setActivePage(7) }} className={`size-[30px] rounded-xl    grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 mb-2 ${activeButton == 6 ? 'Button' : ''} relative`}>      {/* Info Icon  */}
           
           {isHover===1? <div className=' absolute w-[120px] right-[-135px] text-center border-[2px] rounded-lg  border-red-400 Button'>Help</div>:""}
            <img src="Svg/Help.svg" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}


const SideBarIcons = ({ names, active, setactiveButton,setActivePage }) => {


  const [isHover, setisHover] = useState(-1)
  return (<>

    {names.map((v, i) => {

      return (
        <div key={i}
         onMouseEnter={() => {
           setisHover(i)
         }}
         onMouseLeave={() => {
           setisHover(-1)
         }}
        
        onClick={() => { setactiveButton(i);setActivePage(i+2) }} className={`size-[30px] rounded-xl    grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2  ${i === active ? 'Button' : ''}   relative`}>
          {isHover===i? <div className=' absolute w-[120px] right-[-135px] text-center border-[2px] rounded-lg  border-red-400 Button'>{v[1]}</div>:""}
          <img   src={`Svg/${v[0]}.svg`} alt="" />

        </div>

      )
    })}

  </>)

}

export default LeftSideBar