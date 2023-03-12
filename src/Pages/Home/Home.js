import React, { useContext, useEffect, useState } from 'react';
// import CryptoJS from "crypto-js";
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import loginLogo from "../../Pages/assets/avatar.png"
import swal from 'sweetalert';
import { FeedbackContext } from '../Context/Context';
const { ethereum } = window;


const Home = () => {
   const {isSignedIn,setIsSignedIn, currentAccount, connectWallet, loginAccountHandleChange, userLoginData,createEthereumContract } = useContext(FeedbackContext);
    const [singleUser, setSingleUser] = useState(null);
    const navigate = useNavigate();


    // useEffect(()=>{
    //     getLogin();
    //     console.log("SingleUser:",singleUser);
    // },[])
    // const userRole = localStorage.getItem("role");


    // const checkUserRole = () => {
    // if(userRole == "admin" || userRole == "faculty" || userRole == "student"){
    //     navigate("/"+userRole);
    // } else navigate("/");
    // }
  

    // useEffect(()=>{
    //     fetch("users.json").then(res => res.json()).then(data => setUsers(data));
    //     // checkUserRole();
    // },[])
    const handleLogin = async(event) => {
        event.preventDefault();
        // const {username, password} = userLoginData;
        const username = event.target.username.value;
        const password = event.target.password.value;

        // const  role = event.target.role.value;

        // console.log("loginx",singleUser);

        if(!currentAccount){
            swal("Connect Wallet First!", "Connect your wallet first to  proceed login!", "error");
            return;
        }
        
        console.log(username, password);

        try {
            if(ethereum){
              const transactionsContract = createEthereumContract();
              const user = await transactionsContract.getUserAccount(username);

              // const decryptedPassword = CryptoJS.AES.decrypt(user[0]?.password, process.env.REACT_APP_SECRET_KEY).toString(
              //   CryptoJS.enc.Utf8
              // );
              // let checkAdminRole;
              // let checkFacultyRole;
              // let checkStudentRole;
              bcrypt.compare(password, user[0].password, (err, result) => {
                if (result && user[0].role==='admin' && user[0].username===username) {
                  navigate("/admin");
                  localStorage.setItem("role","admin");
                  setIsSignedIn(true);
                  console.log('Password matched!');
                } 
                else if(result && user[0].role==='faculty' && user[0].username===username){
                  navigate("/faculty");
                  localStorage.setItem("role","faculty");
                  setIsSignedIn(true);
                }
                else if(result && user[0].role==='student' && user[0].username===username){
                  navigate("/student");
                  localStorage.setItem("role","student");
                  setIsSignedIn(true);
                }
                else {
                  swal("Wrong Credential!", "Username or Password is wrong.!", "error");
                  console.log('Password did not match.');
                }
              });
            //   setSingleUser(user);
            // setSingleUser(user);
              console.log("user: ",user);
        
          

        
        // if(checkAdminRole){
        //     navigate('/admin');
        //     localStorage.setItem("role","admin");
        //     setIsSignedIn(true);
        // }
        // else if(checkFacultyRole){
        //     navigate("/faculty");
        //     localStorage.setItem("role","faculty");
        //     setIsSignedIn(true);
        // }
        // else if(checkStudentRole){
        //     navigate("/student");
        //     localStorage.setItem("role","student");
        //     setIsSignedIn(true);
        // } 
        // else if(!checkAdminRole || !checkFacultyRole || !checkStudentRole){
        //     swal("Wrong Credential!", "Username or Password is wrong.!", "error");
        // } 
     }
          } catch (error) {
            swal("User Doesn't Exist", "This user doesn't exist to blockchain", "error");
            console.log(error);
            throw new Error("No ethereum object");
          }
        //   console.log("userfrom usestate: ",singleUser);
        
        // else {
        //     alert("username or password is wrong..");
        // }
        // console.log(users);

        // console.log(pass);

    }
  return (
   <div className='h-screen bg-gray-100 pt-12'>
    {
        !currentAccount && <p className='info-width text-center text-[#b56a00] text-md  py-3 border-l-8 border-[#F0AD4E]  mb-8 bg-[#F4EEE4] rounded-md mx-auto'><b className="font-bold info-size">Info: </b>Please Connect your wallet first time by click on Connect Wallet Button before login </p>
    }
    {
        !currentAccount && <button className='btn bg-[#333] text-white px-5 py-2 rounded block mx-auto mt-10 font-bold' onClick={connectWallet}>Connect Wallet</button>
    }
   
     <div className={`flex justify-center items-center mt-12 ${currentAccount && "mt-36"}` }>
        <div className='w-[350px] md:w-[450px] mx-auto bg-white flex justify-center h-[480px] shadow-xl'>
           <div>
            <img className='w-[100px] ring-4 rounded-full mx-auto mb-10 mt-12' src={loginLogo} alt="" />
           <h1 className='text-center text-2xl font-bold mb-3'>Login Your Account</h1>
        <form className=''  onSubmit={handleLogin}>
            <label htmlFor="#" className='font-bold'>Username: </label> <br />
            <input className='border focus:outline-none mb-3 w-[300px] md:w-[350px] h-10 rounded pl-2 bg-gray-200' type="text"  name='username' placeholder='Enter username' onBlur={(e) => loginAccountHandleChange(e, e.target.name)}/> <br />
            <label htmlFor="#" className='font-bold'>Password: </label> <br />
            <input className='border focus:outline-none w-[300px] md:w-[350px] h-10 rounded pl-2 bg-gray-200 mb-5' type="password" name="password" id="" placeholder='Enter password..' onBlur={(e) => loginAccountHandleChange(e, e.target.name)}/> <br />
            <input className='btn bg-[#302d2d] text-white w-[300px] md:w-[350px] h-10 cursor-pointer hover:bg-black transition-all duration-200 ' type="submit" value="Login" />
        </form>
           </div>
        </div>
    </div>
    
   </div>
  )
}

export default Home;