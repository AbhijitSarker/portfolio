import cover from "../../../Assets/img/cover.svg";
import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {

            handleChoice(card);
        }
    }

    return (
        <div className='card shadow-xl'>
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