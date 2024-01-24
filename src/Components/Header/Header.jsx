import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiTireIronCross } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='relative flex flex-row justify-between border-b border-b-slate-700 h-12 text-sm'>
            {/* name */}
            <div className='md:border-r md:border-r-slate-700 px-8 md:w-64 flex items-center'>
                <p>Abhijit Sarker</p>
            </div>


            {/* links for small device */}
            <div className={`flex flex-col items-center absolute top-12 w-full bg-slate-300 md:hidden ${open ? 'flex' : 'hidden'}`}>

                <div className='flex items-center py-5 border-b border-b-slate-700'>
                    <Link to={'/'}>
                        _hello-world
                    </Link>
                </div>
                <Link to={'/about-me'}>
                    <div className='flex items-center py-5 border-b border-b-slate-700'>_about-me</div>
                </Link>
                <Link to={'/my-projects'}>
                    <div className='flex items-center py-5 border-b border-b-slate-700'>_my-projects</div>
                </Link>
                <Link to={'/contact-me'}>
                    <div className='flex items-center py-5 border-b border-b-slate-700'>_hello</div>
                </Link>

            </div>

            {/* links for large device*/}
            <div className='hidden md:flex flex-row justify-between w-full'>
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
                <Link to={'/contact-me'}>
                    <div className='flex items-center h-full border-l  border-l-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_contact-me</div>
                </Link>

            </div>


            <div className='md:hidden flex items-center pr-4' onClick={() => setOpen(!open)}>
                {
                    open ? <GiTireIronCross className='text-4xl ' /> : <FaBarsStaggered className='text-4xl ' />
                }
            </div>
        </div >
    );
};

export default Header;