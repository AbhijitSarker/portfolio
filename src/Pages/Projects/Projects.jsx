import React from 'react';
import { Helmet } from 'react-helmet-async';
import SnakeGame from '../../Games/SnakeGame/SnakeGame';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Projects = () => {
    return (
        <div className='p-10'>
            <Helmet>
                <title>Projects</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            {/* <SnakeGame></SnakeGame> */}

            <ProjectCard></ProjectCard>
        </div>
    );
};

export default Projects;