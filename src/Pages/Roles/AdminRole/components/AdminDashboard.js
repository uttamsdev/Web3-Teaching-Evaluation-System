import React from 'react';

const Dashboard = () => {
    return (
        <>
            <p className='text-gray-700 text-3xl mb-16 font-bold'>Dashboard</p>
            <div className='grid lg:grid-cols-3 gap-5 mb-16'>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>
                <div className='rounded-lg  bg-white h-40 shadow-lg'></div>

            </div>
            <div className='grid col-1 bg-white h-96 shadow-lg rounded-lg '></div>
        </>
    );
};

export default Dashboard;