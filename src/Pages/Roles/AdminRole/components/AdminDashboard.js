import React from 'react';
import {AiOutlineDashboard} from 'react-icons/ai'

const Dashboard = () => {
    return (
        <div className='bg-[#F5F5F5] h-screen'>
            <p className='text-white text-2xl mb-16 font-bold bg-[#039BE5] h-24 flex items-center'><AiOutlineDashboard className='ml-5 mr-3 w-6 h-6'/>Dashboard</p>
            <div className='grid lg:grid-cols-3 gap-5 mb-16'>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>

            </div>
            <div className='grid col-1 bg-white h-96 shadow-lg rounded-lg '></div>
        </div>
    );
};

export default Dashboard;