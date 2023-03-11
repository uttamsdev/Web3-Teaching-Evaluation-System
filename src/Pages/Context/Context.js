import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { contractABI, contractAddress } from "../../utils/Constant";
const { ethereum } = window;

export const FeedbackContext = createContext();

console.log(contractABI, contractAddress);
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const FeedbackProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const signIn = localStorage.getItem("role");
  const  [createUsrData, setCreateUserData] = useState({username: '', password: '', role: ''});
  const  [userLoginData, setUserLoginData] = useState({username: '', password: ''});
  const [addCourseData, setAddCourseData] = useState({facultyAddress: '', facultyName: '', courseCode: '', courseTitle: ''});
  const [allCourses, setAllCourses] = useState([]);
  const [facultyCourses, setFacultyCourses] = useState([]);

      //getting form input data
      const createAccountHandleChange = (e, name) => {
        setCreateUserData((prevState) => ({...prevState, [name]: e.target.value}));
    }

    const loginAccountHandleChange = (e, name) => {
      setUserLoginData((prevState) => ({...prevState, [name]: e.target.value}));
  }
    const courseAddHandleChange = (e, name) => {
      setAddCourseData((prevState) => ({...prevState, [name]: e.target.value}));
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
          console.log(error);const createEthereumContract = () => {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
          
            return transactionsContract;
          };
          throw new Error("No ethereum object.");
      }
  }

  //add user accounts
    const createUserAccount = async() => {
      try {
        if(ethereum){
          const {username, password, role} =  createUsrData;
          const transactionsContract = createEthereumContract();
          const transactionHash = await transactionsContract.createUserAccount(username, password, role);
          setIsLoading(true);
          console.log(`Loading - ${transactionHash.hash}`);
          await transactionHash.wait();
          console.log(`Success - ${transactionHash.hash}`);
          setIsLoading(false);
        } else{
          console.log("No ethereum object");
        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }

    //add courses
    const AddCourse = async() => {
      try {
        if(ethereum){
          const {facultyAddress, facultyName, courseCode, courseTitle} = addCourseData;
          const transactionsContract = createEthereumContract();
          const transactionHash = await transactionsContract.addCourses(facultyAddress, facultyName, courseCode, courseTitle);
          setIsLoading(true);
          console.log(`Loading - ${transactionHash.hash}`);
          await transactionHash.wait();
          console.log(`Success - ${transactionHash.hash}`);
          swal("Course Successfully Added", `Transaction hash: ${transactionHash.hash}`, "success");
          setIsLoading(false);
        } else{
          console.log("No ethereum object");
        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }

    //get all courses
    const  getCourses = async() => {
      try {
        if(ethereum){
          const transactionsContract = createEthereumContract();
          const courses = await transactionsContract.getAllCourses();
          setAllCourses(courses);

        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }


    //get courses assigned to the faculty
    const getFacultyCourses = async() => {
      try {
        if(ethereum){
          const transactionsContract = createEthereumContract();
          const courses = await transactionsContract.getCourseByAddress();
          setFacultyCourses(courses);

        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }

    
  
  
  
    useEffect(() => {
      checkIfWalletIsConnected();
      // console.log(formData); 
      // getCourses();
      // console.log("all courses:",allCourses);
    }, []);
  
  
    return (
      <FeedbackContext.Provider value={{ isSignedIn, setIsSignedIn, signIn, currentAccount, connectWallet, createAccountHandleChange, createUsrData, loginAccountHandleChange, userLoginData, isLoading, createUserAccount, courseAddHandleChange, addCourseData, AddCourse, allCourses, getCourses, getFacultyCourses, facultyCourses}}>
        {children}
      </FeedbackContext.Provider>
    )
}