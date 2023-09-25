import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const [card, setCard] = useState({})
    const cards = useLoaderData()
    const {id} = useParams()

    useEffect( () => {
        const findCard = cards.find(card => card.id === id)
        setCard(findCard) 
    },[id, cards])
    console.log(card);
    console.log(id);
    return (
        <div>
            Card Details
        </div>
    );
};

export default CardDetails;