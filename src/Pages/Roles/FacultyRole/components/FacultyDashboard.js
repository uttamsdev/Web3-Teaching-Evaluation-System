import React, { useContext } from 'react';
import {AiOutlineDashboard} from 'react-icons/ai'
import { FeedbackContext } from '../../../Context/Context';
import userLogo from "../../../assets/facultyIcon.png"
import FacultyCourses from './FacultyCourses';

const FacultyDashboard = () => {
    const { currentAccount } = useContext(FeedbackContext);
    return (
        <div className='bg-[#F1F5F9] calc-height rounded-xl'>
        <p className='border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center rounded-t-xl '><AiOutlineDashboard className='ml-5 mr-3 w-6 h-6'/>Faculty Dashboard</p>
        <p className='text-center text-[#ea3d5a]   text-lg  py-3 border-l-4 border-[#ea3d5a]  mb-8 bg-white shadow-md rounded-md w-9/12 md:w-1/3 mx-auto bg-gradient-to-r from-stone-100 to-blue-50 drop-shadow-md'>Hey Dear Faculty, You are welcome to your dashboard.</p>
        <div className='h-72 w-96 bg-gradient-to-r from-stone-100 to-blue-50 py-10  drop-shadow-md shadow-md rounded-lg flex justify-center items-center mx-auto mb-4 '>
            <div>
            <img src={userLogo} className="mx-auto ring-4 rounded-full h-36" alt="" />
            <p className='font-bold mt-4'>Connected account:</p>
            <p className='mt-2'>{currentAccount}</p>
            </div>
        </div>
        <FacultyCourses/>
    </div>
    );
};

export default FacultyDashboard;