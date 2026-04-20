
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

function App() {

  return (
    <div>

      <div className='meny'>
        <Meny />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ImagePage' element={<Image />} />
        <Route path='/AboutMePage' element={<AboutMe />} />
        <Route path='/BookingPage' element={<Booking />} />
      </Routes>

      <footer>
        <div>
        </div>
      </footer>
    </div>
  )
}

export default App
