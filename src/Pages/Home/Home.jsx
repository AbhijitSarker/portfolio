import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import green from '../../Assets/bg/Green.png';
import blue from '../../Assets/bg/Blue.png';
const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className=' h-full w-full'>
            <img className='absolute  h-full left-0' src={green} alt="" />
            <img className='absolute  h-full right-0' src={blue} alt="" />
            hg
            {/* <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                dragElastic={0.2}
                className="my-component  text-white p-4 rounded-md"
            >
                <h1 className="text-lg font-bold mb-2">Animated Component</h1>
                <p>This component has various Framer Motion animations applied to it.</p>
            </motion.div> */}


            {/* <div className={` transition-transform duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
                <p>Content goes here</p>
            </div> */}
        </div>

    );
};

export default Home;