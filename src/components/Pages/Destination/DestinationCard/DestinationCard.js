import React, { useContext } from 'react';
import { BgContext } from '../../../../contexts/BackgroundContext/BackgroundContext';
import { destRouteContext } from '../../layout/Main/Main';


const DestinationCard = ({ eachDestination, setShowDestination }) => {
    // console.log(eachDestination)
    const { id, destination, image } = eachDestination
    console.log(image)
    const { setBg } = useContext(BgContext)
    const { setDestinationId } = useContext(destRouteContext)
    const showDestination = (selectedId) => {
        fetch(`http://localhost:5000/destination/${selectedId}`)
            .then(res => res.json())
            .then(data => setShowDestination(data))
    }

    return (
        <div className='card card-compact shadow-xl bg-black no-underline text-white hover:cursor-pointer border-2 border-transparent hover:border-yellow-500' onClick={() => { showDestination(id); setBg(image); setDestinationId(id) }}>
            <img src={image} alt="Shoes" className='h-80 relative' />
            <div className="card-body absolute bottom-0  py-0">
                <h6 className="card-title mb-2" >{destination}</h6>
            </div>

        </div >
    );
};

export default DestinationCard;


