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

    return (
        <div className='game'>
            <h1>Magic Match</h1>
            <button className='button'>New Game</button>
        </div>
    );
};

export default MemoryGame;