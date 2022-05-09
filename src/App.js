import './App.scss'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
