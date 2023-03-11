
import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
// import CompanyLogo from '../../../assets/logo.png'
import AdminLogo from '../../../assets/adminLogo.jpg';
import{MdPersonAddAlt1} from 'react-icons/md';
import  { AiOutlineFundView } from 'react-icons/ai';
import {FaDiscourse} from 'react-icons/fa';
import { MdOutlinePreview } from 'react-icons/md';

const SideBar = forwardRef(({ showNav }, ref) => {

    const router = useLocation();
    return (
        <div ref={ref} className="bg-[#2D323E] fixed w-56 h-full shadow-lg border-r-2 border-gray-200">
            {/* Sidebar Logo */}
            <div className='flex justify-center mt-6 mb-14'>
                <img src={AdminLogo} className='w-20 h-auto rounded-full ring-4 ring-offset-4' alt="company logo" />
            </div>
            {/* Sidebar Menu */}
            <div className='flex flex-col'>
                <Link to='/admin'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin"
                            ? 'bg-[#039BE5] text-white rounded-r-full'
                            : 'text-white hover:bg-[#039BE5] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <HomeIcon className='w-5 h-5' />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/admin/create-account'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/create-account"
                            ? 'bg-[#039BE5] text-white rounded-r-full'
                            : 'text-white hover:bg-[#039BE5] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <MdPersonAddAlt1 className='w-5 h-5' />
                        </div>
                        <p>Create Account</p>
                    </div>
                </Link>
                <Link to='/admin/all-courses'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/all-courses"
                            ? 'bg-[#039BE5] text-white rounded-r-full'
                            : 'text-white hover:bg-[#039BE5] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <MdOutlinePreview className='w-5 h-5' />
                        </div>
                        <p>All Courses</p>
                    </div>
                </Link>
                <Link to='/admin/add-courses'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/add-courses"
                            ? 'bg-[#039BE5] text-white rounded-r-full'
                            : 'text-white hover:bg-[#039BE5] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <FaDiscourse className='w-5 h-5' />
                        </div>
                        <p>Add Courses</p>
                    </div>
                </Link>
                <Link to='/admin/view-all-feedbacks'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/view-all-feedbacks"
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