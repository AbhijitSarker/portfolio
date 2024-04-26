import React from 'react';
import { Helmet } from 'react-helmet-async';
import SideBar from './SideBar/SideBar';

const About = () => {
    return (
        <div className='w-full h-full'>
            <Helmet>
                <title>About</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            {/* sidebar */}
            <div className='w-80 h-full'>
                <SideBar></SideBar>
            </div>

            {/* about */}
            <div>

            </div>

            {/* code block */}
            <div>

            </div>

        </div>
    );
};

export default About;