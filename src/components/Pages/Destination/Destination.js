import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Destination = () => {
    const destination = useLoaderData()
    console.log(destination)
    return (
        <div className='grid cols-1 lg:grid-cols-2 gap-4 sm:mt-5 md:mt-32 lg:mx-20 '>
            <div className='md:col-span-1 p-2 sm:px-5 md:mx-10 lg:mx-14 text-left'>
                <h1 className='text-6xl font-serif italic md:mb-5'>{destination?.destination}</h1>
                <p className='text-xl font-mono mb-5 text-justify'>{destination?.description}</p>
            </div>



            <div className='md:col-span-1 '>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <div className="card-body  text-center">
                        <div className="form-control border-white fw-bold font-sans">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" value="CHITTAGONG" className="input  w-full bg-gray-200 " disabled />
                        </div>
                        <div className="form-control border-white fw-bold font-sans">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" value={destination?.destination} className="input  w-full bg-gray-200 " disabled />
                        </div>

                        <div className="form-control border-white mt-3">
                            <button className="btn btn-warning w-full fw-bold">Start Booking</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Destination;