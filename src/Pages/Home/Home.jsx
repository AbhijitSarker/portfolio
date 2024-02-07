import React, { useEffect, useState } from 'react';
import green from '../../Assets/bg/Green.png';
import blue from '../../Assets/bg/Blue.png';
import TicTacToe from '../../Components/TicTacToe/TicTacToe';
import SnakeGame from '../../Components/SnakeGame/SnakeGame';
const Home = () => {

    return (
        <div className='relative z-auto h-full w-full flex '>
            <div className='w-full h-full home-bg-green'>
                <h1>Hello, I am Abhijit Sarker</h1>
            </div>
            <div className='w-full h-full home-bg-blue'>

            </div>

            {/* <img className='absolute h-full z-10 right-0 w-full top-0' src={green} alt="" />
            <img className='absolute h-full right-0 top-0 w-full' src={blue} alt="" /> */}

        </div>

    );
};

export default Home;