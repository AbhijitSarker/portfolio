import React from 'react';
import img from '../../Assets/project.jpg'
const ProjectCard = () => {
    return (
        <div className='w-[300px] h-[370px] bg-[#011221] rounded-lg border border-slate-700'>
            <div className='border-b relative border-b-slate-700 overflow-hidden rounded-t-lg'>
                <img className='h-[170px] object-cover w-full rounded-t-lg transition-transform duration-300 hover:scale-110' src={img} alt="" />
                <div className='absolute bottom-0 bg-[#000000a1] w-full pl-5 py-1 text-[#5565E8]'>Project name</div>
            </div>
            <div className='p-5 flex flex-col'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='px-3 py-2 mt-10 bg-[#1C2B3A] rounded-lg'>view-project</button>
            </div>
        </div>
    );
};

export default ProjectCard;