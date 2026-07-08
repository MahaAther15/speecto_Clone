import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/services/Services'
import SAAS from './pages/services/SAAS'
import WEB from './pages/services/WEB'
import SEO from './pages/services/SEO'
import MAD from './pages/services/MAD'
import SEOCard5 from './pages/services/SEOCard5'
import MVP from './pages/services/MVP'
import About from './pages/about/About'
import OurTeam from './pages/Team/OurTeam'
import Contact from './pages/Contact/Contact'
import './App.css'

function App() {
  return (
    <Router basename="/speecto_Clone">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/product-saas-development" element={<SAAS />} />
        <Route path="/services/web-app-development" element={<WEB />} />
        <Route path="/services/seo-optimised-web-application" element={<SEO />} />
        <Route path="/services/mobile-app-development" element={<MAD />} />
        <Route path="/services/seo" element={<SEOCard5 />} />
        <Route path="/services/mvp-development" element={<MVP />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App

