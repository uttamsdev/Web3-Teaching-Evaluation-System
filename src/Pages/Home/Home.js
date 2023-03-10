import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginLogo from "../../Pages/assets/avatar.png"
import swal from 'sweetalert';
import { FeedbackContext } from '../Context/Context';


const Home = () => {
   const {isSignedIn,setIsSignedIn, currentAccount, connectWallet, handleChange2, userLoginData} = useContext(FeedbackContext);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    // const userRole = localStorage.getItem("role");


    // const checkUserRole = () => {
    // if(userRole == "admin" || userRole == "faculty" || userRole == "student"){
    //     navigate("/"+userRole);
    // } else navigate("/");
    // }
  

    useEffect(()=>{
        fetch("users.json").then(res => res.json()).then(data => setUsers(data));
        // checkUserRole();
    },[])
    const handleLogin = async(event) => {
        event.preventDefault();

        const {username, password} = userLoginData;
        console.log(username, password);

        const admin = users.find(user => user.email==username && user.role=="admin" && user.password==password);
        const faculty = users.find(user => user.email==username && user.role=="faculty" && user.password==password);
        const student = users.find(user => user.email==username && user.role=="student" && user.password==password);
        
        if(admin){
            navigate('/admin');
            localStorage.setItem("role","admin");
            // localStorage.setItem("isAdmin","true");
            setIsSignedIn(true);
        }
        else if(faculty){
            navigate("/faculty");
            localStorage.setItem("role","faculty");
            // localStorage.setItem("isFaculty","true");
            setIsSignedIn(true);
        }
        else if(student){
            navigate("/student");
            localStorage.setItem("role","student");
            // localStorage.setItem("isStudent","true");
            setIsSignedIn(true);
        } 
        else if(!admin || !faculty || !student){
            swal("Wrong Credential!", "Username or Password is wrong.!", "error");
        } 
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
            <input className='border focus:outline-none mb-3 w-[300px] md:w-[350px] h-10 rounded pl-2 bg-gray-200' type="text"  name='username' placeholder='Enter username' onBlur={(e) => handleChange2(e, e.target.name)}/> <br />
            <label htmlFor="#" className='font-bold'>Password: </label> <br />
            <input className='border focus:outline-none w-[300px] md:w-[350px] h-10 rounded pl-2 bg-gray-200 mb-5' type="password" name="password" id="" placeholder='Enter password..' onBlur={(e) => handleChange2(e, e.target.name)}/> <br />
            <input className='btn bg-[#302d2d] text-white w-[300px] md:w-[350px] h-10 cursor-pointer hover:bg-black transition-all duration-200 ' type="submit" value="Login" />
        </form>
           </div>
        </div>
    </div>
    
   </div>
  )
}

export default Home;