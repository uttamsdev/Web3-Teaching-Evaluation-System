import React, { useContext } from 'react'
import {VscGitPullRequestCreate} from "react-icons/vsc"
import { FeedbackContext } from '../../../Context/Context'
import Loader from '../../../Shared/Loader';
import swal from 'sweetalert';

const Account = () => {
    const  {createAccountHandleChange, createUsrData, isLoading, createUserAccount} = useContext(FeedbackContext);

    const handleLogin = async(event) => {
        const {address, username, password, role} =  createUsrData;
        event.preventDefault();
        if(!address, !username || !password || !role) {
            swal("Input field Empty", "At least one of input filed is empty!", "error");
            return;
        }
        createUserAccount();

    }
    return (
        <div className='bg-[#F1F5F9] calc-height rounded-b-3xl'>
            <p className='border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center rounded-t-xl'><VscGitPullRequestCreate className='ml-5 mr-3 w-6 h-6'/>Create Account</p>
            <div className='w-[325px] md:w-[600px] mx-auto'>
            <p className='w-full text-center text-[#ea3d5a] text-md  py-3 border-l-4 border-[#ea3d5a]  mb-8 bg-white shadow-md rounded-md mx-auto  bg-gradient-to-r from-stone-100 to-blue-50 drop-shadow-md'><b className="font-bold info-size">Info: </b>Please Fill up the form below correctly to create new user accounts. </p>
                <form onSubmit={handleLogin} className='flex flex-col items-center bg-gradient-to-r from-stone-100 to-blue-50 py-10 rounded-xl drop-shadow-md'>
                <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Wallet Address </label>
                    </div>
                    <input type="text" className='border focus:outline-none w-[300px] md:w-[500px] h-10  bg-gray-200 rounded-md pl-3 mb-4 ' name='address' placeholder='Enter wallet address' onBlur={(e) => createAccountHandleChange(e, e.target.name)}/>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Username: </label>
                    </div>
                    <input type="text" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 rounded-md  pl-3 mb-4 ' name='username' placeholder='Enter username' onBlur={(e) => createAccountHandleChange(e, e.target.name)}/>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Password: </label>
                    </div>
                    <input type="password" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 rounded-md  pl-3 mb-3' name="password" placeholder='Enter password' onBlur={(e) => createAccountHandleChange(e, e.target.name)}/>
                    <div className='flex items-center gap-28 md:gap-80'>
                    <label className='font-bold'>Select Role:</label>
                    <select className='p-2 rounded-2xl bg-gray-200' name='role' onBlur={(e) => createAccountHandleChange(e, e.target.name)}>
                    <option  selected="selected" disabled>Select Role</option>
                        <option value="faculty">Faculty</option>
                        <option value="student">Student</option>
                    </select>
                    </div>
                    {
                        isLoading && <Loader></Loader>
                    }
                    <input type="submit" value="Create Account" className='rounded bg-[#ea3d5a] px-5  text-white py-2 cursor-pointer mt-5' />
                </form>
            </div>
        </div>
    )
}

export default Account