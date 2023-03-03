import { createContext, useEffect, useState } from "react";

export const context = createContext();
export const ContextProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(null);
    const signIn = localStorage.getItem("role");

    
  
  
  
    useEffect(() => {
    //   checkIfWalletConnected();
    //   getAllCertificates();
    //   getEditedChain();
    //   getIsAdminData();
    }, []);
  
  
    return (
      <context.Provider value={{ isSignedIn, setIsSignedIn, signIn}}>
        {children}
      </context.Provider>
    )
}