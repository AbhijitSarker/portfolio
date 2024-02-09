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

    console.log(cards)
    //reset choices and increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurn => prevTurn + 1)
        setDisabled(false);
    }

    return (
        <div className='game h-full'>
            <h1>Magic Match</h1>
            <button onClick={shuffleCards} className='button'>New Game</button>
            <p>Turns: {turns}</p>
            <div className="card-grid">
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