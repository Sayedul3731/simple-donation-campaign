import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Cards = ({cards}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 mx-auto'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array
}
export default Cards;