import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
