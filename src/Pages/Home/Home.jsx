import MemoryGame from "../../Components/MemoryGame/MemoryGame";

const Home = () => {

    return (
        <div className='h-full w-full flex  flex-col md:flex-row'>

            <div className="w-full h-full home-bg-green">
                <div className='w-full h-full pl-20 home-bg-blue flex flex-col justify-center items-start'>

                    <h1 className="text-white text-left">Hello, I am</h1>
                    <h1 className="md:text-5xl lg:text-6xl xl:text-6xl text-white font-semibold drop-shadow-sm ">Abhijit Sarker</h1>
                    <p className="text-3xl font-semibold text-blue-g">Web Developer</p>

                </div>
            </div>

            <div className=' flex items-center justify-center w-full h-full home-bg-blue'>
                <MemoryGame></MemoryGame>
            </div>

        </div>
    );
};

export default Home;