import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const { image, category, title, card_bg, category_bg, color } = card;
    return (
        <div>
            <div style={{ backgroundColor: card_bg}} className="relative flex h-96 flex-col rounded-xl  text-gray-700 shadow-md">
                <div className="relative h-96 overflow-hidden  text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div style={{backgroundColor: category_bg}} className="mb-2  flex items-center w-20 justify-center rounded-sm ">
                        <p style={{color}} className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                           {category}
                        </p>
                     
                    </div>
                    <p style={{color}} className="block font-sans text-sm font-normal leading-normal text-gray-700 text-2xl font-semibold antialiased opacity-75">
                       {title}
                    </p>
                </div>
                <div className="p-6 pt-0">
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}
export default Card;