
import { useState } from 'react';

import './Index.css';
import Logo from '../../Logo/Logo';

const LeftSideBar = () => {


  let IconNames = ['HomeIcon', 'Compaign', 'Saved', 'Group', 'message']





  const [activeButton, setactiveButton] = useState(0)
  return (
    <>
      <div className='  hidden  md:flex md:justify-center   md:border-r-2 '>
       
        <div className=' w-[50px]   flex flex-col items-center  justify-between  h-screen'>  {/* Setting the Width - Height of Container  */}

          <div className='flex flex-col items-center gap-5'>
          
            <div className='mt-4'>  {/* Logo Settings */}
              <Logo />
            </div>

            <div className='  '>   {/* Contains the Buttons of Left Side Bar */}

              <div onClick={() => { setactiveButton(5) }} className={`size-[30px] rounded-xl   grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2  ${activeButton === 5 ? 'Button' : ''}`}>   {/* Search Icon  */}
                <img src="Svg/SearchIcon.svg" alt="" />
              </div>

              <div className=' mt-10 flex flex-col gap-4'> {/* Other's Icon  */}
                <SideBarIcons setactiveButton={setactiveButton} names={IconNames} active={activeButton} />
              </div>

            </div>
          </div>

          <div onClick={() => { setactiveButton(6) }} className={`size-[30px] rounded-xl    grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 mb-2 ${activeButton == 6 ? 'Button' : ''}`}>      {/* Info Icon  */}
            <img src="Svg/Help.svg" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}


const SideBarIcons = ({ names, active, setactiveButton }) => {
  return (<>

    {names.map((v, i) => {

      return (<>
        <div key={i} onClick={() => { setactiveButton(i) }} className={`size-[30px] rounded-xl    grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2  ${i === active ? 'Button' : ''} `}>

          <img src={`Svg/${v}.svg`} alt="" />

        </div>

      </>)
    })}

  </>)

}

export default LeftSideBar