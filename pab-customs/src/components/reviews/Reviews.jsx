import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reviews.css';

const Reviews = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const testimonials = [
        {
            id: 1,
            name: "Andrei Popescu",
            content: "Foarte mulțumit de serviciile oferite! Mașina mea arată ca nouă după detailing, iar echipa a fost extrem de profesionistă. Recomand cu încredere!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            id: 2,
            name: "Cornel Dima",
            content: "Am dus mașina pentru polish și protecție ceramică, iar rezultatul a fost peste așteptări. Luciu impecabil, iar echipa foarte atentă la detalii!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/81.jpg"
        },
        {
            id: 3,
            name: "Gabriel Asproiu",
            content: "Servicii de top! Am făcut remapare și acum mașina trage mult mai bine. Se simte diferența clar, iar consumul chiar a scăzut puțin. Recomand 100%!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
            id: 4,
            name: "Toma Filip",
            content: "Foarte atenți și pricepuți! Am făcut detailing interior și mi-au scos toate petele de pe scaune. Mașina miroase și arată ca nouă!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 5,
            name: "Paul Nica",
            content: "Super experiență! Am apelat la ei pentru colantare și sunt foarte încântată de rezultat. Culorile sunt vii, iar aplicarea e perfectă, fără bule sau imperfecțiuni.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/28.jpg"
        },
        {
            id: 6,
            name: "Cirstea Catalin",
            content: "Am făcut o revizie completă și am schimbat evacuarea la ei. Sunetul e absolut genial acum! Super profesioniști și prețuri bune. Recomand!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/43.jpg"
        }
    ];

    return (
        <div className="testimonial-section">
            <div className="testimonial-container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="testTitle text-center">Ce Spun Clienții Noștri</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 position-relative">
                        <Carousel
                            activeIndex={index}
                            onSelect={handleSelect}
                            indicators={false}
                            interval={2000}
                            pause={'hover'}
                            controls={false}
                        >
                            {testimonials.map((testimonial) => (
                                <Carousel.Item key={testimonial.id}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-img">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="testimonial-rating">
                                            {'⭐'.repeat(testimonial.rating)}
                                        </div>
                                        <p className="testimonial-content">{testimonial.content}</p>
                                        <div className="testimonial-footer">
                                            <h5 className="testimonial-name">{testimonial.name}</h5>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
