import PropTypes from "prop-types"

const DonationCard = ({ card }) => {
    const { image, category, title, card_bg, category_bg, color, price } = card;
    return (
        <div>
            <div style={{ backgroundColor: card_bg }} className="relative flex w-full rounded-xl  text-gray-700 shadow-md">
                <div className="relative w-1/3 overflow-hidden  text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 w-2/3">
                    <div style={{ backgroundColor: category_bg }} className="mb-2  flex items-center w-20 justify-center rounded-sm ">
                        <p style={{ color }} className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {category}
                        </p>

                    </div>
                    <p style={{ color }} className="block font-sans text-sm font-normal leading-normal text-gray-700 text-2xl font-semibold my-3 antialiased opacity-75">
                        {title}
                    </p>
                    <p style={{ color }} className="block font-sans text-sm font-normal leading-normal text-gray-700 text-3xl font-semibold antialiased opacity-75">
                        ${price}
                    </p>
                    <button style={{ backgroundColor: color }} className="text-white py-2 px-4 font-semibold rounded-sm mt-5 " >View Details</button>
                </div>
            </div>
        </div>
    )
};

DonationCard.propTypes = {
    card: PropTypes.object
}
export default DonationCard;