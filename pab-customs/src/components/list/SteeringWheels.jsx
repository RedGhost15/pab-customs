import React, { useState } from "react";
import "./SteeringWheels.css";

const steeringWheelData = {
    BMW: {
        images: ["/images/bmw1.jpg", "/images/bmw2.jpg", "/images/bmw3.jpg"],
        description: "Compatible with BMW 3 Series, 5 Series, M models.",
    },
    Mercedes: {
        images: ["/images/mercedes1.jpg", "/images/mercedes2.jpg", "/images/mercedes3.jpg"],
        description: "Designed for Mercedes C-Class, E-Class, AMG series.",
    },
    Audi: {
        images: ["/images/audi1.jpg", "/images/audi2.jpg", "/images/audi3.jpg"],
        description: "Perfect fit for Audi A4, A6, RS models.",
    },
    Porsche: {
        images: ["/images/porsche1.jpg", "/images/porsche2.jpg", "/images/porsche3.jpg"],
        description: "Tailored for Porsche 911, Panamera, Cayenne.",
    },
};

const SteeringWheelSection = () => {
    const [selectedBrand, setSelectedBrand] = useState("BMW");

    return (
        <div className="container steering-wheel-section">
            <h2 className="section-title">Choose Your Steering Wheel</h2>
            <div className="row justify-content-center">
                {Object.keys(steeringWheelData).map((brand) => (
                    <div key={brand} className="col-6 col-md-3 text-center">
                        <button
                            className={`btn dropdown-btn ${selectedBrand === brand ? "btn-primary" : "btn-dark"}`}
                            onClick={() => setSelectedBrand(brand)}
                        >
                            {brand}
                        </button>
                    </div>
                ))}
            </div>

            <div className="carousel-container">
                <h3 className="brand-title">{selectedBrand} Steering Wheels</h3>
                <p className="brand-description">{steeringWheelData[selectedBrand].description}</p>
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {steeringWheelData[selectedBrand].images.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img className="d-block w-100" src={image} alt={`${selectedBrand} Wheel ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SteeringWheelSection;
