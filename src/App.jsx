import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FallingLeaves from './components/FallingLeaves'
import { VineDivider } from './components/ScrollVines'
import './App.css'

function App() {
  return (
    <>
      <FallingLeaves />
      <Navbar />
      <Hero />
      <VineDivider variant="a" />
      <About />
      <VineDivider variant="b" flip />
      <Projects />
      <VineDivider variant="a" flip />
      <Skills />
      <VineDivider variant="b" />
      <Contact />
      <Footer />
    </>
  )
}

export default App
