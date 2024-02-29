import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className='h-full md:border-r md:border-r-slate-700 w-80'>
            <div className=''>
                <div>
                    <h3 className='pl-8 py-3 md:border-b md:border-b-slate-700 text-white'>_contacts</h3>
                </div>
                <div className='pl-8 py-3 space-y-2'>
                    <div className='flex items-center gap-2'>
                        <MdEmail />
                        <a href="mailto:user@example.com">abhijit.srker@gmail.com</a> <br />
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPhoneAlt />
                        <a href="tel:+1234567890">+8801703290219</a>
                    </div>
                </div>
            </div>
            <div className=''>
                <div>
                    <h3 className='pl-8 py-3 md:border-b md:border-b-slate-700 text-white'>Contacts</h3>
                </div>
                <div className='pl-8 py-3 space-y-2'>
                    <div className='flex items-center gap-2'>
                        <MdEmail />
                        <a href="mailto:user@example.com">abhijit.srker@gmail.com</a> <br />
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPhoneAlt />
                        <a href="tel:+1234567890">+8801703290219</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;