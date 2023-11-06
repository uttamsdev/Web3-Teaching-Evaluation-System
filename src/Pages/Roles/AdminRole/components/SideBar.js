
import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
// import CompanyLogo from '../../../assets/logo.png'
import AdminLogo from '../../../assets/admin-icon.png';
import{MdPersonAddAlt1} from 'react-icons/md';
import  { AiOutlineFundView } from 'react-icons/ai';
import {FaDiscourse} from 'react-icons/fa';
import { MdOutlinePreview } from 'react-icons/md';

const SideBar = forwardRef(({ showNav }, ref) => {

    const router = useLocation();
    return (
        <div ref={ref} className="bg-[#0F172A] fixed w-60 h-full shadow-lg">
            {/* Sidebar Logo */}
            <div className='flex justify-center mt-6 mb-14'>
                <img src={AdminLogo} className='w-20 h-auto rounded-full ring-4 ring-offset-4' alt="company logo" />
            </div>
            <p className='text-white mt-[-40px] font-bold text-xl text-center mb-4  rounded-full w-48  mx-auto'> Administrator</p>    
            {/* Sidebar Menu */}
            <div className='flex flex-col'>
                <Link to='/admin'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <HomeIcon className='w-5 h-5' />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/admin/create-account'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/create-account"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <MdPersonAddAlt1 className='w-5 h-5' />
                        </div>
                        <p>Create Account</p>
                    </div>
                </Link>
                <Link to='/admin/all-courses'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/all-courses"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <MdOutlinePreview className='w-5 h-5' />
                        </div>
                        <p>All Courses</p>
                    </div>
                </Link>
                <Link to='/admin/add-courses'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/add-courses"
                            ? 'bg-[#ea3d5a] text-white rounded-r-full'
                            : 'text-white hover:bg-[#ea3d5a] hover:text-white rounded-r-full'}`}>
                        <div className='mr-2'>
                            <FaDiscourse className='w-5 h-5' />
                        </div>
                        <p>Add Courses</p>
                    </div>
                </Link>
                <Link to='/admin/view-all-feedbacks'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/admin/view-all-feedbacks"
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