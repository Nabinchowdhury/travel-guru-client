import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelCard from './HotelCard/HotelCard';

const Hotels = () => {
    const hotels = useLoaderData()
    return (
        <div className='flex  flex-col md:flex-row bg-slate-200 lg:p-20'>
            <div className=' w-full '>
                {
                    hotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel}></HotelCard>)
                }
            </div>
            <div className=' w-full '>

            </div>
        </div>
    );
};

export default Hotels;