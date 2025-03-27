import React, { useRef, useEffect } from "react";
import "./Partners.css";

const Partners = () => {
    const brands = Array.from({ length: 36 }, (_, i) => ({
        id: i + 1,
        src: `/partners/${i + 1}.png`,
        alt: `Partner Brand ${i + 1}`
    }));

    const trackRef = useRef(null);
    const animationRef = useRef(null);
    const scrollSpeed = 10; // Pixels per frame

    // Auto-scroll effect
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const animate = () => {
            // Continuous loop logic
            if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
                track.scrollLeft = 0;
            } else {
                track.scrollLeft += scrollSpeed;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    return (
        <section className="partners-section">
            <div className="partners-container">
                <div className="partners-track" ref={trackRef}>
                    {[...brands, ...brands].map((brand, index) => (
                        <div className="partner-item" key={`${brand.id}-${index}`}>
                            <img
                                src={brand.src}
                                alt={brand.alt}
                                loading="lazy"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;