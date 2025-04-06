import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination'
import './Tuning.css';

const Tuning = () => {
    return (
        <section id="tuning" className="container-fluid py-5">
            <div className="container">
                {/* Tuning Title and Subtitle */}
                <div className="text-center mb-5">
                    <h2 className="tuningTitle">Tuning</h2>
                    <p className="lead">
                        Tuning, chiptuning, flashtuning, remapare — toți acești termeni duc spre un singur rezultat: optimizarea softului de management al motorului din ECU, în vederea obținerii unei creșteri de putere/cuplu cu până la 35% mai mare pentru motoarele turbo diesel, 30% pentru motoarele turbo benzină și 8% pentru motoarele aspirate diesel sau benzină. Această optimizare va îmbunătăți semnificativ accelerarea și cuplul mașinii. Consumul de combustibil se va reduce în condiții „normale” de condus.
                    </p>
                </div>

                {/* Accordion for Tuning Details */}
                <div className="accordion-desktop accordion mb-5" id="tuningAccordion">

                    {/* Item 1: Chiptuning!? De ce?? */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="tuningHeadingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#tuningCollapseOne"
                                aria-expanded="true"
                                aria-controls="tuningCollapseOne"
                            >
                                Chiptuning!? De ce??
                            </button>
                        </h2>
                        <div
                            id="tuningCollapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="tuningHeadingOne"
                            data-bs-parent="#tuningAccordion"
                        >
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Beneficii</th>
                                            <th>Detalii</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <ul>
                                                    <li>Creștere de putere și cuplu (10-35%).</li>
                                                    <li>Scăderea consumului de combustibil.</li>
                                                    <li>Răspuns mai prompt al motorului.</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>Creșterea de putere este de 20-35% pentru motoare turbo și 6-12% pentru motoare aspirate.</li>
                                                    <li>Consumul poate scădea cu 0.3-0.8L/100km (până la 1L/100km în unele cazuri).</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Ce înțelegem prin chiptuning? */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="tuningHeadingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#tuningCollapseTwo"
                                aria-expanded="false"
                                aria-controls="tuningCollapseTwo"
                            >
                                Ce înțelegem prin chiptuning?
                            </button>
                        </h2>
                        <div
                            id="tuningCollapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="tuningHeadingTwo"
                            data-bs-parent="#tuningAccordion"
                        >
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Detalii</th>
                                            <th>Proces</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <ul>
                                                    <li>Chiptuningul este optimizarea softului de management al motorului (ECU).</li>
                                                    <li>Se realizează prin ajustarea hărților responsabile de cuplu, timpi de injecție, cantitatea de combustibil, etc.</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>La mașinile vechi, se înlocuiește chipul de memorie (EPROM).</li>
                                                    <li>La mașinile noi, se rescrie softul prin conectorul OBD2 sau prin metode speciale (BDM, K-tag, J-tag).</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Pornire la cald – motoare TDI */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="tuningHeadingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#tuningCollapseThree"
                                aria-expanded="false"
                                aria-controls="tuningCollapseThree"
                            >
                                Pornire la cald – motoare TDI
                            </button>
                        </h2>
                        <div
                            id="tuningCollapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="tuningHeadingThree"
                            data-bs-parent="#tuningAccordion"
                        >
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Problemă</th>
                                            <th>Soluție</th>
                                            <th>Detalii</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Pornire la cald</td>
                                            <td>
                                                <ul>
                                                    <li>Problema este tipică pentru motoarele 1.9TDI și 2.0TDI.</li>
                                                    <li>Se întâlnește pe VW Touran, Seat Leon, Golf 4, Golf 5, Audi A4.</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>PAB CUSTOM TUNNING oferă soluția prin ajustarea softului pentru gradul de uzură al motorului.</li>
                                                    <li>Procedura este similară cu cea a unui tuning, dar se rescrie softul cu modificările necesare pentru pornirea la cald.</li>
                                                    <li>Garantăm o funcționare perfectă a motorului.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Item 4: Întrebări frecvente */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="tuningHeadingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#tuningCollapseFour"
                                aria-expanded="false"
                                aria-controls="tuningCollapseFour"
                            >
                                Întrebări frecvente
                            </button>
                        </h2>
                        <div
                            id="tuningCollapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="tuningHeadingFour"
                            data-bs-parent="#tuningAccordion"
                        >
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Întrebare</th>
                                            <th>Răspuns</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Chiptuningul afectează filtrul de particule (DPF/FAP)?</td>
                                            <td>Nu, filtrul de particule și funcțiile de regenerare rămân active.</td>
                                        </tr>
                                        <tr>
                                            <td>Chiptuningul poate afecta cutia de viteze automată?</td>
                                            <td>Nu, cutia de viteze automată se adaptează modificărilor softului.</td>
                                        </tr>
                                        <tr>
                                            <td>Cât durează operațiunea?</td>
                                            <td>Între 1 și 8 ore.</td>
                                        </tr>
                                        <tr>
                                            <td>Se oferă garanție?</td>
                                            <td>Da, oferim garanție nelimitată pe manoperă și soft.</td>
                                        </tr>
                                        <tr>
                                            <td>Pot să revin la softul original?</td>
                                            <td>Da, salvăm softul original înainte de orice intervenție.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="tuningSwiper"
                >
                    {/* Chiptuning Beneficii Section */}
                    <SwiperSlide>
                        <div className="card" style={{ minWidth: '260px', maxWidth: '300px' }}>
                            <div className="card-body p-3">
                                <h4 className="text-center mb-3">Chiptuning Beneficii</h4>
                                <div className="card-text px-2">
                                    <ul className="small ps-3">
                                        <li>Creștere putere 10-35%</li>
                                        <li>Îmbunătățire răspuns motor</li>
                                        <li>Reducere consum combustibil (0.3-1L/100km)</li>
                                        <li>Adaptare la stilul de condus</li>
                                        <li>Compatibil cu toate sistemele mașinii</li>
                                        <li>Durata: 1-8 ore</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* What is Chiptuning Section */}
                    <SwiperSlide>
                        <div className="card" style={{ minWidth: '260px', maxWidth: '300px' }}>
                            <div className="card-body p-3">
                                <h4 className="text-center mb-3">Ce este Chiptuning?</h4>
                                <div className="card-text px-2">
                                    <ul className="small ps-3">
                                        <li>Optimizare software ECU</li>
                                        <li>Ajustare parametri motor</li>
                                        <li>Compatibil mașini noi și vechi</li>
                                        <li>Intervenție prin OBD2 sau metode speciale</li>
                                        <li>Salvare configurație originală</li>
                                        <li>Testare post-intervenție</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Cold Start Solution Section */}
                    <SwiperSlide>
                        <div className="card" style={{ minWidth: '260px', maxWidth: '300px' }}>
                            <div className="card-body p-3">
                                <h4 className="text-center mb-3">Soluție Pornire la Cald</h4>
                                <div className="card-text px-2">
                                    <ul className="small ps-3">
                                        <li>Pentru motoare 1.9TDI și 2.0TDI</li>
                                        <li>Remediere probleme pornire la cald</li>
                                        <li>Ajustare software la uzura motor</li>
                                        <li>Compatibil VW, Audi, Seat, Skoda</li>
                                        <li>Funcționare garantată</li>
                                        <li>Durata: 2-6 ore</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* FAQ Section */}
                    <SwiperSlide>
                        <div className="card" style={{ minWidth: '260px', maxWidth: '300px' }}>
                            <div className="card-body p-3">
                                <h4 className="text-center mb-3">Întrebări Frecvente</h4>
                                <h6 className="card-subtitle mb-2 text-center">Informații Generale</h6>
                                <div className="card-text px-2">
                                    <ul className="small ps-3">
                                        <li><strong>DPF/FAP:</strong> Rămâne funcțional</li>
                                        <li><strong>Cutie automată:</strong> Se adaptează</li>
                                        <li><strong>Durată:</strong> 1-8 ore</li>
                                        <li><strong>Garanție:</strong> Nelimitată</li>
                                        <li><strong>Original:</strong> Salvat înainte</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {/* Images for Tuning */}
                {/* Swiper Carousel for Tuning Images */}
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
                                className="tuning-swiper"
                            >
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/tuning/tune1.png"
                                            className="img-fluid rounded"
                                            alt="Tuning 1"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/tuning/tune2.jpg"
                                            className="img-fluid rounded"
                                            alt="Tuning 2"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/tuning/tune3.jpg"
                                            className="img-fluid rounded"
                                            alt="Tuning 3"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/tuning/tune4.jpg"
                                            className="img-fluid rounded"
                                            alt="Tuning 4"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/tuning/tune5.jpg"
                                            className="img-fluid rounded"
                                            alt="Tuning 5"
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src="/tuning/tune6.png"
                                            className="img-fluid rounded"
                                            alt="Tuning 6"
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

export default Tuning;