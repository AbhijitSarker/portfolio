import React from 'react';
import Form from './Form';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Me</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className='flex h-full justify-between'>
                <div className='w-60 h-full border'>side bar</div>
                <div className='flex w-full justify-between'>
                    <div>form</div>
                    <div>code block</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;