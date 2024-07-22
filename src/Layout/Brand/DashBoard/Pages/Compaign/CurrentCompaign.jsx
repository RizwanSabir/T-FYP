import { useContext, useLayoutEffect, useEffect, } from 'react';
import { MyContext } from '../../../../../Hooks/Context/ShowInboxContext';
import {Outlet, useNavigate} from 'react-router-dom';
import {useState} from 'react'; 
import {motion} from 'framer-motion';
const CurrentCompaign = () => {

    const { setShowInbox } = useContext(MyContext);

  useLayoutEffect(() => {
    setShowInbox(0)
  })

  useEffect(() => {
    return () => {
      setShowInbox(1)
    }
  })

  let pages=[['Compaign',''],['Workflow','Workflow'],['Content','Content'],['Payment','Payment']]

  return (
    <>
     
     <div className="w-[500px] mx-auto pt-5">
        <p className="poppins-semibold">
            Clothing Dev'23
        </p>
        <div className="navBgColor  xs:flex rounded-full xs:py-2 xs:px-2 sm:flex-nowrap md:px-10 lg:gap-x-4 mt-5">
          <NavBarItems items={pages}   id="Comapign" />
        </div>
     </div>

   <div className="mt-5">
   <Outlet/>
   </div>
     
    </>
  )
}



const NavBarItems = ({ items }) => {
    const [isHover, setIsHover] = useState(-1);
    const [isActive, setIsActive] = useState(0);
    const navigate = useNavigate();
  
    return (
      <>
        {items.map((item, index) => (
          <div
            key={index}
            className="poppins-semibold relative px-1 z-50 w-full text-center  py-1 cursor-pointer text-[10px]"
            onMouseEnter={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(-1)}
            onClick={() => {
              setIsActive(index);
              navigate(`${item[1]}`);
            }}
          >
            <li className={`${isActive === index || isHover === index ? 'text-primary' : ''} list-none`}>
              <p>{item[0]}</p>
              {isActive === index && (
                <motion.div layoutId="Compaign" className="absolute w-full bg-white h-full top-0 left-0 p-2 rounded-full -z-10"></motion.div>
              )}
            </li>
          </div>
        ))}
      </>
    );
  };


export default CurrentCompaign