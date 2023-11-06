import React, { Fragment } from 'react';
import {
    Bars3CenterLeftIcon,
    PencilIcon,
    ChevronDownIcon,
    CreditCardIcon,
    Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Link } from 'react-router-dom';
import UserImage from '../../../assets/facultyIcon.png'


const StudentTopBar = ({ showNav, setShowNav }) => {
    const logOut = () => {
        localStorage.removeItem("wallet");
        localStorage.removeItem("role");
        window.location.reload();
    }
    return (
        <div className={`fixed bg-white w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${showNav ? "pl-56" : ""}`}>
            <div className="pl-4 md:pl-16">
                <Bars3CenterLeftIcon
                    className="h-8 w-8 text-gray-700 cursor-pointer"
                    onClick={() => setShowNav(!showNav)}
                />
            </div>
            <div className='flex items-center pr-4 md:pr-16'>
                <Popover className='relative' >
                    <button className='outline-none mr-5 md:mr-8 cursor-pointer text-gray-700'>
                        <BellIcon className='h-6 w-6' />
                    </button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                    </Transition>
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className='inline-flex w-full justify-center items-center'>
                            <img src={UserImage} className='rounded-full h-8 md:mr-4 border-2 border-white shadow-sm ring-2' alt="profile_picture" />
                            <span className='hidden md:block font-medium text-gray-700'>Faculty</span>
                            <ChevronDownIcon className='ml-2 h-4 w-4 text-gray-700' />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
                            <div className="p-1">
                                <Menu.Item>
                                    <Link to="#" className="flex hover:bg-[#ea3d5a] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                        <PencilIcon className="h-4 w-4 mr-2" />
                                        Edit
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="#" className="flex hover:bg-[#ea3d5a] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                        <CreditCardIcon className="h-4 w-4 mr-2" />
                                        Billing
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="#" className="flex hover:bg-[#ea3d5a] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                        <Cog8ToothIcon className="h-4 w-4 mr-2" />
                                        Settings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to="#" onClick={logOut} className="flex hover:bg-[#ea3d5a] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                        <Cog8ToothIcon className="h-4 w-4 mr-2" />
                                        Logout
                                    </Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
};

export default StudentTopBar;