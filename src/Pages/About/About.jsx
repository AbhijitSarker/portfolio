import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='w-full h-full'>
            <Helmet>
                <title>About</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <p>About</p>
        </div>
    );
};

export default About;