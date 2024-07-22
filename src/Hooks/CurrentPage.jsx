
import {useState} from 'react';
import { MyContext } from './Context/ShowInboxContext';


const CurrentPage = ({ children }) => {
  const [CurrentPageName, setCurrentPageName] = useState("Initial State");


  
  return (
    <MyContext.Provider value={{ CurrentPageName,setCurrentPageName }}>
      {children}
    </MyContext.Provider>
  );
};

export default CurrentPage;