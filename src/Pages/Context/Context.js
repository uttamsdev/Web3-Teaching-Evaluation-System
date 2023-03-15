import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import bcrypt from 'bcryptjs';
import swal from "sweetalert";
import { contractABI, contractAddress } from "../../utils/Constant";
const { ethereum } = window;

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const signIn = localStorage.getItem("role");
  const  [createUsrData, setCreateUserData] = useState({username: '', password: '', role: ''});
  const [addCourseData, setAddCourseData] = useState({facultyAddress: '', facultyName: '', courseCode: '', courseTitle: ''});
  const [allCourses, setAllCourses] = useState([]);
  const [facultyCourses, setFacultyCourses] = useState([]);
  const [studentEnrolledCourse, setStudentEnrolledCourse] = useState([]);
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [feedbackByCourseCode, setFeedbackByCourseCode] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allCoursesOfAdmin, setAllCoursesOfAdmin] = useState([]);
  const [hashedPassword, setHashedPassword] = useState("");


  //bcrypt password
  const handleEncode = () => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash("uttamsaha", salt, (err, hash) => {
        // setHashedPassword(hash);
        console.log(hash);
      });
    });
  };

  const handleDecode = () => {
    bcrypt.compare("test", hashedPassword, (err, result) => {
      if (result) {
        console.log('Password matched!');
      } else {
        console.log('Password did not match.');
      }
    });
  };
      //getting form input data
      const createAccountHandleChange = (e, name) => {
        setCreateUserData((prevState) => ({...prevState, [name]: e.target.value}));
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
          throw new Error("No ethereum object.");
      }
  }

  //add user accounts
    const createUserAccount = async() => {
      try {
        if(ethereum){
          const {username, password, role} =  createUsrData;
              bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(password, salt, async(err, hash) => {
                const transactionsContract = createEthereumContract();
                const transactionHash = await transactionsContract.createUserAccount(username, hash, role);
                setIsLoading(true);
                console.log(`Loading - ${transactionHash.hash}`);
                await transactionHash.wait();
                console.log(`Success - ${transactionHash.hash}`);
                setIsLoading(false);
                swal("Account Created","Account Successfully Created.","success");
              });
            });
         
        } else{
          console.log("No ethereum object");
        }
      } catch (error){
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

    //get all courses by admin
    const getAllCoursesByAdmin = async() => {
      try {
        if(ethereum){
          const transactionsContract = createEthereumContract();
          const courses = await transactionsContract.getAllCourseOfAdmin();
          setAllCoursesOfAdmin(courses);

        }
      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }
  
  
    useEffect(() => {
      checkIfWalletIsConnected();
      handleEncode();
    // console.log("x",feedbackState);

    }, []);
  
  
    return (
      <FeedbackContext.Provider value={{ isSignedIn, setIsSignedIn, signIn, currentAccount, connectWallet, createAccountHandleChange, createUsrData, isLoading, setIsLoading, createUserAccount, courseAddHandleChange, addCourseData, AddCourse, allCourses, getCourses, getFacultyCourses, facultyCourses, getStudentCourses, studentEnrolledCourse, isClicked, setIsClicked, createEthereumContract, getAllFeedback, setFeedbackByCourseCode, feedbackByCourseCode, checkIfWalletIsConnected, allUsers, getAllUsers, allFeedbacks, getAllCoursesByAdmin, allCoursesOfAdmin}}>
        {children}
      </FeedbackContext.Provider>
    )
}