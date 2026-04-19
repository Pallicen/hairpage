import { Link } from "react-router-dom";


const Meny = () => {
  return (
    <div className="header">

      <div className='loggo'>
        <p>Hår Av Alice</p>
      </div>

      <div className="menyLinks">
          <Link to="/">Hem</Link>
          <Link to="/ImagePage">Håruppsättningar</Link>
          <Link to="/AboutMePage">Om Mig</Link>
          <button className="bookMeBtn"><Link className="link" to="/BookingPage">Boka Mig</Link></button>
      </div>

    </div>
  )
}

export default Meny;