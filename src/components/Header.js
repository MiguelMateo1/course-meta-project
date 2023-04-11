import Logo from "../components/assets/logo.jpg"
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <NavLink to = "/">
          <Link to="/"><img src={Logo} alt="little lemon"/></Link>
          <Nav/>
        </NavLink>
      </header>
    );
  }
  
  export default Header;