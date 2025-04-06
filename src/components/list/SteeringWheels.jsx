import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import './SteeringWheels.css';

const brandLogos = {
    BMW: "/partners/33.png",
    Audi: "/partners/1.png",
    Porsche: "/partners/13.png",
    VW: "/partners/15.png"
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

    return (
        <section id="volane" className="steering-wheels-section">
            <div className="brand-selector">
                <h2 className="section-title">Volane Premium</h2>
                <div className="brand-buttons">
                    {Object.keys(steeringWheelData).map((brand) => (
                        <button
                            key={brand}
                            className={`brand-button ${selectedBrand === brand ? 'active' : ''}`}
                            onClick={() => setSelectedBrand(brand)}
                            aria-label={brand}
                        >
                            <img
                                src={brandLogos[brand]}
                                alt={brand}
                                className="brand-logo"
                            />
                            {brand} {/* Add the brand name text */}
                            <span className="neon-glow"></span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="carousel-container">
                <h3 className="brand-name">{selectedBrand}</h3>
                <h5 className="brand-comp">{steeringWheelData[selectedBrand].modele}</h5>
                <p className="brand-description">{steeringWheelData[selectedBrand].description}</p>

                <Swiper
                    grabCursor={true}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    className="mySwiper"
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                >
                    {steeringWheelData[selectedBrand].images.map((img, index) => (
                        <SwiperSlide key={index} className="carousel-slide">
                            <img
                                src={img.src}
                                alt={`${selectedBrand} steering wheel`}
                                className="wheel-image"
                            />
                            <div className="style-number">{img.styleNumber}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="customization-info">
                <h3 className="info-title">Personalizare Volan pentru Performanță Maximă</h3>

                <div className="info-grid">
                    <div className="info-card">
                        <h4>Materiale Exclusive</h4>
                        <p>Volanele noastre sunt realizate din piele italiană premium...</p>
                        <span className="neon-glow"></span>
                    </div>

                    <div className="info-card">
                        <h4>Design Sport</h4>
                        <p>Profil grosier, zone perforate și contururi ergonomice...</p>
                        <span className="neon-glow"></span>
                    </div>

                    <div className="info-card">
                        <h4>Funcționalități Avansate</h4>
                        <p>Opțional: pedale schimbator, comenzi multimedia...</p>
                        <span className="neon-glow"></span>
                    </div>

                    <div className="info-card">
                        <h4>Adaptare Perfectă</h4>
                        <p>Fiecare volan este ajustat nu doar la modelul mașinii...</p>
                        <span className="neon-glow"></span>
                    </div>
                </div>

                <div className="full-width-info">
                    <p>Transformă-ți mașina într-o adevărată extensie a personalității tale...</p>
                    <a href="tel:+1234567890" className="heroCall">Contactați-ne!</a>
                </div>
            </div>
        </section>
    );
};

export default SteeringWheels;
