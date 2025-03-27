import React from 'react'

import './App.css'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Detailing from './components/detailing/Detailing'
import Banner from './components/banner/banner'
import Tuning from './components/tuning/Tuning'
import Despre from './components/despre/Despre'
import Why from './components/why/Why'
import AuroraBanner from './components/aurora/AuroraBanner'
import Footer from './components/footer/Footer'
import SteeringWheels from './components/list/SteeringWheels'
import Partners from './components/parteneri/Partners'

function App() {

  return (
    <>

      <Navbar />
      <Hero id="home" />
      <Banner />
      <Detailing id="detailing" />
      <Banner />
      <AuroraBanner />
      <Tuning id="tuning" />
      <Partners />
      <SteeringWheels id="volane" />
      <Despre id="about" />
      <Why />

      {/* <Contact id="contact" /> */}
      <Footer />
    </>
  )
}
export default App
