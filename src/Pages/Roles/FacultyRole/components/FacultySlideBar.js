
import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
import facultyLogo from '../../../assets/faculty.webp'
import {AiOutlineFundView} from "react-icons/ai";
import { CiViewList } from 'react-icons/ci';

const SideBar = forwardRef(({ showNav }, ref) => {

    const router = useLocation();
    return (
        <div ref={ref} className="bg-[#2D323E] fixed w-56 h-full shadow-lg border-r-2 border-gray-200">
            {/* Sidebar Logo */}
            <div className='flex justify-center mt-6 mb-14'>
                <img src={facultyLogo} className='w-20 h-auto rounded-full ring-4' alt="company logo" />
            </div>
            {/* Sidebar Menu */}
            <div className='flex flex-col'>
                <Link to='/faculty'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/faculty"
                            ? 'bg-[#039BE5] text-white rounded-r-full'
                            : 'text-white hover:bg-[#039BE5] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <HomeIcon className='w-5 h-5' />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                {/* <Link to='/faculty/view-courses'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/faculty/view-courses"
                            ? 'bg-[#039BE5] text-white rounded-r-full'
                            : 'text-white hover:bg-[#039BE5] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <CiViewList className='w-5 h-5' />
                        </div>
                        <p>My Courses</p>
                    </div>
                </Link> */}
                <Link to='/faculty/view-feedbacks'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/faculty/view-feedbacks"
                            ? 'bg-[#039BE5] text-white rounded-r-full'
                            : 'text-white hover:bg-[#039BE5] hover:text-white rounded-r-full'}`}>
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