
import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
import facultyLogo from '../../../assets/facultyIcon.png'
import {AiOutlineFundView} from "react-icons/ai";

const SideBar = forwardRef(({ showNav }, ref) => {

    const router = useLocation();
    return (
        <div ref={ref} className="bg-[#2D323E] fixed w-60 h-full shadow-lg">
            {/* Sidebar Logo */}
            <div className='flex justify-center mt-6 mb-14'>
                <img src={facultyLogo} className='w-20  rounded-full ring-4' alt="company logo" />
            </div>
            {/* Sidebar Menu */}
            <p className='text-white mt-[-40px] font-bold text-xl text-center mb-4  rounded-full w-48  mx-auto'> Faculty</p> 
            <div className='flex flex-col'>
                <Link to='/faculty'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/faculty"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <HomeIcon className='w-5 h-5' />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                
                <Link to='/faculty/view-feedbacks'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/faculty/view-feedbacks"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <AiOutlineFundView className='w-5 h-5' />
                        </div>
                        <p>View Feedbacks</p>
                    </div>
                </Link>
            </div>
        </div>
    );
});

SideBar.displayName = 'SideBar';

export default SideBar;