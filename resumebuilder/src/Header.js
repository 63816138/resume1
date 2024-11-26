import React from 'react';
import {FaDigitalOcean} from 'react-icons/fa'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <header className="header">
        <span className="icon">
            <FaDigitalOcean className="icons"/>
            <h1>DRB</h1>
        </span>
        <span>
            <Link to="/login" className="login_link">Login/SignUp</Link>
        </span>
      </header>
    </div>
  )
}

export default Header;
