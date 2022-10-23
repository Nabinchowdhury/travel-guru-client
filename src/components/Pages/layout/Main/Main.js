import React, { createContext, useState } from 'react';
import "./Main.css"
import { Outlet } from 'react-router-dom';
import Header from '../../../Header/Header';


export const destRouteContext = createContext()

const Main = () => {

    const [destinationId, setDestinationId] = useState("1")

    const destRoute = { destinationId, setDestinationId }

    return (
        <div className="bgSet h-screen text-light" >
            <destRouteContext.Provider value={destRoute}>
                <Header></Header>
                <Outlet></Outlet>
            </destRouteContext.Provider>
        </div>
    );
};

export default Main;