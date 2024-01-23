import React from 'react';

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

                    <div className='flex items-center h-full border-r  border-r-slate-700 px-8'>_hello</div>
                    <div className='flex items-center h-full border-r  border-r-slate-700 px-8'>_hello</div>
                    <div className='flex items-center h-full border-r  border-r-slate-700 px-8'>_hello</div>

                </div>

                {/* contact me */}
                <div className='border-l border-l-slate-700 px-8 w-56 flex items-center'>
                    <p>_Contact me</p>
                </div>
            </div>
        </div>
    );
};

export default Header;