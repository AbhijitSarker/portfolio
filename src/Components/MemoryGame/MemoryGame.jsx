import { useState } from 'react';
import './MemoryGame.css';

const cardImages = [
    { "src": "/src/Assets/img/helmet-1.png" },
    { "src": "/src/Assets/img/potion-1.png" },
    { "src": "/src/Assets/img/ring-1.png" },
    { "src": "/src/Assets/img/scroll-1.png" },
    { "src": "/src/Assets/img/shield-1.png" },
    { "src": "/src/Assets/img/sword-1.png" },
]

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);


    //shuffle the cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - .5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards);
        setTurns(0);
    }
    console.log(cards, turns)

    return (
        <div className='game'>
            <h1>Magic Match</h1>
            <button onClick={shuffleCards} className='button'>New Game</button>
        </div>
    );
};

export default MemoryGame;