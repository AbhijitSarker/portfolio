import React from 'react';
import img from '../../Assets/project.jpg'
const ProjectCard = () => {
    return (
        <div className='w-[370px] h-[315px] bg-[#011221] rounded-lg border border-slate-700'>
            <div className='border-b border-b-slate-700'>
                <img className='h-[145px] object-cover w-full rounded-t-lg' src={img} alt="" />
            </div>
            <div className='p-5 flex flex-col'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='px-3 py-2 mt-10 bg-[#1C2B3A] rounded-lg'>view-project</button>
            </div>
        </div>
    );
};

export default ProjectCard;