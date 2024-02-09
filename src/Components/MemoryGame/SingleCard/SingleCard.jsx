import cover from "../../../Assets/img/cover.png";
import './SingleCard.css';

const SingleCard = ({ card }) => {
    return (
        <div className='card'>
            <div className=''>
                <img className='front' src={card.src} alt="card front" />
                <img className='back' src={cover} alt="card back" />
            </div>
        </div>
    );
};

export default SingleCard;