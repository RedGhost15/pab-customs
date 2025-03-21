import React from 'react'

import './App.css'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Detailing from './components/detailing/Detailing'
import Banner from './components/banner/banner'

function App () {

  return (
    <>
    
    <Navbar />
    <Hero id="home"/>
    <Detailing id="detailing"/>
    <Banner />
    {/* <Tuning id="tuning" />
    <About id="about" />
    <Contact id="contact" /> */}
    </>
  )
}
export default App
