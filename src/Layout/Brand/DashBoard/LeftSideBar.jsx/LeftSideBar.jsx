
import { useLayoutEffect, useState } from 'react';

import './Index.css';
import Logo from '../../../../Components/Logo/Logo';
import { useNavigate, useLocation } from 'react-router-dom';



const LeftSideBar = () => {

  //Set  the State of hover on button Hover 
  //Search and Info has different Hover State variable in there respective Component Class

  const [isHover, setisHover] = useState(-1)

  // let Pages = ['/Home', '/Compaign', '/Saved', '/Groups', '/Message', '/Search', '/Help']
  // It will the Active Button according to 0,1,2,3,4,5,6
  const [activeButton, setactiveButton] = useState(0)

  //Get the Current Location so that we can set the Active Button
  const location = useLocation();

  // Used for Link when user click on any Button of side Bar 
  const navigate = useNavigate();

  // Used to display the Icon and Its name on Hover and when Click address
  //name ,image,link 
  let IconNames = [['HomeIcon', 'Dashboard', '/'], ['Compaign', 'Compaign', 'Compaign'], ['Saved', 'Your Network', 'Saved'], ['Group', 'Group', 'Group'], ['message', 'Message', 'Message']]

  // It will navigate the page upon the user itself add URL orr by navigate funtion when user Click 
  // It will the Active Button according to 0,1,2,3,4,5,6

  let Pages = ['/Home', '/Compaign', '/Saved', '/Group', '/Message', '/Search', '/Info']

  // Get the Index and set the Active button accordingly 
  let IndexPage = Pages.indexOf(location.pathname)

  //Change the Layout before its paint to the User screen ....that why used the layout not the UseEffect
  useLayoutEffect(() => {
    if (location.pathname === '/') {
      setactiveButton(0)
    } else if (IndexPage == -1) {
      navigate('/Error')

    } else {
      setactiveButton(IndexPage)
    }
  }, [IndexPage])



  const HandleClick = (setactiveButtonValue, navigateValue) => {
    setactiveButton(setactiveButtonValue);
    navigate(navigateValue)
  }


  return (
    <>
      <div className='  hidden  md:flex md:justify-center   md:border-r-2 '>

        <div className=' w-[50px]   flex flex-col items-center  justify-between  h-screen'>
          {/* Setting the Width - Height of Container  */}
          <div className='flex flex-col items-center gap-5'>
            <div className='mt-4'>
              {/* Logo Settings */}
              <Logo />
            </div>
            <div className='  '>
              {/* Contains the Buttons of Left Side Bar */}
              {/* Search Icon  */}
              <div
                onClick={() => { HandleClick(5, '/Search') }}
                onMouseEnter={() => { setisHover(0) }}
                onMouseLeave={() => { setisHover(-1) }}
                className={`size-[30px] rounded-xl   grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2  ${activeButton === 5 ? 'Button' : ''} relative`}>

                {isHover === 0 ? <div className=' absolute w-[120px] right-[-135px] text-center border-[2px] rounded-lg  border-red-400 Button'>Search</div> : ""}

                <img src="Svg/SearchIcon.svg" alt="" />
              </div>

              {/* Other's Icon  */}
              <div className=' mt-10 flex flex-col gap-4'>
                {/* Giving the Value of active Button and also the Handle Function that will handle the active button state State  */}
                <SideBarIcons
                  names={IconNames}
                  active={activeButton}
                  HandleClick={HandleClick} />

              </div>
            </div>
          </div>

          {/* Info Icon  */}
          <div
            onMouseEnter={() => { setisHover(1) }}
            onMouseLeave={() => { setisHover(-1) }}
            onClick={() => { HandleClick(6, 'Info') }}
            className={`size-[30px] rounded-xl    grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 mb-2 ${activeButton == 6 ? 'Button' : ''} relative`}>

            {isHover === 1 ? <div className=' absolute w-[120px] right-[-135px] text-center border-[2px] rounded-lg  border-red-400 Button'>Help</div> : ""}

            <img src="Svg/Help.svg" alt="" />

          </div>
        </div>
      </div>
    </>
  )
}


const SideBarIcons = ({ names, active, HandleClick }) => {
  const [isHover, setisHover] = useState(-1)
  return (<>

{/* let Pages = ['/Home', '/Compaign', '/Saved', '/Group', '/Message',] */}
{/* Setting the above Icon and there hover State so that it will not cause whole sidebar Render  */}

    {names.map((v, i) => {

      return (
        
        <div key={i}
          onMouseEnter={() => { setisHover(i) }}
          onMouseLeave={() => { setisHover(-1) }}
          onClick={() => { HandleClick(i, v[2]) }} className={`size-[30px] rounded-xl    grid place-items-center bg-gray-200/90         hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2  ${i === active ? 'Button' : ''}   relative`}>

          {isHover === i ? <div className=' absolute w-[120px] right-[-135px] text-center border-[2px] rounded-lg  border-red-400 Button'>{v[1]}</div> : ""}

          <img src={`Svg/${v[0]}.svg`} alt="" />

        </div>

      )
    })}

  </>)

}

export default LeftSideBar