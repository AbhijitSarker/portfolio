import { useEffect, useState } from 'react';
import './MemoryGame.css';
import SingleCard from './SingleCard/SingleCard';

const cardImages = [
    { "src": "/src/Assets/img/helmet-1.png", matched: false },
    { "src": "/src/Assets/img/potion-1.png", matched: false },
    { "src": "/src/Assets/img/ring-1.png", matched: false },
    { "src": "/src/Assets/img/scroll-1.png", matched: false },
    { "src": "/src/Assets/img/shield-1.png", matched: false },
    { "src": "/src/Assets/img/sword-1.png", matched: false },
]

const MemoryGame = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    //shuffle the cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    }

    //handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    //compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card;
                        }
                    })
                })
                resetTurn();
            } else {
                setTimeout(() => { resetTurn() }, 1000);
            }

        }
    }, [choiceOne, choiceTwo])

    useEffect(() => {
        shuffleCards()
    }, [])

    //reset choices and increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurn => prevTurn + 1)
        setDisabled(false);
    }

    return (
        <div className='flex flex-col items-center justify-center h-full home-bg-green'>
            <div>
                <h1 className='mx-auto'>Magic Match</h1>
                <button onClick={shuffleCards} className='button'>New Game</button>
                <p>Turns: {turns}</p>
            </div>
            <div className="grid grid-cols-4 border gap-2 w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] 3xl:w-[800px] mx-auto">
                {
                    cards.map((card) => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled}
                        >
                        </SingleCard>
                    ))
                }
            </div>
        </div>
    );
};

export default MemoryGame;