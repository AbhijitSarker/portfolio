import MemoryGame from "../../Components/MemoryGame/MemoryGame";
import { motion } from 'framer-motion';
import { FaGreaterThanEqual } from "react-icons/fa6";

const Home = () => {

    return (
        <div className='h-full w-full flex flex-col md:flex-row'>

            <motion.div
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }}     // Animation state
                transition={{ duration: 2 }}
                className="w-full h-full gradient">
                <div className='w-full h-full l-20  flex  flex-col justify-center items-center'>
                    <div>
                        <h1 className="text-white text-left">Hello, I am</h1>
                        <h1 className="md:text-5xl lg:text-6xl my-3 xl:text-6xl text-white font-semibold text-shadow-colored ">Abhijit Sarker</h1>
                        <div className="flex text-3xl text-[#FEA55F]">
                            <FaGreaterThanEqual />
                            <p className="ml-3 font-semibold text-shadow-colored">Web Developer</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-left">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
                        <p className="text-left">Lorem ipsum dolor sit .</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50 }} // Initial state
                animate={{ opacity: 1, y: 0 }}     // Animation state
                transition={{ duration: 1 }}       // Transition configuration
                className=' w-full h-full home-bg-blue'>

                <div className="flex items-center justify-center home-bg-green  w-full h-full">
                    <MemoryGame></MemoryGame>
                </div>

            </motion.div>

        </div >
    );
};

export default Home;