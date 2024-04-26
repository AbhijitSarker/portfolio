import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState([true, false, false]);

    const toggleAccordion = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }} // Initial state
            animate={{ opacity: 1, x: 0 }}     // Animation state
            transition={{ duration: .5 }}
            className='h-full md:border-r md:border-r-slate-700 w-80'
        >

            <div className="max-w-md mx-auto">
                <div className="space-y-2">
                    <div className="">
                        <div
                            className="flex items-center justify-between cursor-pointer w-full md:border-b md:border-b-slate-700 pr-4"
                            onClick={() => toggleAccordion(0)}
                        >
                            <span className='w-full pl-8 py-3  text-white'>_contacts</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${isOpen[0] ? "transform rotate-180" : ""
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a1 1 0 0 1-.707-.293l-8-8a1 1 0 0 1 1.414-1.414L10 15.586l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8A1 1 0 0 1 10 18z"
                                />
                            </svg>
                        </div>
                        {isOpen[0] && (
                            <div className="p-4 space-y-2">
                                <div className='flex items-center gap-2'>
                                    <MdEmail />
                                    <a href="mailto:abhijit.srker@gmail.com">abhijit.srker@gmail.com</a> <br />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaPhoneAlt />
                                    <a href="tel:+8801703290219">+8801703290219</a>
                                </div>
                            </div>
                        )}
                    </div>


                    <div>
                        <div
                            className="flex items-center justify-between cursor-pointer w-full md:border-b md:border-b-slate-700 pr-4"
                            onClick={() => toggleAccordion(1)}
                        >
                            <span className='w-full pl-8 py-3  text-white'>_also-find-me-on</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${isOpen[1] ? "transform rotate-180" : ""
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a1 1 0 0 1-.707-.293l-8-8a1 1 0 0 1 1.414-1.414L10 15.586l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8A1 1 0 0 1 10 18z"
                                />
                            </svg>
                        </div>
                        {isOpen[1] && (
                            <div className="p-4">
                                Content for section 2
                            </div>
                        )}
                    </div>
                </div>
            </div>





        </motion.div>
    );
};

export default Sidebar;