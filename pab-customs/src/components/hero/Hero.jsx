import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Hero.css';
import AnimatedContent from "../../misc/animatedContent/AnimatedContent";

const Hero = () => {
    return (
        <div className="heroContainer container-fluid position-relative vh-100 vw-100 d-flex align-items-top flex-column hero-section">
            <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
            >
                <div className="textContainer">
                    <h1 className="titleText">Professional Car Detailing & Tuning</h1>
                    <p className="subtitleText">
                        Experimentează prestigiul unei mașini detaliate profesional,
                        radiind eleganță și rafinament la fiecare pas.
                    </p>
                    <a href="tel:+1234567890" className="heroCall">Contactați-ne!</a>
                </div>

            </AnimatedContent>
        </div>
    );
};


export default Hero;