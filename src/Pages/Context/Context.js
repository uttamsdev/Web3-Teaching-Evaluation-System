import { createContext, useEffect, useState } from "react";
import swal from "sweetalert";
const { ethereum } = window;

export const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(null);
  const signIn = localStorage.getItem("role");
  const  [createUsrData, setCreateUserData] = useState({username: '', password: '', role: ''});
  const  [userLoginData, setUserLoginData] = useState({username: '', password: ''});

      //getting form input data
      const createAccountHandleChange = (e, name) => {
        setCreateUserData((prevState) => ({...prevState, [name]: e.target.value}));
    }

    const loginAccountHandleChange = (e, name) => {
      setUserLoginData((prevState) => ({...prevState, [name]: e.target.value}));
  }


    const checkIfWalletIsConnected = async() => {
      try {
          if(!ethereum)  return swal("MetaMask Not Installed!", "Please install MetaMask to use this application.!", "error");
          const accounts = await ethereum.request({method: 'eth_accounts'});

          if(accounts.length){ //if accounted connected
          setCurrentAccount(accounts[0]);
          // getAllTransactions();
      } else {
          console.log("No account found");
      }
      console.log(accounts);
      } catch (error) {
          console.log(error);
          throw new Error("No ethereum object.");
      }
    }

    //connect wallet
    const connectWallet = async() => {
      try {
          if(!ethereum)  return alert("Please install MetaMak.");
          const accounts = await ethereum.request({method: 'eth_requestAccounts'});
          setCurrentAccount(accounts[0]);
      } catch (error) {
          console.log(error);
          throw new Error("No ethereum object.");
      }
  }


    
  
  
  
    useEffect(() => {
      checkIfWalletIsConnected();
      // console.log(formData); 
    }, []);
  
  
    return (
      <FeedbackContext.Provider value={{ isSignedIn, setIsSignedIn, signIn, currentAccount, connectWallet, createAccountHandleChange, createUsrData, loginAccountHandleChange, userLoginData}}>
        {children}
      </FeedbackContext.Provider>
    )
}