import { Link } from "react-router-dom";


const Meny = () => {
  return (
    <div>
      <nav>
          <Link to="/">Hem</Link>
          <Link to="/ImagePage">Håruppsättningar</Link>
          <Link to="/AboutMePage">Om Mig</Link>
          <Link to="/BookingPage">Boka Mig</Link>
      </nav>
    </div>
  )
}

export default Meny;