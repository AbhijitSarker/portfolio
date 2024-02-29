import React from 'react';
import { Helmet } from 'react-helmet-async';
import SnakeGame from '../../Components/SnakeGame/SnakeGame';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <SnakeGame></SnakeGame>
        </div>
    );
};

export default About;