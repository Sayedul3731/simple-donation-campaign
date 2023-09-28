// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import { createContext } from "react"

export const CardContext = createContext()
const Home = () => {

    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            <CardContext.Provider value={[cards, setCards]}>
                <Banner></Banner>
                <Cards cards={cards}></Cards>
            </CardContext.Provider>
        </div>
    );
};

export default Home;