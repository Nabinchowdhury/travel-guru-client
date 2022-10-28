import React, { createContext, useState } from 'react';
import pic from "../../images/Rectangle 1.png"

export const BgContext = createContext()

const BackgroundContext = ({ children }) => {
    const [bg, setBg] = useState("https://sgp1.digitaloceanspaces.com/cosmosgroup/news/3985435_Saunt%20Martin.jpeg")
    // console.log(bg)
    const bgInfo = { bg, setBg }


    return (
        <BgContext.Provider value={bgInfo}>
            {children}
        </BgContext.Provider>
    );
};

export default BackgroundContext;