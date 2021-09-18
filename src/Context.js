import React, { createContext, useEffect, useContext, useState } from 'react'
import axios from 'axios';//Axios é um cliente HTTP baseado em Promises para fazer requisições.
import keys from './config/keys'

const AppContext = createContext({
    name:"default",
    cargo:'default'
});

export const AppProvider = ({ children }) => {
    const [userObject, setUserObject] = useState({
        name:"default",
        cargo:'default'
    });
    const [cargo, setCargo]=useState();

  useEffect(() => {
    console.log(keys.serverApi)
    axios.get('http://'+keys.serverApi + "/getuser", { withCredentials: true }).then((res) => {
        console.log(res.data);
        if (res.data) {
            setUserObject(res.data);
        }
    })
  }, []);

  return (
    <AppContext.Provider value={userObject}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider.");
  }

  return context;
}

export default AppContext;
