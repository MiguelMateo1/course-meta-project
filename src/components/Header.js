import Logo from "../components/assets/logo.jpg"
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <header>
        <NavLink to = "/">
            {<img className="logo-img" src = {Logo} />}
        </NavLink>
      </header>
    );
  }
  
  export default Header;