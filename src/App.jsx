import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-blue-100'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  
  )
}

export default App