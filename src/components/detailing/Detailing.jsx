import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Detailing.css';

const Detailing = () => {
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


                {/* Scrollable Cards for Detailing Interior Complet */}
                <div className=" cardCarousel container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Detailing Interior Complet</h4>
                            <div className="d-flex justify-content-center overflow-auto pb-3" style={{ scrollbarWidth: 'thin', gap: '16px' }}>
                                <div className="card" style={{ minWidth: '260px', maxWidth: '300px' }}>
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

                {/* Scrollable Cards for Detailing Interior Rapid */}
                <div className="cardCarousel container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Detailing Interior Rapid (Quick)</h4>
                            <div className="d-flex justify-content-center overflow-auto pb-3" style={{ scrollbarWidth: 'thin', gap: '16px' }}>
                                <div className="card" style={{ minWidth: '260px', maxWidth: '300px' }}>
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

                {/* Scrollable Cards for Servicii Extra Interior */}
                <div className="cardCarousel container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Servicii Extra Interior</h4>
                            <div className="d-flex justify-content-start overflow-auto pb-3" style={{
                                scrollSnapType: "x mandatory",
                                WebkitOverflowScrolling: "touch",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none", // Hide scrollbar for IE/Edge
                                gap: "16px", // Space between cards
                                paddingLeft: "16px", // Ensure first card is fully visible
                                scrollPaddingLeft: "16px", // Aligns the first item properly
                            }}>
                                {[
                                    { title: "Protecție Leather Guard", price: "300 - 400 RON", details: ["Aplicarea a două straturi de Leather Guard", "Durabilitate: 3-12 luni", "Necesită Detailing Interior Complet", "Durata: 2 ore"] },
                                    { title: "Protecție Ceramică Piele", price: "400 - 700 RON", details: ["Protecție ceramică semi-permanentă", "Proprietăți hidrofobe și anti-UV", "Necesită Detailing Interior Complet", "Durata: 4 ore"] },
                                    { title: "Tratament Hidrofob Stofă", price: "300 - 400 RON", details: ["Impermeabilizare materiale textile", "Previne pătarea", "Necesită Detailing Interior Complet", "Durata: 3 ore + uscare"] },
                                    { title: "Tratament Mixt", price: "300 - 700 RON", details: ["Tratament individual pentru fiecare suprafață", "Proprietăți hidrofobe", "Necesită Detailing Interior Complet", "Durata: 3 ore + uscare"] },
                                    { title: "Tratament Covorașe", price: "100 RON", details: ["Impermeabilizare covorașe textile", "Necesită Detailing Interior", "Durata: 1 oră + uscare"] },
                                    { title: "Protecție Plastice", price: "300 - 500 RON", details: ["Protecție împotriva UV și murdărie", "Necesită minim Quick Detail Interior", "Durata: 2 ore"] },
                                    { title: "Ozonificare", price: "100 RON", details: ["Elimină mirosurile neplăcute", "Distruge bacteriile și virusurile"] },
                                ].map((service, index) => (
                                    <div key={index} className="card" style={{ width: "300px", scrollSnapAlign: "start", flexShrink: 1 }}>
                                        <div className="card-body p-3">
                                            <h5 className="card-title text-center">{service.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-center">{service.price}</h6>
                                            <div className="card-text px-2">
                                                <ul className="small ps-3">
                                                    {service.details.map((detail, i) => (<li key={i}>{detail}</li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Images for Interior Detailing */}
                <div className="imgRows container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 text-center">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <img src="/detailing-img/int1.jpg" className="img-fluid rounded" alt="Interior 1" />
                                </div>
                                <div className="col-md-4">
                                    <img src="/detailing-img/int2.jpg" className="img-fluid rounded" alt="Interior 2" />
                                </div>
                                <div className="col-md-4">
                                    <img src="/detailing-img/int3.png" className="img-fluid rounded" alt="Interior 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>










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

                {/* Scrollable Cards for Polish Integral 2 Pasi */}

                <div className=" cardCarousel container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Polish Integral 2 Pasi</h4>
                            <div className="d-flex justify-content-center overflow-auto pb-3" style={{ scrollbarWidth: 'thin', gap: '16px' }}>
                                <div className="card" style={{ minWidth: '260px', maxWidth: '300px' }}>
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

                {/* Scrollable Cards for Polish One-Step */}
                <div className=" cardCarousel container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Polish Integral One-Step</h4>
                            <div className="d-flex justify-content-center overflow-auto pb-3" style={{ scrollbarWidth: 'thin', gap: '16px' }}>
                                <div className="card" style={{ minWidth: '260px', maxWidth: '300px' }}>
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

                {/* Scrollable Cards for Servicii Extra Exterior */}
                <div className="cardCarousel container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <h4 className="text-center mb-3">Servicii Extra Exterior</h4>
                            <div className="d-flex justify-content-start overflow-auto pb-3" style={{
                                scrollSnapType: "x mandatory",
                                WebkitOverflowScrolling: "touch",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none", // Hide scrollbar for IE/Edge
                                gap: "16px", // Space between cards
                                paddingLeft: "16px", // Ensure first card is fully visible
                                scrollPaddingLeft: "16px", // Aligns the first item properly
                            }}>
                                {[
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
                                ].map((service, index) => (
                                    <div key={index} className="card" style={{ width: "300px", scrollSnapAlign: "start", flexShrink: 1 }}>
                                        <div className="card-body p-3">
                                            <h5 className="card-title text-center">{service.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-center">{service.price}</h6>
                                            <div className="card-text px-2">
                                                <ul className="small ps-3">
                                                    {service.details.map((detail, i) => (<li key={i}>{detail}</li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Images for Exterior Detailing */}
                <div className="imgRows container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 text-center">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <img src="/exterior/ext1.jpg" className="img-fluid" alt="Exterior 1" />
                                </div>
                                <div className="col-md-4">
                                    <img src="/exterior/ext2.jpg" className="img-fluid" alt="Exterior 2" />
                                </div>
                                <div className="col-md-4">
                                    <img src="/exterior/ext3.jpg" className="img-fluid" alt="Exterior 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detailing;