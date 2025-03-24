import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Why.css';

const Why = () => {
    return (
        <section id="why-us" className="container-fluid py-5">
            <div className="container">
                {/* Titlu și Subtitlu */}
                <div className="text-center mb-5">
                    <h2 className="whyTitle">De Ce Să Ne Alegeți Pe Noi?</h2>
                    <p className="lead">
                        La PAB Custom, suntem dedicați să oferim calitate și servicii de neegalat. Iată de ce ne remarcăm.
                    </p>
                    
                </div>

                {/* Conținut */}
                <div className="row">
                    {/* Motivul 1 */}
                    <div className="col-md-4 text-center mb-4">
                        <div className="why-us-card p-4">
                            <div className="cardContent">
                                <i className="fas fa-tools fa-3x mb-3 text-primary"></i>
                                <h4>Excelență în Detailing & Tuning</h4>
                                <p>
                                    Echipa noastră de profesioniști aduce ani de experiență și precizie în fiecare proiect, asigurând cele mai înalte standarde de calitate.
                                </p>
                            </div>
                            <div className="cardIcon">
                                <img src="/icons/crown.png" alt="crown icon" width="130px"/>
                            </div>
                        </div>
                    </div>

                    {/* Motivul 2 */}
                    <div className="col-md-4 text-center mb-4">
                        <div className="why-us-card p-4">
                            <div className="cardContent">
                                <i className="fas fa-star fa-3x mb-3 text-primary"></i>
                                <h4>Servicii Premium</h4>
                                <p>
                                Folosim doar produse premium și tehnologii de <u>top</u> pentru a oferi un finisaj impecabil, protecție de lungă durată și un aspect de showroom.
                                </p>
                            </div>
                            <div className="cardIcon">
                                <img src="/icons/diamond-award.png" alt="crown icon" width="130px"/>
                            </div>
                        </div>
                    </div>

                    {/* Motivul 3 */}
                    <div className="col-md-4 text-center mb-4">
                        <div className="why-us-card p-4">
                            <div className="cardContent">
                                <i className="fas fa-handshake fa-3x mb-3 text-primary"></i>
                                <h4>Abordare Centrată pe Client</h4>
                                <p>
                                    Satisfacția dumneavoastră este prioritatea noastră. Lucrăm împreună cu dumneavoastră pentru a înțelege nevoile și a oferi soluții personalizate.
                                </p>
                            </div>
                            <div className="cardIcon">
                                <img src="/icons/certificate.png" alt="crown icon" width="130px"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Why;