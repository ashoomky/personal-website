import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import AboutMe from './components/AboutMe.jsx'


const App = () => {
  return (
    
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
    </div>
  )
}

export default App
