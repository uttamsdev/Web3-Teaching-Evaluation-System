import React, { useContext } from 'react'
import {VscGitPullRequestCreate} from "react-icons/vsc"
import swal from 'sweetalert';
import { FeedbackContext } from '../../../Context/Context'

const Account = () => {
    const  {createAccountHandleChange, createUsrData} = useContext(FeedbackContext);

    const handleLogin = async(event) => {
        const {username, password, role} =  createUsrData;
        event.preventDefault();
        // const rolex = event.target.username.value;
        // console.log("rolex",rolex);

        if(!username || !password || !role) return; //TODO: change this for next timee
        console.log(username, password, role);

    }
    return (
        <div className='bg-[#F5F5F5] calc-height rounded-b-3xl'>
            <p className='text-white text-2xl mb-10 font-bold bg-[#039BE5] h-24 flex items-center rounded-t-xl'><VscGitPullRequestCreate className='ml-5 mr-3 w-6 h-6'/>Create Account</p>
            <div className='w-[325px] md:w-[600px] mx-auto'>
                <p className='text-center text-[#b56a00] text-xl md:text-xl py-3 border-l-8 border-[#F0AD4E]  mb-8 bg-[#F4EEE4] rounded-md'>Please fill up the form to create new user account.</p>
                <form onClick={handleLogin} className='flex flex-col items-center bg-white py-10 rounded-xl shadow-sm'>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Username: </label>
                    </div>
                    <input type="text" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 pl-3 mb-4 ' name='username' placeholder='Enter username' onBlur={(e) => createAccountHandleChange(e, e.target.name)}/>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Password: </label>
                    </div>
                    <input type="password" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 pl-3 mb-3' name="password" placeholder='Enter password' onBlur={(e) => createAccountHandleChange(e, e.target.name)}/>
                    <div className='flex items-center gap-28 md:gap-80'>
                    <label className='font-bold'>Select Role:</label>
                    <select className='p-2 rounded-2xl' name='role' onBlur={(e) => createAccountHandleChange(e, e.target.name)}>
                    <option selected="selected" disabled>Select Role</option>
                        <option value="faculty">Faculty</option>
                        <option value="student">Student</option>
                    </select>
                    </div>
                    <input type="button" value="Create Account" className='rounded bg-[#039BE5] px-5 text-white py-2 cursor-pointer mt-5' />
                </form>
            </div>
        </div>
    )
}

export default Account