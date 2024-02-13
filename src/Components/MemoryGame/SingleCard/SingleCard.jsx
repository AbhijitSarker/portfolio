import cover from "../../../Assets/img/cover.svg";
import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
        <div className='card shadow-xl hover:scale-105 ease-in-out duration-200'>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={card.img} alt="card front" />
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