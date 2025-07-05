import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
