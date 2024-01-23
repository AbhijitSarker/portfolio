import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-row justify-between border-b border-b-slate-700 h-12 text-sm'>
            {/* name */}
            <div className='border-r border-r-slate-700 px-8 w-64 flex items-center'>
                <p>Abhijit Sarker</p>
            </div>

            {/* links */}
            <div className='flex flex-row justify-between w-full'>
                <div className='flex'>

                    <Link to={'/'}>
                        <div className='flex items-center h-full border-r  border-r-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_hello-world</div>
                    </Link>
                    <Link to={'/about-me'}>
                        <div className='flex items-center h-full border-r  border-r-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_about-me</div>
                    </Link>
                    <Link to={'/my-projects'}>
                        <div className='flex items-center h-full border-r  border-r-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_my-projects</div>
                    </Link>
                    <Link to={'/contact-me'}>
                        <div className='flex items-center h-full border-r  border-r-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_hello</div>
                    </Link>

                </div>

                {/* contact me */}
                {/* <div className='border-l border-l-slate-700 px-8 w-56 flex items-center'> */}
                <Link to={'/contact-me'}>
                    <div className='flex items-center h-full border-l  border-l-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_contact-me</div>
                </Link>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Header;