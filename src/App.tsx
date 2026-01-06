import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cases from './pages/Cases'
import Original from './pages/Original'
import Services from './pages/Services'
import AIGC from './pages/AIGC'
import About from './pages/About'
import Contact from './pages/Contact'
import VideoPlayer from './pages/VideoPlayer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/original" element={<Original />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aigc" element={<AIGC />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

