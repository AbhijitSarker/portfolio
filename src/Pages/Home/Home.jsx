import MemoryGame from "../../Components/MemoryGame/MemoryGame";

const Home = () => {



    return (
        <div className='h-full w-full flex '>

            <div className='w-full h-full home-bg-green'>
                <h1>Hello, I am Abhijit Sarker</h1>
            </div>

            <div className='w-full h-full home-bg-blue'>
                <MemoryGame></MemoryGame>
            </div>

        </div>
    );
};

export default Home;