import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCards } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-cards';
import './Detailing.css';

const Interior = () => {
    const extraServices = [
        {
            title: "Protecție Leather Guard",
            price: "300 - 400 RON",
            details: [
                "Aplicarea a două straturi de Leather Guard",
                "Durabilitate: 3-12 luni",
                "Necesită Detailing Interior Complet",
                "Durata: 2 ore"
            ]
        },
        {
            title: "Protecție Ceramică Piele",
            price: "400 - 700 RON",
            details: [
                "Protecție ceramică semi-permanentă",
                "Proprietăți hidrofobe și anti-UV",
                "Necesită Detailing Interior Complet",
                "Durata: 4 ore"
            ]
        },
        {
            title: "Tratament Hidrofob Stofă",
            price: "300 - 400 RON",
            details: [
                "Impermeabilizare materiale textile",
                "Previne pătarea",
                "Necesită Detailing Interior Complet",
                "Durata: 3 ore + uscare"
            ]
        },
        {
            title: "Tratament Mixt",
            price: "300 - 700 RON",
            details: [
                "Tratament individual pentru fiecare suprafață",
                "Proprietăți hidrofobe",
                "Necesită Detailing Interior Complet",
                "Durata: 3 ore + uscare"
            ]
        },
        {
            title: "Tratament Covorașe",
            price: "100 RON",
            details: [
                "Impermeabilizare covorașe textile",
                "Necesită Detailing Interior",
                "Durata: 1 oră + uscare"
            ]
        },
        {
            title: "Protecție Plastice",
            price: "300 - 500 RON",
            details: [
                "Protecție împotriva UV și murdărie",
                "Necesită minim Quick Detail Interior",
                "Durata: 2 ore"
            ]
        },
        {
            title: "Ozonificare",
            price: "100 RON",
            details: [
                "Elimină mirosurile neplăcute",
                "Distruge bacteriile și virusurile"
            ]
        },
    ];

    return (
        <section id="detailing" className="container-fluid py-5">
            <div className="container">
                {/* Interior Detailing Section */}
                <div className="text-center mb-5">
                    <h2 className="detailTitle">Interior Detailing</h2>
                    <p className="lead">
                        Revitalizează interiorul mașinii tale cu serviciile noastre premium de detailing.
                        De la curățare în profunzime la eliminarea mirosurilor, redăm luxul și confortul vehiculului tău.
                    </p>
                </div>

                {/* Dropdown Table for Interior Prices */}
                <div className="accordion accordion-desktop mb-5" id="interiorAccordion">
                    {/* Item 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="interiorHeadingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#interiorCollapseOne"
                                aria-expanded="true"
                                aria-controls="interiorCollapseOne"
                            >
                                Detailing Interior Complet
                            </button>
                        </h2>
                        <div
                            id="interiorCollapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="interiorHeadingOne"
                            data-bs-parent="#interiorAccordion"
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
                                                    <li>Suflare cu aer și aspirare praf din toate compartimentele</li>
                                                    <li>Curățare în profunzime a scaunelor, mochetei, covorașelor și portbagajului cu injecție-extracție</li>
                                                    <li>Degresare a elementelor din piele, textil, plastic și plafon</li>
                                                    <li>Curățare completă a geamurilor interior/exterior, display-urilor și ornamentelor</li>
                                                    <li>Curățare a zonelor interioare ale pragurilor ușilor și portbagajului</li>
                                                    <li>Hidratare a elementelor din piele</li>
                                                    <li>Tratament de revitalizare a pieselor din plastic</li>
                                                    <li>Ozonificare interior</li>
                                                    <li>Igienizare habitaclu cu ozon</li>
                                                    <li>Spălare exterior cu spumă activă, șampon pH neutru și uscare</li>
                                                    <li>Durata: 24 ore (include uscarea completă a tapițeriilor)</li>
                                                </ul>
                                            </td>
                                            <td>700 - 1.400</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="interiorHeadingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#interiorCollapseTwo"
                                aria-expanded="false"
                                aria-controls="interiorCollapseTwo"
                            >
                                Detailing Interior Rapid (Quick)
                            </button>
                        </h2>
                        <div
                            id="interiorCollapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="interiorHeadingTwo"
                            data-bs-parent="#interiorAccordion"
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
                                                    <li>Suflare cu aer și aspirare praf din toate compartimentele</li>
                                                    <li>Curățare a scaunelor, covorașelor și portbagajului</li>
                                                    <li>Curățare a elementelor din piele, textil și plastic</li>
                                                    <li>Curățare completă a geamurilor interior/exterior, display-urilor și ornamentelor</li>
                                                    <li>Durata: 1 oră</li>
                                                </ul>
                                            </td>
                                            <td>100 - 250</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="interiorHeadingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#interiorCollapseThree"
                                aria-expanded="false"
                                aria-controls="interiorCollapseThree"
                            >
                                Servicii Extra
                            </button>
                        </h2>
                        <div
                            id="interiorCollapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="interiorHeadingThree"
                            data-bs-parent="#interiorAccordion"
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
                                            <td>Aplicare Protecție Leather Guard pentru Tapițerie din Piele</td>
                                            <td>
                                                <ul>
                                                    <li>Aplicarea a două straturi de Leather Guard la interval de minim 1 oră.</li>
                                                    <li>Durabilitate: 3-12 luni, în funcție de gradul de uzură.</li>
                                                    <li>Notă: Necesită Detailing Interior Complet.</li>
                                                    <li>Durata: 2 ore</li>
                                                </ul>
                                            </td>
                                            <td>300 - 400</td>
                                        </tr>
                                        <tr>
                                            <td>Aplicare Protecție Ceramică pentru Tapițerie din Piele</td>
                                            <td>
                                                <ul>
                                                    <li>Aplicarea unei protecții ceramice semi-permanente pe bază de siliciu</li>
                                                    <li>Proprietăți hidrofobe, barieră anti-UV și rezistență la transferul de culoare</li>
                                                    <li>Nu alterează culoarea, aspectul, textura sau senzația pielii.</li>
                                                    <li>Notă: Necesită Detailing Interior Complet.</li>
                                                    <li>Durata: 4 ore</li>
                                                </ul>
                                            </td>
                                            <td>400 - 700</td>
                                        </tr>
                                        <tr>
                                            <td>Aplicare Tratament Hidrofob pentru Tapițerie din Stofă</td>
                                            <td>
                                                <ul>
                                                    <li>Tehnologie nouă care asigură impermeabilitatea materialelor textile</li>
                                                    <li>Prevenind pătarea și facilitând curățarea de întreținere.</li>
                                                    <li>Notă: Necesită Detailing Interior Complet.</li>
                                                    <li>Durata: 3 ore + timp de uscare</li>
                                                </ul>
                                            </td>
                                            <td>300 - 400</td>
                                        </tr>
                                        <tr>
                                            <td>Aplicare Tratament Hidrofob/Ceramic pentru Tapițerie Mixtă</td>
                                            <td>
                                                <ul>
                                                    <li>Fiecare suprafață este tratată individual cu produsul corespunzător.</li>
                                                    <li>Ofera proprietăți hidrofobe și de auto-curățare.</li>
                                                    <li>Notă: Necesită Detailing Interior Complet.</li>
                                                    <li>Durata: 3 ore + timp de uscare</li>
                                                </ul>
                                            </td>
                                            <td>300 - 700</td>
                                        </tr>
                                        <tr>
                                            <td>Aplicare Tratament Hidrofob pentru Covorașe Textile</td>
                                            <td>
                                                <ul>
                                                    <li>Tehnologie nouă care asigură impermeabilitatea covorașelor textile.</li>
                                                    <li>Notă: Necesită Detailing Interior.</li>
                                                    <li>Durata: 1 oră + timp de uscare</li>
                                                </ul>
                                            </td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>Aplicare Protecție Ceramică pentru Plastice Interioare</td>
                                            <td>
                                                <ul>
                                                    <li>Protecție de lungă durată împotriva decolorării și degradării cauzate de razele UV și murdărie.</li>
                                                    <li>Notă: Necesită minim Quick Detail Interior.</li>
                                                    <li>Durata: 2 ore</li>
                                                </ul>
                                            </td>
                                            <td>300 - 500</td>
                                        </tr>
                                        <tr>
                                            <td>Ozonificare</td>
                                            <td>
                                                <ul>
                                                    <li>Ozonificarea elimină mirosurile neplăcute din vehicul și din sistemul de ventilație.</li>
                                                    <li>Distruge bacteriile și virusuii.</li>
                                                </ul>
                                            </td>
                                            <td>100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Card for Detailing Interior Complet */}
                <div className="detailingInfoCard container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Detailing Interior Complet</h4>
                            <div className="d-flex justify-content-center">
                                <div className="card" style={{ width: '100%', maxWidth: '300px' }}>
                                    <div className="card-body p-3">
                                        <h6 className="card-subtitle mb-2 text-center">700 - 1.400 RON</h6>
                                        <div className="card-text px-2">
                                            <ul className="small ps-3">
                                                <li>Suflare cu aer și aspirare praf din toate compartimentele</li>
                                                <li>Curățare în profunzime a scaunelor, mochetei, covorașelor și portbagajului cu injecție-extracție</li>
                                                <li>Degresare a elementelor din piele, textil, plastic și plafon</li>
                                                <li>Curățare completă a geamurilor interior/exterior, display-urilor și ornamentelor</li>
                                                <li>Curățare a zonelor interioare ale pragurilor ușilor și portbagajului</li>
                                                <li>Hidratare a elementelor din piele</li>
                                                <li>Tratament de revitalizare a pieselor din plastic</li>
                                                <li>Ozonificare interior</li>
                                                <li>Igienizare habitaclu cu ozon</li>
                                                <li>Spălare exterior cu spumă activă, șampon pH neutru și uscare</li>
                                                <li>Durata: 24 ore (include uscarea completă a tapițeriilor)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Card for Detailing Interior Rapid */}
                <div className="detailingInfoCard container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Detailing Interior Rapid (Quick)</h4>
                            <div className="d-flex justify-content-center">
                                <div className="card" style={{ width: '100%', maxWidth: '300px' }}>
                                    <div className="card-body p-3">
                                        <h6 className="card-subtitle mb-2 text-center">100 - 250 RON</h6>
                                        <div className="card-text px-2">
                                            <ul className="small ps-3">
                                                <li>Suflare cu aer și aspirare praf din toate compartimentele</li>
                                                <li>Curățare a scaunelor, covorașelor și portbagajului</li>
                                                <li>Curățare a elementelor din piele, textil și plastic</li>
                                                <li>Curățare completă a geamurilor interior/exterior, display-urilor și ornamentelor</li>
                                                <li>Durata: 1 oră</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Swiper Carousel with Service Cards - Cards Effect Version */}
                <div className="swiper container mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-4">Servicii Extra Interior</h4>
                            <div className="swiper-service-container" style={{
                                maxWidth: '400px',
                                margin: '0 auto',
                                padding: '20px 0'
                            }}>
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="service-swiper-cards"  // Changed class name
                                    style={{
                                        width: '100%',
                                        height: '300px',  // Fixed height
                                        padding: '20px 0'
                                    }}
                                >
                                    {extraServices.map((service, index) => (
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

                {/* Swiper Carousel for Interior Images */}
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
                                className="interior-swiper"
                            >
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/detailing-img/int1.jpg"
                                            className="img-fluid rounded"
                                            alt="Interior 1"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/detailing-img/int2.jpg"
                                            className="img-fluid rounded"
                                            alt="Interior 2"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/detailing-img/int3.png"
                                            className="img-fluid rounded"
                                            alt="Interior 3"
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

export default Interior;