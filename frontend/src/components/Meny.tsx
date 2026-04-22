import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Meny = () => {

  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [menuOpen]);

  return (
    <div className="header">

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="links-in-hamburger-menu">
          <Link onClick={toggleMenu} to="/">Hem</Link>
          <Link onClick={toggleMenu} to="/ImagePage">Håruppsättningar</Link>
          <Link onClick={toggleMenu} to="/AboutMePage">Om Mig</Link>
          <Link className="bookMeBtn" to="/BookingPage" onClick={toggleMenu}>Boka Mig</Link>
        </div>
          <div className="contact-hamburger-menu-div">
            <div className="contact-hamburger-menu">
              <p className="p-contact-hamburger">Kontakt</p>
              <p>alice.lindkvist1@hotmail.com</p>
              <p>072-219 40 08</p>
            </div>
          </div>
      </div>

      <div className='loggo'>
        <p>Hår Av Alice</p>
      </div>

      <div className="menyLinks">
          <Link to="/">Hem</Link>
          <Link to="/ImagePage">Håruppsättningar</Link>
          <Link to="/AboutMePage">Om Mig</Link>
          <Link className="bookMeBtn" to="/BookingPage">Boka Mig</Link>
      </div>

    </div>
  )
}

export default Meny;