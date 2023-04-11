import { Link } from "react-router-dom"
import { useState } from 'react';
import { FaRegTimesCircle, FaGripLines } from 'react-icons/fa';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

    return (
      <>
          <div className="mobile-nav" onClick={navToggle}>
            {isOpen ? <FaRegTimesCircle /> : <FaGripLines />}
          </div>
        <nav className={`nav ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
          <Link to="/" className="nav-item">HOME</Link>
          <a href="#" className="nav-item">ABOUT</a>
          <a href="#" className="nav-item">MENU</a>
          <Link to="/booking" className="nav-item">RESERVATIONS</Link>
          <a href="#" className="nav-item">ORDER ONLINE</a>
          <a href="#" className="nav-item">LOGIN</a>
        </nav>
      </>
    );
  }
  
  export default Nav;
  