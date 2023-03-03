import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../Context';



const Home = () => {
   const {isSignedIn,setIsSignedIn} = useContext(context);
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

        const email = event.target.email.value;
        const pass = event.target.pass.value;

        const admin = users.find(user => user.email==email && user.role=="admin" && user.password==pass);
        const faculty = users.find(user => user.email==email && user.role=="faculty" && user.password==pass);
        const student = users.find(user => user.email==email && user.role=="student" && user.password==pass);
        
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
            alert("Email or password is wrong..");
        } else {
            alert("username or password is wrong..");
        }
        // console.log(users);

        console.log(pass);

    }
  return (
    <div style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center", marginTop:"50px"}}>
        <form onSubmit={handleLogin}>
            <input type="email"  name='email' placeholder='Enter email'/> <br />
            <input type="password" name="pass" id="" placeholder='Enter password..'/> <br />
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Home;