import cover from "../../../Assets/img/cover.png";
import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped }) => {
    const handleClick = () => {
        handleChoice(card);
    }

    return (
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt="card front" />
                <img
                    className='back'
                    src={cover}
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    );
};

export default SingleCard;