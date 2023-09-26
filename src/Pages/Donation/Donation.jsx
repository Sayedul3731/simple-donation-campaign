import { useEffect, useState } from "react"
import DonationCard from "../../components/DonationCard/DonationCard";


const Donation = () => {
    const [cards, setCards] = useState([])
    const [cardsLength, setCardsLength] = useState(4)
    // const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donate'))
        if (donationItems) {
            setCards(donationItems)
        }
    }, [])
    return (
        <div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                {
                 cards.slice(0, cardsLength).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
            {
                <div  className={cardsLength === cards.length ? 'hidden' : 'flex justify-center my-10'}><button onClick={() => setCardsLength(cards.length)}
                    className="middle none center rounded-lg bg-[#FF444A] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                >
                    See All
                </button></div> 
            }
        </div>
    );
};

export default Donation;