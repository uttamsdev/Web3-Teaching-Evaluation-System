import React, { useContext } from 'react';
import {AiOutlineDashboard} from 'react-icons/ai'
import {MdOutlineFeedback} from 'react-icons/md';
import {BiBookReader} from 'react-icons/bi';
import {BsSpeedometer2} from 'react-icons/bs';
import userLogo from '../../../assets/studentLogo.jpg';
import { FeedbackContext } from '../../../Context/Context';
import StudentCourses from './StudentCourses';
const StudentDashboard = () => {
    const { currentAccount } = useContext(FeedbackContext);
    return (
        <div className='bg-[#F5F5F5] calc-height rounded-xl'>
        <p className='text-white text-2xl mb-8 font-bold bg-[#039BE5] h-24 flex items-center rounded-t-xl'><AiOutlineDashboard className='ml-5 mr-3 w-6 h-6'/>Student Dashboard</p>
        <p className='text-center text-[#16728e]  text-lg  py-3 border-l-8 border-[#5bc0de]  mb-8 bg-[#4bc3e41d] rounded-md w-9/12 md:w-5/12 mx-auto'>Hey Dear Student, You are welcome to your dashboard.</p>
        <div className='h-72 w-96 bg-white shadow-md rounded-lg flex justify-center items-center mx-auto mb-4 '>
            <div>
            <img src={userLogo} className="mx-auto ring-4 rounded-full h-36" alt="" />
            <p className='font-bold mt-4'>Connected account:</p>
            <p className='mt-2'>{currentAccount}</p>
            </div>
        </div>
       <StudentCourses/>
    </div>
    );
};

export default StudentDashboard;