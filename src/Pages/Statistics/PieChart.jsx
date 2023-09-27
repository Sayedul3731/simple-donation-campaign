import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const Chart = () => {
    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const [cards, setCards] = useState([])
    const [donateCards, setDonateCards] = useState([])


    const chartArray = []

    function createObject(key, value) {
        const obj = {};
        obj[key] = value;
        return obj;
    }
    const fruitsObject1 = createObject('length', cards.length);
    const fruitsObject2 = createObject('length', donateCards.length);
    chartArray.push(fruitsObject1)
    chartArray.push(fruitsObject2)

    useEffect(() => {
        fetch('/donation.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donate'))
        if (donationItems) {
            setDonateCards(donationItems)
        }
    }, [])

    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <PieChart width={400} height={400}>
                <Pie
                    data={chartArray}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    dataKey="length"

                >
                    {cards.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='flex flex-col md:flex-row justify-center gap-5 mt-5'>
                <div className='flex  items-center gap-5'>
                    <h3>Your Donation</h3>
                    <div className='w-28 h-4 bg-[#00C49F]'>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <h3>Total Donation</h3>
                    <div className='w-28 h-4 bg-[#FF444A]'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;