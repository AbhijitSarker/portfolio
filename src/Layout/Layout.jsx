import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div className='bg-[#03101b] p-3 md:p-6 h-screen  font-firaCode text-font '>
            <div className='relative bg-[#011627] border border-border shadow-2xl  overflow-auto h-full rounded-lg flex flex-col justify-between'>

                <div className=' rounded-t-lg'>
                    <Header></Header>
                </div>
                <div className='h-full  overflow-auto'>

                    <Outlet></Outlet>
                </div>

                <div className=' rounded-b-lg'>
                    <Footer></Footer>
                </div>

            </div>
        </div>
    );
};

export default Layout;