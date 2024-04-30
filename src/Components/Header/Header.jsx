import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiTireIronCross } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex flex-row justify-between border-b border-b-border h-12 text-sm'>
            {/* name */}
            <div className='md:border-r md:border-r-slate-700 px-8 md:w-80 flex items-center text-lg font-semibold'>
                <div className='md:w-80'>
                    <p>Abhijit Sarker</p>
                </div>
            </div>


            {/* links for small device */}
            <div className={` flex flex-col z-10 items-center absolute h-full w-full  md:hidden ${open ? 'flex' : 'hidden'}`}>

                <div className='md:hidden h-[50px] ml-auto mt-[2px] flex items-center pr-4' onClick={() => setOpen(!open)}>
                    {
                        open ? <GiTireIronCross className='text-4xl ' /> : <FaBarsStaggered className='text-4xl ' />
                    }
                </div>

                <div className='w-full border-b h-full bg-[#011627] rounded-lg  border-b-border'>
                    <NavLink to={'/'} className='w-full' onClick={() => setOpen(!open)} >
                        <div className='flex items-center justify-center h-16 border-b  border-b-border px-8 hover:text-white hover:bg-[#0F2031]'>_hello_world</div>
                    </NavLink>
                    <NavLink to={'/about'} onClick={() => setOpen(!open)}>
                        <div className='flex items-center justify-center h-16 border-b  border-b-border px-8 hover:text-white hover:bg-[#0F2031]'>_about_me</div>
                    </NavLink>
                    <Link to={'/projects'} onClick={() => setOpen(!open)}>
                        <div className='flex items-center justify-center h-16 border-b  border-b-border px-8 hover:text-white hover:bg-[#0F2031]'>_projects</div>
                    </Link>
                    <Link to={'/contact-me'} onClick={() => setOpen(!open)}>
                        <div className='flex items-center justify-center h-16 border-b  border-b-border px-8 hover:text-white hover:bg-[#0F2031]'>_contact_me</div>
                    </Link>
                </div>
            </div>


            {/* links for large device*/}
            <div className='hidden md:flex flex-row justify-between w-full'>
                <div className='flex'>

                    <ActiveLink to={'/'}>
                        <div className='flex items-center w-max h-full border-r  border-r-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_hello_world</div>
                    </ActiveLink>
                    <ActiveLink to={'/about-me'}>
                        <div className='flex items-center h-full border-r  border-r-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_about_me</div>
                    </ActiveLink>
                    <ActiveLink to={'/projects'}>
                        <div className='flex items-center h-full border-r  border-r-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_projects</div>
                    </ActiveLink>


                </div>

                {/* contact me */}
                <ActiveLink to={'/contact-me'}>
                    <div className='flex items-center h-full border-l  border-l-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>_contact_me</div>
                </ActiveLink>

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