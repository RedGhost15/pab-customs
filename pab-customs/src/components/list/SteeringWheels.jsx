import React, { useState } from 'react';
import './SteeringWheels.css';

const brandLogos = {
    BMW: "/logos/bmw-logo.png",
    Audi: "/logos/audi-logo.png",
    Porsche: "/logos/porsche-logo.png",
    VW: "/logos/vw-logo.png"
};

const steeringWheelData = {
    BMW: {
        images: [
            { src: "/volane/bmwV1.png", styleNumber: "BMW-SW001" },
            { src: "/volane/bmwV2.png", styleNumber: "BMW-SW002" },
            { src: "/volane/bmwV3.png", styleNumber: "BMW-SW003" },
            { src: "/volane/bmwV4.png", styleNumber: "BMW-SW004" },
            { src: "/volane/bmwV5.png", styleNumber: "BMW-SW005" },
            { src: "/volane/bmwV6.png", styleNumber: "BMW-SW006" }
        ],
        modele: "Modele compatibile:",
        description: "E-series | F-series | G-series"
    },
    Audi: {
        images: [
            { src: "/volane/audiV1.png", styleNumber: "Audi-SW001" },
            { src: "/volane/audiV2.png", styleNumber: "Audi-SW002" },
            { src: "/volane/audiV3.png", styleNumber: "Audi-SW003" },
            { src: "/volane/audiV4.png", styleNumber: "Audi-SW004" },
            { src: "/volane/audiV5.png", styleNumber: "Audi-SW005" },
            { src: "/volane/audiV6.png", styleNumber: "Audi-SW006" }
        ],
        modele: "Modele compatibile:",
        description: "A1: 2015-2018 | A3: 2015-2020 | A4:2015-2020 | A5:2015-2019 | A6:2015-2018 | A7:2015-2018 | A8:2015-2022 | Q2:2017-2020 | Q3:2015-2021 | Q4 e-tron:2021-2024 | Q5 e-tron:2021-2024 | Q7:2015-2020 | Q8:2019-2021"
    },
    Porsche: {
        images: [
            { src: "/volane/porV1.png", styleNumber: "Porsche-SW001" },
            { src: "/volane/porV2.png", styleNumber: "Porsche-SW002" },
            { src: "/volane/porV3.png", styleNumber: "Porsche-SW003" },
            { src: "/volane/porV4.png", styleNumber: "Porsche-SW004" },
            { src: "/volane/porV5.png", styleNumber: "Porsche-SW005" },
            { src: "/volane/porV6.png", styleNumber: "Porsche-SW006" }
        ],
        modele: "Modele compatibile:",
        description: "911:2005-2018 | 718:2016-2020 | 918:2010-2016 | Cayman:2005-2016 | Boxter:2004-2016 | Panamera:2010-2020 | Cayenne:2006-2021 | Macan:2014-2021 | Taycan:2019-2021"
    },
    VW: {
        images: [
            { src: "/volane/vwV1.png", styleNumber: "VW-SW001" },
            { src: "/volane/vwV2.png", styleNumber: "VW-SW002" },
            { src: "/volane/vwV3.png", styleNumber: "VW-SW003" },
            { src: "/volane/vwV4.png", styleNumber: "VW-SW004" },
            { src: "/volane/vwV5.png", styleNumber: "VW-SW005" },
            { src: "/volane/vwV6.png", styleNumber: "VW-SW006" }
        ],
        modele: "Modele compatibile:",
        description: "Golf Mk6 / Mk7 / Mk7.5 / Mk8 | Polo:209-2022 | Passat B6 / B7 / B8 / B9 | Passat CC | Artheon | Tiguan | Touareg | Scirocco | Caddy | Transporter"
    }
};

