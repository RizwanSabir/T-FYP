import { Routes,Route } from 'react-router-dom';
import  './Index.css';
import Home from '../Pages/Home/Home';
import Search from '../Pages/Search/Search';
import Compaign from '../Pages/Compaign/Compaign';


import Saved from '../Pages/Saved/Saved';
import Group from '../Pages/Group/Group';
import Message from '../Pages/Message/Message';
import Info from '../Pages/Info/Info';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Spendings from '../Pages/Home/Spendings';
import Influencers from '../Pages/Home/Influencers';
import OverView from '../Pages/Home/OverView';
import Engagement from '../Pages/Home/Engagement';
import EngagementGrowth from '../Pages/Home/EngagementGrowth';
import Media from '../Pages/Home/Media';

const MainBar = () => {
  return (
    <div className='w-full bg-gray-200/90 h-full'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Dashboard/*" element={<Home />}>
          <Route index  element={< OverView/>} />
          <Route path="OverView"  element={< OverView/>} />
          <Route path="Engagement" element={<Engagement />} />
          <Route path="Spendings" element={<Spendings />} />
          <Route path="Audience" element={<EngagementGrowth />} />
          <Route path="Influencers" element={<Influencers />} />
          <Route path="Media" element={<Media />} />
        </Route>
        <Route path="/Search" element={<Search />} />
        <Route path="/Compaign" element={< Compaign/>} />
        <Route path="/Saved" element={<Saved />} />
        <Route path="/Group" element={<Group />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Info" element={<Info />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};



export default MainBar;