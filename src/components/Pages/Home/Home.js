import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DestinationCard from '../Destination/DestinationCard/DestinationCard';
import { FaArrowRight } from 'react-icons/fa';
import { destRouteContext } from '../layout/Main/Main';

const Home = () => {
    const destinations = useLoaderData()
    const [showDestination, setShowDestination] = useState({})
    const navigate = useNavigate()
    const { setDestinationId } = useContext(destRouteContext)

    useEffect(() => {
        fetch(`http://localhost:5000/destination/1`)
            .then(res => res.json())
            .then(data => setShowDestination(data))
    }, [])

    const handleBooking = () => {
        setDestinationId(showDestination.id)
        navigate(`/destination/${showDestination.id}`)
    }

    return (
        <div className='grid cols-1 lg:grid-cols-5 gap-4 md:m-20'>
            <div className='lg:col-span-2 p-2 sm:px-5 md:mx-10 lg:mx-14 text-left'>
                <h1 className='text-6xl font-serif italic mb-5'>{showDestination?.destination}</h1>
                <p className='text-xl font-mono mb-5 text-justify'>{showDestination?.description?.slice(0, 130) + "..."}</p>
                <button className="btn btn-warning fw-bold px-4" onClick={handleBooking}>Booking <FaArrowRight className='inline ms-2'></FaArrowRight> </button>
            </div>
            <div className='lg:col-span-3'>
                <div className='grid md:grid-cols-3 gap-4 '>
                    {
                        destinations.map(each => <DestinationCard key={each.id} eachDestination={each} setShowDestination={setShowDestination}></DestinationCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;