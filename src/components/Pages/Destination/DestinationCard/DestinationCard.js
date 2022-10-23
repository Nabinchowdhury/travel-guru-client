import React, { useState } from 'react';


const DestinationCard = ({ eachDestination, setShowDestination }) => {
    // console.log(eachDestination)
    const { id, destination, image, description } = eachDestination

    const showDestination = (selectedId) => {
        fetch(`http://localhost:5000/destination/${selectedId}`)
            .then(res => res.json())
            .then(data => setShowDestination(data))
    }

    return (
        <div className='card card-compact shadow-xl bg-black no-underline text-white hover:cursor-pointer hover:border-2 hover:border-yellow-500' onClick={() => { showDestination(id) }}>
            <img src={image} alt="Shoes" className='h-72' />
            <div className="card-body">
                <h6 className="card-title" >{destination}</h6>
            </div>
        </div >
    );
};

export default DestinationCard;


