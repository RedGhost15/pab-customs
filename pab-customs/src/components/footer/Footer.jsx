import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-md-4">
                        <h5 className="footer-title">Pab Customs</h5>
                        <p className="footer-text">
                            Experimentează perfecțiunea în detaliere și performanță auto, unde eleganța și puterea se întâlnesc pentru a transforma fiecare drum într-o experiență de excepție.
                        </p>
                    </div>

                    {/* Center Section - Website Navigation */}
                    <div className="col-md-2 offset-md-1">
                        <h6 className="footer-subtitle">Website</h6>
                        <ul className="footer-list">
                            <li><a href="/" className="footer-link" onClick={scrollToTop}>Top</a></li>
                            <li><a href="#detailing" className="footer-link">Detailing</a></li>
                            <li><a href="#tuning" className="footer-link">Tuning</a></li>
                            <li><a href="#about" className="footer-link">About</a></li>
                        </ul>
                    </div>

                    {/* Right Section - Contact */}
                    <div className="col-md-2">
                        <h6 className="footer-subtitle">Contact</h6>
                        <ul className="footer-list">
                            <li><a href="mailto:info@pabcustoms.com" className="footer-link">Email us</a></li>
                            <li><a href="tel:+1234567890" className="footer-link">Call us</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-2">
                        <h6 className="footer-subtitle">Socials</h6>
                        <ul className="footer-list">
                            <li><a href="https://facebook.com" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://instagram.com" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://youtube.com" className="footer-link" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="footer-divider" />

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="footer-text">PabCustomTuning © 2025</p>
                    <div className="footer-policy">
                        <a href="/cookie-policy" className="footer-link">Cookie policy</a>
                        <a href="/terms" className="footer-link">Terms of service</a>
                        <a href="/privacy" className="footer-link">Privacy policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;