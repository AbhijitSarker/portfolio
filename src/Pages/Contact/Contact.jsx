import React from 'react';
import Form from './Form';
import { Helmet } from 'react-helmet-async';
import Sidebar from './Sidebar/Sidebar';

const Contact = () => {
    return (
        <div className='h-full w-full'>
            <Helmet>
                <title>Contact Me</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className='flex h-full justify-between'>
                <div className='w-80 h-full'>
                    <Sidebar></Sidebar>
                </div>
                <div className='flex w-full h-full justify-between'>
                    <div className='flex justify-center items-center'>
                        <Form></Form>
                    </div>
                    <div>code block</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;