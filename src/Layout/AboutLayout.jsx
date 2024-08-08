import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Pages/About/SideBar/SideBar';
import Education from '../Pages/About/SideBar/Professional';

const AboutLayout = () => {
    const { pathname } = useLocation()
    return (
        <div className='flex h-full'>
            {/* <div>
                {pathname === "/about/experience" ? (
                    <Education></Education>
                ) : <Sidebar></Sidebar>}
            </div> */}
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default AboutLayout;