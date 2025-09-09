import './App.css'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import AboutMe from './components/AboutMe.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

  return (
    
    <div>
      {/* <Navbar /> */}
      <LandingPage />
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
