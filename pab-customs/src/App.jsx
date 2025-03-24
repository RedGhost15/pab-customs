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

function App () {

  return (
    <>
    
    <Navbar />
    <Hero id="home"/>
    <Detailing id="detailing"/>
    <Banner />
    <AuroraBanner />
    <Tuning id="tuning" />
    <Why/>
    <Despre id="about"/>

    {/* <Contact id="contact" /> */}
    </>
  )
}
export default App
