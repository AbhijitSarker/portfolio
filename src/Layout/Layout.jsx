import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div className='bg-[#011221] p-6 h-screen'>
            <div className='bg-[#011627] border border-slate-800 shadow-2xl h-full rounded-lg flex flex-col justify-between'>
                <div className='bg-red-950 rounded-t-lg'>
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