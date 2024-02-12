import { useEffect, useState } from 'react';
import './MemoryGame.css';
import SingleCard from './SingleCard/SingleCard';
import { useAnimation, motion } from 'framer-motion';

const cardImages = [
    { "src": "/src/Assets/img/helmet-1.png", matched: false },
    { "src": "/src/Assets/img/potion-1.png", matched: false },
    { "src": "/src/Assets/img/ring-1.png", matched: false },
    { "src": "/src/Assets/img/scroll-1.png", matched: false },
    { "src": "/src/Assets/img/shield-1.png", matched: false },
    { "src": "/src/Assets/img/sword-1.png", matched: false },
]

const MemoryGame = () => {

    //framer motion
    const controls = useAnimation();

    const startAnimation = async () => {
        // Start animation to move button to the right
        await controls.start({ y: -10, opacity: 0 });

        // Reset button position and opacity, with a fade-in effect
        await controls.start({ y: 0, opacity: 1 });
    };

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
        startAnimation()
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
        setChoiceTwo(null); marqu
        setTurns(prevTurn => prevTurn + 1)
        setDisabled(false);
    }

    return (
        <div className='rounded-lg  p-8 game-bg shadow-2xl shadow-black text-white w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] 3xl:w-[600px]'>

            <div className='mb-5 '>
                <h1 className='mx-auto text-3xl text-shadow-colored'>Play Magic Memory</h1>
                <p className='text-shadow-colored'>Jog your memory in seconds</p>
            </div>
            <div className='rounded-lg shadow-inner shadow-black p-5 game-bg2'>
                <motion.div animate={controls}
                    className="grid grid-cols-4 gap-2  mx-auto">
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
                </motion.div>
                <div className='flex mt-5 items-center justify-between'>
                    <h3 className='drop-shadow-sm'>Turns: {turns}</h3>
                    <button onClick={shuffleCards} className='bg-[#FEA55F] rounded-lg px-4 py-1 text-black shadow-md shadow-black hover:bg-[#FFAC6B]'>new-game</button>
                </div>
            </div>
        </div >
    );
};

export default MemoryGame;