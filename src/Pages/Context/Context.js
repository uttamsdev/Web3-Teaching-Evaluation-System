import { createContext, useEffect, useState } from "react";

export const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(null);
    const signIn = localStorage.getItem("role");

    
  
  
  
    useEffect(() => {
    //   checkIfWalletConnected();
    //   getAllCertificates();
    //   getEditedChain();
    //   getIsAdminData();
    }, []);
  
  
    return (
      <FeedbackContext.Provider value={{ isSignedIn, setIsSignedIn, signIn}}>
        {children}
      </FeedbackContext.Provider>
    )
}