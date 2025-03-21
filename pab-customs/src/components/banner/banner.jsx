import React from "react";
import ScrollVelocity from "../../misc/scrollVelocity/ScrollVelocity"



const Banner = () => {
    return (
        <>
        <div className="bannerContainer container-fluid">
            <ScrollVelocity
                texts={['PAB CUSTOM * DETAILING * TUNING *', 'PAB CUSTOM * DETAILING * TUNING *']} 
                velocity={100} 
                className="custom-scroll-text"
            />
        </div>
        </>
    );
};

export default Banner;