const SteeringWheels = () => {
    const [selectedBrand, setSelectedBrand] = useState('BMW');
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prev =>
            (prev + 1) % steeringWheelData[selectedBrand].images.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prev =>
            prev === 0 ? steeringWheelData[selectedBrand].images.length - 1 : prev - 1
        );
    };

    const getVisibleImages = () => {
        const images = steeringWheelData[selectedBrand].images;
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        const nextIndex = (currentIndex + 1) % images.length;

        return [
            images[prevIndex],
            images[currentIndex],
            images[nextIndex]
        ];
    };

    return (
        <section id='volane' className="steering-wheels-section">
            <div className="brand-selector">
                <h2 className="section-title">Volane Premium</h2>
                <div className="brand-buttons">
                    {Object.keys(steeringWheelData).map(brand => (
                        <button
                            key={brand}
                            className={`brand-button ${selectedBrand === brand ? 'active' : ''}`}
                            onClick={() => {
                                setSelectedBrand(brand);
                                setCurrentIndex(0);
                            }}
                            aria-label={brand}
                        >
                            <img
                                src={brandLogos[brand]}
                                alt={brand}
                                className="brand-logo"
                            />
                            <span className="neon-glow"></span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="carousel-container">
                <h3 className="brand-name">{selectedBrand}</h3>
                <h5 className="brand-comp">{steeringWheelData[selectedBrand].modele}</h5>
                <p className="brand-description">{steeringWheelData[selectedBrand].description}</p>

                <div className="carousel">
                    <button className="nav-button prev" onClick={prevSlide}>
                        <ChevronLeft />
                    </button>

                    <div className="carousel-track">
                        {getVisibleImages().map((img, index) => (
                            <div
                                key={`${img.src}-${index}`}
                                className={`carousel-slide ${index === 1 ? 'center-slide' : 'side-slide'}`}
                            >
                                <img
                                    src={img.src}
                                    alt={`${selectedBrand} steering wheel`}
                                    className="wheel-image"
                                />
                                <div className="style-number">{img.styleNumber}</div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-button next" onClick={nextSlide}>
                        <ChevronRight />
                    </button>
                </div>
            </div>

            <div className="customization-info">
                <h3 className="info-title">Personalizare Volan pentru Performanță Maximă</h3>

                <div className="info-grid">
                    <div className="info-card">
                        <h4>Materiale Exclusive</h4>
                        <p>Volanele noastre sunt realizate din piele italiană premium, alcantara sport sau combinații personalizate, oferind aderență perfectă și senzație premium.</p>
                        <span className="neon-glow"></span>
                    </div>

                    <div className="info-card">
                        <h4>Design Sport</h4>
                        <p>Profil grosier, zone perforate și contururi ergonomice pentru control precis în viraje rapide și condus dinamic.</p>
                        <span className="neon-glow"></span>
                    </div>

                    <div className="info-card">
                        <h4>Funcționalități Avansate</h4>
                        <p>Opțional: pedale schimbator, comenzi multimedia, display digital, iluminare LED și multe altele.</p>
                        <span className="neon-glow"></span>
                    </div>

                    <div className="info-card">
                        <h4>Adaptare Perfectă</h4>
                        <p>Fiecare volan este ajustat nu doar la modelul mașinii, ci și la stilul tău de condus, asigurând confort și control.</p>
                        <span className="neon-glow"></span>
                    </div>
                </div>

                <div className="full-width-info">
                    <p>Transformă-ți mașina într-o adevărată extensie a personalității tale cu un volan customizat. Toate produsele noastre sunt testate în condiții extreme și vin cu garanție extinsă. Contactează-ne pentru o consultanță personalizată și pentru a afla cum poți îmbunătăți experiența ta de condus.</p>
                    <a href="tel:+1234567890" className="heroCall">Contactați-ne!</a>
                </div>
            </div>
        </section>
    );
};

const ChevronLeft = () => (
    <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill="white" />
    </svg>
);

const ChevronRight = () => (
    <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="white" />
    </svg>
);

export default SteeringWheels;