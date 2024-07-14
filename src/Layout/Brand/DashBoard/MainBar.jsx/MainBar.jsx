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
import Media from '../Pages/Home/Media';
import OverView from '../Pages/Home/OverView';

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
          <Route path="Audience" element={<Audience />} />
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

const Overview = () => {
  return <div>I am in Overview</div>;
};

const Engagement = () => {
  return <div>I am in Engagement</div>;
};

const Audience = () => {
  return <div>I am in Audience</div>;
};

export default MainBar;