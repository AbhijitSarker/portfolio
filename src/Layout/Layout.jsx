import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div className='bg-[#03101B] p-8 h-screen  font-firaCode text-font'>
            <div className='bg-[#011627] border border-slate-700 shadow-2xl h-full rounded-lg flex flex-col justify-between'>

                <div className=' rounded-t-lg'>
                    <Header></Header>
                </div>



                <div className='bg-red-950 rounded-b-lg'>
                    <Footer></Footer>
                </div>

            </div>
        </div>
    );
};

export default Layout;