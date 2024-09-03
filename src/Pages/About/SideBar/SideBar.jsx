import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProfessionalInfo from './ProfessionalInfo';
import PersonalInfo from './PersonalInfo';

const Sidebar = () => {
    const [active, setActive] = useState('about');

    let sider;

    switch (active) {
        case "about":
            sider = <PersonalInfo></PersonalInfo>;
            break;
        case "professional":
            sider = <ProfessionalInfo></ProfessionalInfo>;
            break;
        case "personal":
            sider = <ProfessionalInfo></ProfessionalInfo>;
            break;
        default:
            sider = null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            className='h-full md:border-r md:border-r-slate-700 w-80 flex'
        >
            <div className='w-16 border-r border-r-slate-700'>
                <Link to='/about'><div onClick={() => setActive("about")} className='h-14 flex justify-center items-center text-[#607b9675]'><FaPhoneAlt /></div></Link>
                <Link to='/about/professional'><div onClick={() => setActive("professional")} className='h-14 flex justify-center items-center text-[#607b9675]'><FaPhoneAlt /></div></Link>
                <Link to="/about/personal"><div onClick={() => setActive("personal")} className='h-14 flex justify-center items-center text-[#607b96]'><FaPhoneAlt /></div></Link>
            </div>

            {sider}  {/*  this will be conditionally rendered */}

        </motion.div>
    );
};

export default Sidebar;