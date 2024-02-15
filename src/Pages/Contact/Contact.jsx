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
            <Form></Form>
        </div>
    );
};

export default Contact;