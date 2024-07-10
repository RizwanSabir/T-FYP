
import HomeIcon from '../../../Components/Svg/HomeIcon';
import CompaignIcon from '../../../Components/Svg/CompaignIcon';
import SavedIcon from '../../../Components/Svg/SavedIcon';
import GroupIcon from '../../../Components/Svg/Group';
import Message from '../../../Components/Svg/Messages';
import HelpIcon from '../../../Components/Svg/Help';
import { motion, } from 'framer-motion';
import SearchIcon from '../../../Components/Svg/SearchIcon';
const HiddenSideBar = ({SideBar}) => {
  return (
   <>
   
   
   <motion.div
            style={{ x: -500 }}
            animate={SideBar ? { x: 0 } : { x: -500 }}
            transition={{ type: 'tween' }}
            className='w-[300px] h-screen    bg-black z-10 absolute text-white'>

            <ul className='flex flex-col  items-center h-full justify-center'>
              <div className='flex gap-3 w-[150px]   flex items-center my-3'>
                <SearchIcon color="white" />

                <p>Search</p>
              </div>
              <div className='flex gap-3 w-[150px]   flex items-center my-3'>
                <HomeIcon color="white" />

                <p>Dashboard</p>
              </div>

              <div className='flex gap-3 w-[150px]   flex items-center my-3'>
                <CompaignIcon color="white" />

                <p>Compaign</p>
              </div>
              <div className='flex gap-3 w-[150px]   flex items-center my-3'>
                <SavedIcon color="white" />

                <p>Saved Network</p>
              </div>
              <div className='flex gap-3 w-[150px]   flex items-center my-3'>
                <GroupIcon color="white" />

                <p>Inbox</p>
              </div>
              <div className='flex gap-3 w-[150px]   flex items-center my-3'>
                <Message color="white" />

                <p>Message</p>
              </div>

              <div className='flex gap-3 w-[150px]   flex items-center my-3'>
                <HelpIcon color="white" />

                <p>Help</p>
              </div>




            </ul>

          </motion.div>
   
   </>
  )
}

export default HiddenSideBar