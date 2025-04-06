import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCards } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-cards';
import './Detailing.css';

const Exterior = () => {
    const exteriorServices = [
        {
            title: "Spălare Profesională",
            price: "250 - 300 RON",
            details: [
                "Curățare de întreținere exterior",
                "Spălare cu spumă activă",
                "Decontaminare roți și caroserie",
                "Uscare prin suflare",
                "Durata: 2 ore"
            ]
        },
        {
            title: "Polish per Element",
            price: "100-150 RON",
            details: [
                "100 Lei pentru element mic",
                "150 Lei pentru element mare"
            ]
        },
        {
            title: "Sealant Lichid",
            price: "100 RON",
            details: [
                "Protecție sintetică hidrofobă",
                "Proprietăți auto-curățare",
                "Durata: 0.5 ore"
            ]
        },
        {
            title: "Sealant Ceramic Spray",
            price: "200 - 300 RON",
            details: [
                "Protecție spray pe bază de SiO₂",
                "Durabilitate 3-6 luni",
                "Durata: 1 oră"
            ]
        },
        {
            title: "Protecție Ceramică Ewocar",
            price: "700 - 1.000 RON",
            details: [
                "Protecție 5 ani + Boost 12 luni",
                "Strat nanoscopic și hidrofob",
                "Durata: 24 ore"
            ]
        },
        {
            title: "Protecție Gtechniq Crystal",
            price: "600 - 900 RON",
            details: [
                "Protecție 3-5 ani",
                "Luciu intens și rezistență la contaminanți",
                "Durata: 24 ore"
            ]
        },
        {
            title: "Coating Ceramic Gtechniq",
            price: "500 - 800 RON",
            details: [
                "Coating hidrofob 1-2 ani",
                "Poate fi aplicat peste alte protecții",
                "Durata: 24 ore"
            ]
        },
        {
            title: "Duble Straturi Coating",
            price: "1.000 - 1.500 RON",
            details: [
                "Protecție ceramică rezistentă",
                "Aplicată pe jante și etrieri",
                "Durata: 24 ore"
            ]
        },
        {
            title: "Tratament Geamuri Laterale",
            price: "150 - 250 RON",
            details: [
                "Îmbunătățire vizibilitate și siguranță",
                "Durata: 2 ore"
            ]
        },
        {
            title: "Tratament Parbriz",
            price: "150 - 200 RON",
            details: [
                "Protecție hidrofobă 12 luni",
                "Durata: 2 ore"
            ]
        },
        {
            title: "Tratament Soft-top",
            price: "250 - 300 RON",
            details: [
                "Protecție plafon textil",
                "Durata: 1.5 ore + uscare"
            ]
        }
    ];
    return (
        <section id="detailing" className="container-fluid py-5">
            <div className="container">
                {/* Exterior Detailing Section */}
                <div className="text-center mb-5 mt-5">
                    <h2 className="detailTitle">Exterior Detailing</h2>
                    <p className="lead">
                        Redă strălucirea originală a exteriorului mașinii tale cu serviciile noastre profesionale de detailing.
                        De la spălare la ceruire, ne asigurăm că mașina ta arată ca nouă.
                    </p>
                </div>

                {/* Dropdown Table for Exterior Prices */}
                <div className="accordion accordion-desktop mb-5" id="exteriorAccordion">
                    {/* Item 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="exteriorHeadingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#exteriorCollapseOne"
                                aria-expanded="true"
                                aria-controls="exteriorCollapseOne"
                            >
                                Polish Integral 2 Pasi cu Detailing Exterior Complet
                            </button>
                        </h2>
                        <div
                            id="exteriorCollapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="exteriorHeadingOne"
                            data-bs-parent="#exteriorAccordion"
                        >
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Servicu</th>
                                            <th>Pret(Ron)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <ul>
                                                    <li>Cel mai bun tratament pe care îl putem oferi mașinii tale. Detailing-ul exterior complet este un proces de durată, cu multe beneficii.</li>
                                                    <li>Spălare caroserie cu spumă activă și șampon auto cu pH adaptat stării vopselei</li>
                                                    <li>Curățare în detaliu motor</li>
                                                    <li>Decontaminare chimică și mecanică a caroseriei</li>
                                                    <li>Corecție suprafețe vopsite și lăcuite (polish 2-3 pași)</li>
                                                    <li>Uscare prin suflare cu aer</li>
                                                    <li>Durata: 24 ore</li>
                                                </ul>
                                            </td>
                                            <td>1.200 - 1.700</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="exteriorHeadingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#exteriorCollapseTwo"
                                aria-expanded="false"
                                aria-controls="exteriorCollapseTwo"
                            >
                                Polish Integral One-Step cu Detailing Exterior Complet
                            </button>
                        </h2>
                        <div
                            id="exteriorCollapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="exteriorHeadingTwo"
                            data-bs-parent="#exteriorAccordion"
                        >
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Servicu</th>
                                            <th>Pret(Ron)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <ul>
                                                    <li>Polish-ul One-Step se pretează pentru procesele de decontaminare și corecție lac la mașinile noi sau recent revopsite:</li>
                                                    <li>Decontaminare chimică jante și anvelope</li>
                                                    <li>Curățare ornamente, sigle și grile</li>
                                                    <li>Polish One-Step cu protecție încorporată</li>
                                                    <li>Durata: 8 ore</li>
                                                </ul>
                                            </td>
                                            <td>800 - 1.300</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="exteriorHeadingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#exteriorCollapseThree"
                                aria-expanded="false"
                                aria-controls="exteriorCollapseThree"
                            >
                                Servicii Extra
                            </button>
                        </h2>
                        <div
                            id="exteriorCollapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="exteriorHeadingThree"
                            data-bs-parent="#exteriorAccordion"
                        >
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Servicu</th>
                                            <th>Detalii</th>
                                            <th>Pret(Ron)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Spălare profesională exterior (Quick detail)</td>
                                            <td>
                                                <ul>
                                                    <li>O curățare de întreținere a exteriorului mașinii:</li>
                                                    <li>Spălare cu spumă activă</li>
                                                    <li>Decontaminare chimică roți și caroserie</li>
                                                    <li>Uscare prin suflare cu aer</li>
                                                    <li>Durata: 2 ore</li>
                                                </ul>
                                            </td>
                                            <td>250 - 300</td>
                                        </tr>
                                        <tr>
                                            <td>Polish 2 pași per element</td>
                                            <td>
                                                <ul>
                                                    <li>100 Lei pentru element mic (aripi, stâlpi, bară)</li>
                                                    <li>150 Lei pentru element mare (capotă, plafon, portiere)</li>
                                                </ul>
                                            </td>
                                            <td>100-150</td>
                                        </tr>
                                        <tr>
                                            <td>Sealant lichid hidrofob caroserie și jante</td>
                                            <td>
                                                <ul>
                                                    <li>Aplicarea unui strat de protecție sintetică, cu proprietăți hidrofobe și auto-curățare.</li>
                                                    <li>Durata: 0.5 ore</li>
                                                </ul>
                                            </td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>Sealant ceramic spray hidrofob caroserie și jante</td>
                                            <td>
                                                <ul>
                                                    <li>Aplicarea unui strat de protecție spray pe bază de SiO₂, cu durabilitate de 3-6 luni.</li>
                                                    <li>Durata: 1 oră</li>
                                                </ul>
                                            </td>
                                            <td>200 - 300</td>
                                        </tr>
                                        <tr>
                                            <td>Protecție ceramică caroserie Ewocar Pro60 (5 ani) + Boost 12 luni</td>
                                            <td>
                                                <ul>
                                                    <li>Strat nanoscopic, durabil și hidrofob, ideal pentru întreținerea facilă a caroseriei.</li>
                                                    <li>Durata: 24 ore</li>
                                                </ul>
                                            </td>
                                            <td>700 - 1.000</td>
                                        </tr>
                                        <tr>
                                            <td>Protecție ceramică caroserie Gtechniq Crystal Serum Light (3-5 ani)</td>
                                            <td>
                                                <ul>
                                                    <li>Protecție ceramică de lungă durată, care oferă un luciu intens și rezistență la contaminanți.</li>
                                                    <li>Durata: 24 ore</li>
                                                </ul>
                                            </td>
                                            <td>600 - 900</td>
                                        </tr>
                                        <tr>
                                            <td>Coating ceramic caroserie Gtechniq Exo v5 (1-2 ani)</td>
                                            <td>
                                                <ul>
                                                    <li>Coating hidrofob și protector, ce poate fi aplicat ca strat suplimentar peste protecția ceramică.</li>
                                                    <li>Durata: 24 ore</li>
                                                </ul>
                                            </td>
                                            <td>500 - 800</td>
                                        </tr>
                                        <tr>
                                            <td>Două straturi coating + protecție ceramică Gtechniq CSL+EXO (5 ani)</td>
                                            <td>
                                                <ul>
                                                    <li>Protecție ceramică rezistentă la temperaturi înalte, aplicată pe jante și etrieri.</li>
                                                    <li>Durata: 24 ore</li>
                                                </ul>
                                            </td>
                                            <td>1.000 - 1.500</td>
                                        </tr>
                                        <tr>
                                            <td>Tratament hidrofob geamuri laterale și oglinzi</td>
                                            <td>
                                                <ul>
                                                    <li>Aplicare produs hidrofob, îmbunătățind vizibilitatea și siguranța.</li>
                                                    <li>Durata: 2 ore</li>
                                                </ul>
                                            </td>
                                            <td>150 - 250</td>
                                        </tr>
                                        <tr>
                                            <td>Tratament hidrofob parbriz</td>
                                            <td>
                                                <ul>
                                                    <li>Protecție hidrofobă cu durabilitate de 12 luni.</li>
                                                    <li>Durata: 2 ore</li>
                                                </ul>
                                            </td>
                                            <td>150 - 200</td>
                                        </tr>
                                        <tr>
                                            <td>Tratament hidrofob soft-top</td>
                                            <td>
                                                <ul>
                                                    <li>Protecție aplicată plafonului textil al mașinilor decapotabile.</li>
                                                    <li>Durata: 1.5 ore + timp de uscare</li>
                                                </ul>
                                            </td>
                                            <td>250 - 300</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Card for Polish Integral 2 Pasi */}
                <div className="detailingInfoCard container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Polish Integral 2 Pasi</h4>
                            <div className="d-flex justify-content-center">
                                <div className="card" style={{ width: '100%', maxWidth: '300px' }}>
                                    <div className="card-body p-3">
                                        <h6 className="card-subtitle mb-2 text-center">1.200 - 1.700 RON</h6>
                                        <div className="card-text px-2">
                                            <ul className="small ps-3">
                                                <li>Cel mai bun tratament pentru mașina ta</li>
                                                <li>Spălare cu spumă activă și șampon special</li>
                                                <li>Curățare detaliată motor</li>
                                                <li>Decontaminare chimică și mecanică</li>
                                                <li>Corecție suprafețe vopsite (polish 2-3 pași)</li>
                                                <li>Uscare prin suflare cu aer</li>
                                                <li>Durata: 24 ore</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Card for Polish Integral One-Step */}
                <div className="detailingInfoCard container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Polish Integral One-Step</h4>
                            <div className="d-flex justify-content-center">
                                <div className="card" style={{ width: '100%', maxWidth: '300px' }}>
                                    <div className="card-body p-3">
                                        <h6 className="card-subtitle mb-2 text-center">800 - 1.300 RON</h6>
                                        <div className="card-text px-2">
                                            <ul className="small ps-3">
                                                <li>Pentru mașini noi sau recent revopsite</li>
                                                <li>Decontaminare chimică jante și anvelope</li>
                                                <li>Curățare ornamente, sigle și grile</li>
                                                <li>Polish One-Step cu protecție încorporată</li>
                                                <li>Durata: 8 ore</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Swiper Carousel for Exterior Services with Cards Effect */}
                <div className="swiper container mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-4">Servicii Extra Exterior</h4>
                            <div className="swiper-service-container" style={{
                                maxWidth: '400px',
                                margin: '0 auto',
                                padding: '20px 0'
                            }}>
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="service-swiper"
                                    style={{
                                        width: '100%',
                                        height: '300px',  // Fixed height
                                        padding: '20px 0'
                                    }}
                                >
                                    {exteriorServices.map((service, index) => (
                                        <SwiperSlide key={index} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '8px',
                                            overflow: 'visible'
                                        }}>
                                            <div className="card h-100" style={{
                                                width: '100%',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                            }}>
                                                <div className="card-body p-3">
                                                    <h5 className="card-title text-center">{service.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-center text-primary">
                                                        {service.price}
                                                    </h6>
                                                    <div className="card-text px-2">
                                                        <ul className="small ps-3">
                                                            {service.details.map((detail, i) => (
                                                                <li key={i}>{detail}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Swiper Carousel for Exterior Images */}
                <div className="imgSwiper container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    }
                                }}
                                modules={[Pagination]}
                                className="exterior-swiper"
                            >
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/exterior/ext1.jpg"
                                            className="img-fluid rounded"
                                            alt="Exterior 1"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/exterior/ext2.jpg"
                                            className="img-fluid rounded"
                                            alt="Exterior 2"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/exterior/ext3.jpg"
                                            className="img-fluid rounded"
                                            alt="Exterior 3"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Exterior;