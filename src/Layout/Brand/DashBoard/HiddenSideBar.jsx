import React from 'react';
import HomeIcon from '../../../Components/Svg/HomeIcon';
import CompaignIcon from '../../../Components/Svg/CompaignIcon';
import SavedIcon from '../../../Components/Svg/SavedIcon';
import GroupIcon from '../../../Components/Svg/Group';
import Message from '../../../Components/Svg/Messages';
import HelpIcon from '../../../Components/Svg/Help';
import SearchIcon from '../../../Components/Svg/SearchIcon';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: <SearchIcon color="white" />, label: 'Search', navigate: "/Search" },
  { icon: <HomeIcon color="white" />, label: 'Dashboard', navigate: "/" },
  { icon: <CompaignIcon color="white" />, label: 'Compaign', navigate: "/Compaign" },
  { icon: <SavedIcon color="white" />, label: 'Saved Network', navigate: "/Saved" },
  { icon: <GroupIcon color="white" />, label: 'Group', navigate: "/Group" },
  { icon: <Message color="white" />, label: 'Message', navigate: "/Message" },
  { icon: <HelpIcon color="white" />, label: 'Help', navigate: "/Info" },
];

const renderMenuItems = (setSideBar, navigate) => {
  return menuItems.map((item, index) => (
    <div
      key={index}
      onClick={() => {
        navigate(item.navigate);
        setSideBar(false);
      }}
      className='flex gap-3 w-[150px] flex items-center my-3 cursor-pointer'>
      {item.icon}
      <p>{item.label}</p>
    </div>
  ));
};

const HiddenSideBar = ({ SideBar, setSideBar }) => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        style={{ x: -500 }}
        animate={SideBar ? { x: 0 } : { x: -500 }}
        transition={{ type: 'tween' }}
        className='w-[300px] h-screen bg-black z-10 absolute text-white'>
        <ul className='flex flex-col items-center h-full justify-center'>
          {renderMenuItems(setSideBar, navigate)}
        </ul>
      </motion.div>
    </>
  );
};

export default HiddenSideBar;
