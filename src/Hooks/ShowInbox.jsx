
import {useState} from 'react';
import { MyContext } from './Context/ShowInboxContext';


const ShowInbox = ({ children }) => {
  const [ShowInbox, setShowInbox] = useState("Initial State");


  
  return (
    <MyContext.Provider value={{ ShowInbox, setShowInbox }}>
      {children}
    </MyContext.Provider>
  );
};

export default ShowInbox;