import { Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import SideBar from '../../AdminRole/components/SideBar';
import TopBar from '../../AdminRole/components/TopBar';

const AdminLayout = ({ children }) => {

    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 640) {
            setIsMobile(true);
            setShowNav(false);
        } else {
            setIsMobile(false);
            setShowNav(true);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <TopBar showNav={showNav} setShowNav={setShowNav} />
            <Transition
                as={Fragment}
                show={showNav}
                enter=" transform transition duration-[400ms] "
                enterFrom=" -translate-x-full "
                enterTo=' translate-x-0 '
                leave=" transform  duration-[400ms] transition ease-in-out "
                leaveFrom=" translate-x-0 "
                leaveTo=' -translate-x-full'
            >
                <SideBar showNav={showNav} />
            </Transition>
            <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""}`}>
                <div className='px-4 md:px-16'>
                    {children}
                </div>
            </main>
        </>
    );
};

export default AdminLayout;