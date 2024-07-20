import {useContext} from 'react'
import RightSideBar from '../RightSideBar/RightSideBar'
import { MyContext } from '../../../../Hooks/Context/ShowInboxContext';


const MiddlePart = ({children}) => {
    
      const { ShowInbox} = useContext(MyContext);

  return (
    <div className='grid grid-cols-12  w-full h-full'>
    {/* //Here the main Data will be displayed Like /home /Search ... */}
    <div className={` col-span-12    ${ShowInbox?'lg:col-span-9':'col-span-12'}`}>{children}</div>
    <RightSideBar />
  </div>
  )
}

export default MiddlePart