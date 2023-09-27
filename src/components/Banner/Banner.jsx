import { useEffect, useState } from "react";
import "./Banner.css"
import { CardContext } from "../../Pages/Home/Home";
import { useContext } from "react"


const Banner = () => {

    const [previousCards, setPreviousCards] = useState([])

    const [cards, setCards] = useContext(CardContext)


    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setPreviousCards(data))
    }, [])

    const [inputValue, setInputValue] = useState('');
    const handleInputField = (e) => {
        setInputValue(e.target.value)
    }
    const handleButtonSearch = () => {
        const filteredCards = (previousCards.filter(card => card.category == inputValue));
        setCards(filteredCards)
    }
    console.log(cards.length);




    return (
        <div className="h-[50vh] w-full flex justify-center bg-slate-200 bg-blend-screen   items-center banner flex flex-col">
            <h1 className="text-2xl md:text-5xl font-bold text-black ml-5 my-5">I Grow By Helping People In Need</h1>

            <div className="relative flex h-10 w-2/3 md:w-full min-w-[200px] max-w-[24rem]">
                <input
                    value={inputValue}
                    onChange={handleInputField}
                    type="text"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    required
                />
                <button onClick={handleButtonSearch}
                    className="!absolute right-1 top-1 z-10 select-none rounded bg-[#FF444A] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Search
                </button>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Search here...
                </label>
            </div>
        </div>
    );
};

export default Banner;