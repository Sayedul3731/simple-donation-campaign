import { useEffect, useState } from "react"
import DonationCard from "../../components/DonationCard/DonationCard";


const Donation = () => {
    const [cards, setCards] = useState([])
    const [isShow, setIsShow] = useState(false)

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
                    isShow ? cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>) : cards.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
            {
                cards.length >= 4 ? <div className="flex justify-center my-10"><button onClick={() => setIsShow(!isShow)}
                    className="middle none center rounded-lg bg-[#FF444A] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                >
                    See All
                </button></div> : console.log('no')
            }
        </div>
    );
};

export default Donation;