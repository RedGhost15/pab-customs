import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import ShinyText from '../../misc/shinyText/ShinyText'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="navContainer container-fluid">

                {/* Logoo */}

                <a href="" className="navbar-brand">
                    {/* <img src="/logo/pab-logo.png" alt="Logo" width="50" /> */}
                    <ShinyText text="PAB CUSTOM" disabled={false} speed={3} className='custom-class' />
                </a>

                {/* Boorgir Menu (visible on el mobile) */}

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

                {/* collapsible menu */}

                <div className="collapse navbar-collapse" id="navbarNav">

                    {/* nav ul */}
                    <ul className="navbar-nav">

                        {/* nav items */}
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${activeLink === 'detailing' ? 'active' : ''}`} onClick={() => handleClick('detailing')}>Detailing</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className={`nav-link ${activeLink === 'tuning' ? 'active' : ''}`} onClick={() => handleClick('tuning')}>Tuning</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}>About</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>Contact</a>
                        </li>


                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;