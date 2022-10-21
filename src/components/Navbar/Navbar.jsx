import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <div className="container">
      Tech Society
      <nav>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
