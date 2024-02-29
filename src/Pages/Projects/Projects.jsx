import React from 'react';
import { Helmet } from 'react-helmet-async';
import SnakeGame from '../../Games/SnakeGame/SnakeGame';

const Projects = () => {
    return (
        <div>
            <Helmet>
                <title>Projects</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            projects
            <SnakeGame></SnakeGame>
        </div>
    );
};

export default Projects;