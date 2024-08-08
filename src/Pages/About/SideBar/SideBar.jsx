import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Professional from './Professional';

const Sidebar = () => {

    // const [isOpen, setIsOpen] = useState([true, false, false]);

    // const toggleAccordion = (index) => {
    //     const newIsOpen = [...isOpen];
    //     newIsOpen[index] = !newIsOpen[index];
    //     setIsOpen(newIsOpen);
    // };
    // const a = 1;
    // const b = 2;
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }} // Initial state
            animate={{ opacity: 1, x: 0 }}     // Animation state
            transition={{ duration: .5 }}
            className='h-full md:border-r md:border-r-slate-700 w-80 flex'
        >
            <div className='w-16 border-r border-r-slate-700'>
                <Link to='/about'><div className='h-14 flex justify-center items-center text-[#607b9675]'><FaPhoneAlt /></div></Link>
                <Link to="/about/experience"><div className='h-14 flex justify-center items-center text-[#607b96]'><FaPhoneAlt /></div></Link>
            </div>

            <Professional></Professional>

        </motion.div>
    );
};

export default Sidebar;