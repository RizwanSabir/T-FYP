import {useContext,useLayoutEffect,useEffect} from 'react'
import { MyContext } from '../../../../../Hooks/Context/ShowInboxContext';
import { DropdownSvg } from '../../../../../Components/Svg/DropDownSvg';

const Group = () => {

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
    
    
    
    </>
  )
}

export default Group