import './App.css'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import AboutMe from './components/AboutMe.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'


const App = () => {

  return (
    
    <div>
      {/* <Navbar /> */}
      <LandingPage />
      <AboutMe/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App
