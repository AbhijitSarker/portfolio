import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Pages/About/SideBar/SideBar';

const AboutLayout = () => {

    return (
        <div className='flex h-full'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default AboutLayout;