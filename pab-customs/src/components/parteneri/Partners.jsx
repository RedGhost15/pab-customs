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
    const scrollSpeed = 25; // Pixels per frame
    const clonedBrands = [...brands, ...brands]; // Double the items for seamless loop

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Start with the first set of brands (not the cloned ones)
        track.scrollLeft = 0;

        const animate = () => {
            // When we reach the midpoint (original content), instantly reset
            if (track.scrollLeft >= brands.length * 150) { // 150px is approximate item width
                track.style.scrollBehavior = 'auto';
                track.scrollLeft = 0;
                setTimeout(() => {
                    track.style.scrollBehavior = 'smooth';
                }, 0);
            } else {
                track.scrollLeft += scrollSpeed;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [brands.length]);

    return (
        <section className="partners-section">
            <div className="partners-container">
                <div className="partners-track" ref={trackRef}>
                    {clonedBrands.map((brand, index) => (
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