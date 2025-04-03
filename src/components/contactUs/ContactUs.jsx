import React from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaBuilding, FaCity, FaGlobe } from 'react-icons/fa';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!');
    };

    return (
        <div id='contact' className="contact-page">
            <section className="contact-main-section">
                <div className="container">
                    <h2 className="contact-title text-center mb-5">Contact Us</h2>

                    <div className="contact-content-area">
                        <div className="contact-form-section">
                            <h3 className="section-subtitle">Send Us a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <textarea
                                        className="form-control"
                                        placeholder="Your Message"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="contact-info-section">
                            <div className="contact-info-card mb-4">
                                <h3 className="section-subtitle">Contact Information</h3>
                                <div className="contact-info">
                                    <p><FaPhone /> +1 (555) 123-4567</p>
                                    <p><FaEnvelope /> info@yourcompany.com</p>
                                    <p><FaClock /> Mon-Fri: 9AM - 5PM</p>
                                </div>
                            </div>

                            <div className="location-card">
                                <h3 className="section-subtitle">Our Location</h3>
                                <div className="location-info">
                                    <p><FaBuilding /> 123 Business Street</p>
                                    <p><FaCity /> Tech City, TC 10001</p>
                                    <p><FaGlobe /> Country</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <h3 className="section-subtitle text-center mb-4">Find Us On The Map</h3>
                    <div className="map-container">
                        <iframe
                            title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.00508442159884!2d25.445099126382857!3d44.91260768510846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2f560c11a862b%3A0x1eea079e39155a42!2sPAB%20CUSTOM%20TUNNING!5e1!3m2!1sen!2sro!4v1743179494769!5m2!1sen!2sro"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;