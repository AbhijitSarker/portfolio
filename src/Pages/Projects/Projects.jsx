import React from 'react';
import { Helmet } from 'react-helmet-async';
import SnakeGame from '../../Games/SnakeGame/SnakeGame';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Sidebar from '../Contact/Sidebar/Sidebar';

const Projects = () => {
    return (
        <div className='h-full'>
            <Helmet>
                <title>Projects</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            {/* <SnakeGame></SnakeGame> */}
            <div className='block md:flex h-full'>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className='p-10 flex flex-wrap gap-16 justify-center w-full overflow-auto no-scrollbar'>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>

                </div>
            </div>
        </div>
    );
};

export default Projects;