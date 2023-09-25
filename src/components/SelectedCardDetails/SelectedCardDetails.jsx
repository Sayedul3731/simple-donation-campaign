import PropTypes from "prop-types"
import "./SelectedCardDetails.css"

const SelectedCardDetails = ({ card }) => {
    const { price, description, title, image, color } = card;
    return (
        <div>
            <h1>Card Details</h1>
            <div className="relative flex w-full md:h-[80vh] my-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative h-[500px] w-full m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className="h-full w-full object-cover"
                        src={image}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="w-full h-24 md:h-32 absolute mt-48 md:mt-56 lg:mt-[374px] cardOverlay">
                    <button style={{ backgroundColor: color}} className="text-white py-2 px-4 font-semibold rounded-sm m-8 md:m-12" >Donate ${price}</button>
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
SelectedCardDetails.propTypes = {
    card: PropTypes.object
}
export default SelectedCardDetails;