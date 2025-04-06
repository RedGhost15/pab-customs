import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Banner from './components/banner/banner';
import Tuning from './components/tuning/Tuning';
import Despre from './components/despre/Despre';
import Why from './components/why/Why';
import Footer from './components/footer/Footer';
import SteeringWheels from './components/list/SteeringWheels';
import Partners from './components/parteneri/Partners';
import ContactUs from './components/contactUs/ContactUs';
import Reviews from './components/reviews/Reviews';
import Exterior from './components/detailing/Exterior';
import Interior from './components/detailing/Interior';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero id="home" />
      <Banner />
      <Interior id="detailing" />
      <Exterior />
      <Banner />
      <Tuning id="tuning" />
      <Partners />
      <SteeringWheels id="volane" />
      <Despre id="about" />
      <Reviews />
      <Why />
      <ContactUs id="contact" />
      <Footer />
    </>
  );
}

export default App;
