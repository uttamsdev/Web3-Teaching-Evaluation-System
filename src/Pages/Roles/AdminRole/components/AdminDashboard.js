import React from 'react';
import {AiOutlineDashboard} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi';
import {MdOutlineFeedback} from 'react-icons/md';
import {BiBookReader} from 'react-icons/bi';
import {FaUsers} from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className='bg-[#F5F5F5] calc-height rounded-xl'>
            <p className='text-white text-2xl mb-16 font-bold bg-[#039BE5] h-24 flex items-center'><AiOutlineDashboard className='ml-5 mr-3 w-6 h-6'/>Dashboard</p>
            <div className='flex flex-col md:flex-row place-items-center place-content-center gap-5 mb-16 space-x-6 '>
                <div className='rounded-lg  bg-white h-40 shadow-lg w-80 '>
                    <FiUsers className='w-12 h-12 text-[#039BE5] mx-auto mt-3'/>
                    <h1 className='text-4xl font-bold text-center mt-2 text-orange-500'>14</h1>
                    <p className='text-xl text-center mt-1'>Total Students</p>
                </div>
                <div className='rounded-lg  bg-white h-40 shadow-lg w-80'>
                    <FaUsers className='w-12 h-12 text-[#039BE5] mx-auto mt-3'/>
                    <h1 className='text-4xl font-bold text-center mt-2 text-orange-500'>4</h1>
                    <p className='text-xl text-center mt-1'>Total Faculties</p>
                </div>
                <div className='rounded-lg  bg-white h-40 shadow-lg w-80'>
                    <BiBookReader className='w-12 h-12 text-[#039BE5] mx-auto mt-3'/>
                    <h1 className='text-4xl font-bold text-center mt-2 text-orange-500'>50</h1>
                    <p className='text-xl text-center mt-1'>Total Courses</p>
                </div>
                <div className='rounded-lg  bg-white h-40 shadow-lg w-80'>
                    <MdOutlineFeedback className='w-12 h-12 text-[#039BE5] mx-auto mt-3'/>
                    <h1 className='text-4xl font-bold text-center mt-2 text-orange-500'>120</h1>
                    <p className='text-xl text-center mt-1'>Total Feedbacks</p>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;