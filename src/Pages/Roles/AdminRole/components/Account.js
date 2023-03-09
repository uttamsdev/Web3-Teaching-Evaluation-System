import React from 'react'
import {VscGitPullRequestCreate} from "react-icons/vsc"

const Account = () => {
    return (
        <div className='bg-[#F5F5F5] calc-height rounded-b-3xl'>
            <p className='text-white text-2xl mb-10 font-bold bg-[#039BE5] h-24 flex items-center'><VscGitPullRequestCreate className='ml-5 mr-3 w-6 h-6'/>Create Account</p>
            <div className='w-[325px] md:w-[600px] mx-auto'>
                <p className='text-center text-xl md:text-xl py-3 border-l-8 border-[#F0AD4E]  mb-8 bg-[#F4EEE4] rounded-md'>Please fill up the form to create new user account.</p>
                <form action="" className='flex flex-col items-center bg-white py-10 rounded-xl shadow-sm'>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Username: </label>
                    </div>
                    <input type="text" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 pl-3 mb-4 '  placeholder='Enter username'/>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Password: </label>
                    </div>
                    <input type="password" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 pl-3 mb-3' name="" placeholder='Enter password'/>
                    <div className='flex items-center gap-32 md:gap-80'>
                    <label className='font-bold'>Select Role:</label>
                    <select name="" id="" className='p-2 rounded-2xl'>
                        <option value="Faculty">Faculty</option>
                        <option value="Student">Student</option>
                    </select>
                    </div>
                    <input type="button" value="Create Account" className='rounded bg-[#039BE5] px-5 text-white py-2 cursor-pointer mt-5' />
                </form>
            </div>
        </div>
    )
}

export default Account