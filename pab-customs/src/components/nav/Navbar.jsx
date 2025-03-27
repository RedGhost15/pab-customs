import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import ShinyText from '../../misc/shinyText/ShinyText';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setActiveLink('home');
                setNavbarScrolled(false); // Reset navbar style when at the top
            } else {
                setNavbarScrolled(true);
            }

            const sections = ['detailing', 'tuning', 'volane', 'about', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        setActiveLink('home');

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        if (id === 'home') {
            scrollToTop();
        } else {
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 50,
                    behavior: 'smooth',
                });
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveLink('home');
        setNavbarScrolled(false); // Ensure navbar resets when scrolling to top
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${navbarScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navContainer container-fluid">
                <a href="#" className="navbar-brand" onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                }}>
                    <ShinyText text="PAB CUSTOM" disabled={false} speed={3} className='shinyText' />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {['detailing', 'tuning', 'volane', 'about', 'contact'].map((section) => (
                            <li className="nav-item" key={section}>
                                <a
                                    href={`#${section}`}
                                    className={`nav-link ${activeLink === section ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(section);
                                    }}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
