import { useLoaderData } from "react-router-dom";


const CardDetails = () => {

    const cards = useLoaderData()
    console.log(cards);
    return (
        <div>
            Card Details
        </div>
    );
};

export default CardDetails;