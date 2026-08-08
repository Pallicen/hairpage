
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './css/Meny.css'
import './css/Home.css'
import './css/AboutMe.css'
import './css/Image.css'
import './css/Booking.css'
import Meny from './components/Meny'
import Home from './components/Views/Home'
import Image from './components/Views/Image'
import AboutMe from './components/Views/AboutMe'
import Booking from './components/Views/Booking'
import StartInTop from './components/StartInTop'

function App() {

  return (
    <div>

      <div className='meny'>
        <Meny />
        <StartInTop />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ImagePage' element={<Image />} />
        <Route path='/AboutMePage' element={<AboutMe />} />
        <Route path='/BookingPage' element={<Booking />} />
      </Routes>

      <footer>
        <div className='footer'>
          <a href="https://www.instagram.com/hairstyles_alice/">hairstyles_alice</a>
          <a href='mailto:alice.lindkvist1@hotmail.com'>alice.lindkvist1@hotmail.com</a>
          <a href='tel:+46722194008'>+46 722194008</a>
          <p>&copy; 2026 Alice Hairtsyles</p>
        </div>
      </footer>
    </div>
  )
}

export default App
