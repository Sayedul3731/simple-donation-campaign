import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedCardDetails from "../SelectedCardDetails/SelectedCardDetails";


const CardDetails = () => {

    const [card, setCard] = useState({})
    const cards = useLoaderData()
    const {id} = useParams()

    useEffect( () => {
        const findCard = cards.find(card => card.id === id)
        setCard(findCard) 
    },[id, cards])
    return (
        <div className="h-[60vh]">
            {
                <SelectedCardDetails card={card}></SelectedCardDetails>
            }
        </div>
    );
};

export default CardDetails;