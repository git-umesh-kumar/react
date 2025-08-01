import React, { useState } from "react";
// import UserContext from "./UserContext";

// step 2

import { createContext } from "react";

const UserContext = createContext();


const UserContextProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const handleSetUser = (userData) => {
    console.log("User set:", userData); // optional logging
    setUser(userData);
  };

  return (
    <UserContext.Provider value = {{ user, setUser: handleSetUser }}>
      {children}
      
    </UserContext.Provider>
  );
}
export { UserContext };
export default UserContextProvider;