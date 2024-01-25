import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' flex flex-row justify-between border-t border-t-slate-700 h-10 text-sm'>
            {/* name */}
            <div className='md:border-r md:border-r-slate-700 px-8 md:w-64 hidden md:flex items-center text-lg font-semibold'>
                <p>Find me in:</p>
            </div>



            {/* links for large device*/}
            <div className='flex flex-row justify-between w-full'>
                <div className='flex  md:w-full flex-row text-2xl justify-between md:justify-start'>

                    <Link to={'/'}>
                        <div className='flex items-center h-full w-full border-r  border-r-slate-700  justify-center mx-auto p-3 md:px-5 hover:text-white hover:bg-[#0F2031]'><FaGithub /></div>
                    </Link>


                    <Link to={'/'}>
                        <div className='flex items-center h-full w-full border-r  border-r-slate-700  justify-center p-3 md:px-5 hover:text-white hover:bg-[#0F2031]'><FaLinkedin /></div>
                    </Link>
                    <Link to={'/'}>
                        <div className='flex items-center h-full w-full border-r  border-r-slate-700  justify-center p-3 md:px-5 hover:text-white hover:bg-[#0F2031]'><FaFacebookSquare /></div>
                    </Link>
                    <Link to={'/'}>
                        <div className='flex items-center h-full w-full border-r  border-r-slate-700  justify-center p-3 md:px-5 hover:text-white hover:bg-[#0F2031]'><FaDiscord /></div>
                    </Link>
                    <Link to={'/'}>
                        <div className='flex items-center h-full w-full border-r  border-r-slate-700  justify-center p-3 md:px-5 hover:text-white hover:bg-[#0F2031]'><FaInstagram /></div>
                    </Link>
                    <Link to={'/'}>
                        <div className='flex items-center h-full w-full border-r  border-r-slate-700  justify-center p-3 md:px-5 hover:text-white hover:bg-[#0F2031]'><FaXTwitter /></div>
                    </Link>

                </div>

                {/* contact me */}
                <Link to={'/contact-me'}>
                    <div className='hidden md:flex items-center h-full border-l  border-l-slate-700 px-8 hover:text-white hover:bg-[#0F2031]'>@AbhijitSarker <span className='text-2xl ml-4'><FaGithub /> </span></div>
                </Link>

            </div>


        </div >
    );
};

export default Footer;