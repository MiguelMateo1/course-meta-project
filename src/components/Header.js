import Logo from "../assets/Logo.svg"
import Nav from "./Nav";
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
          <Link to="/"><img src={Logo} alt="little lemon"/></Link>
          <Nav/>
      </header>
    );
  }
  
  export default Header;