import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import swal from "sweetalert";
import { contractABI, contractAddress } from "../../utils/Constant";
const { ethereum } = window;

export const FeedbackContext = createContext();

console.log(contractABI, contractAddress);
// const createEthereumContract = () => {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

//   return transactionsContract;
// };

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
  const [studentEnrolledCourse, setStudentEnrolledCourse] = useState([]);
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [feedbackByCourseCode, setFeedbackByCourseCode] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([]);


  //Encrypt password cuntion
  const  encryptPassword = () =>  {
    const encryptedPassword = CryptoJS.AES.encrypt("uttamsaha", process.env.REACT_APP_SECRET_KEY).toString();
    console.log(encryptedPassword);
  }
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


  const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    return transactionsContract;
  };

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
      console.log("accounts: ", accounts);
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
          // const createEthereumContract = () => {
          //   const provider = new ethers.providers.Web3Provider(ethereum);
          //   const signer = provider.getSigner();
          //   const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
          
          //   return transactionsContract;
          // };
          throw new Error("No ethereum object.");
      }
  }

  //add user accounts
    const createUserAccount = async() => {
      try {
        if(ethereum){
          const {username, password, role} =  createUsrData;
          const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.REACT_APP_SECRET_KEY).toString();
          const transactionsContract = createEthereumContract();
          const transactionHash = await transactionsContract.createUserAccount(username, encryptedPassword, role);
          setIsLoading(true);
          console.log(`Loading - ${transactionHash.hash}`);
          await transactionHash.wait();
          console.log(`Success - ${transactionHash.hash}`);
          setIsLoading(false);
          swal("Account Created","Account Successfully Created.","success");
        } else{
          console.log("No ethereum object");
        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }

    //get user account / login user account
    // const getLogin= async() => {
    //   // const {username, password} = userLoginData;
    //   // try {
    //   //   if(ethereum){
    //   //     const transactionsContract = createEthereumContract();
    //   //     const user = await transactionsContract.getUserAccount(username);
    //   //     setSingleUser(user);
    //   //     console.log("username: ",user);
    //   //     console.log("singleUser:",singleUser);

    //   //   }
    //   // } catch (error) {
    //   //   console.log(error);
    //   //   throw new Error("No ethereum object");
    //   // }
    // }

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

    //get student courses
    const getStudentCourses = async() => {
      try {
        if(ethereum){
          const transactionsContract = createEthereumContract();
          const courses = await transactionsContract.getEnrolledCourses();
          setStudentEnrolledCourse(courses);

        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }

    //get all feedback
    const getAllFeedback = async() => {
      try {
        if(ethereum){
          const transactionsContract = createEthereumContract();
          const feedbacks = await transactionsContract.getAllFeedbacks();
          setAllFeedbacks(feedbacks);

        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }
    

    //get all users
    const getAllUsers = async() => {
      try {
        if(ethereum){
          const transactionsContract = createEthereumContract();
          const users = await transactionsContract.getAllUserAccount();
          setAllUsers(users);

        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }
  
  
  
    useEffect(() => {
      checkIfWalletIsConnected();
      encryptPassword();
      // console.log(formData); 
      // getCourses();
      // console.log("all courses:",allCourses);
    }, []);
  
  
    return (
      <FeedbackContext.Provider value={{ isSignedIn, setIsSignedIn, signIn, currentAccount, connectWallet, createAccountHandleChange, createUsrData, loginAccountHandleChange, userLoginData, isLoading, setIsLoading, createUserAccount, courseAddHandleChange, addCourseData, AddCourse, allCourses, getCourses, getFacultyCourses, facultyCourses, getStudentCourses, studentEnrolledCourse, isClicked, setIsClicked, createEthereumContract, getAllFeedback, setFeedbackByCourseCode, feedbackByCourseCode, checkIfWalletIsConnected, allUsers, getAllUsers, allFeedbacks}}>
        {children}
      </FeedbackContext.Provider>
    )
}