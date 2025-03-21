import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Hero.css';

const Hero = () => {
    return (
        <div className="heroContainer container-fluid position-relative vh-100 vw-100 d-flex align-items-top flex-column hero-section">
            <h1 className="titleText">Luxury Car Detailing</h1>
            <p className="subtitleText">
                Experience the prestige of a professionally detailed car,
                radiating elegance and refinement at every turn.
            </p>
            <a href="#" className="btn btn-primary mt-3">Let's connect</a>
        </div>
    );
};


export default Hero;