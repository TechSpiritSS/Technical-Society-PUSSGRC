import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLogout } from '../../hooks/useLogout';
import useAuthContext from '../../hooks/useAuthContext';

function Navbar() {
  const { logout } = useLogout();
  const [user, setUser] = useState(useAuthContext().state.user);

  const handleClick = () => {
    logout();
  };

  return (
    <div className="container">
      Tech Society
      <nav>
        <div className="navbar">
          <Link to="/">Home</Link>
          {user ? (
            <div className="logout">
              <button type="button" onClick={handleClick}>
                Log out
              </button>
            </div>
          ) : (
            <div className="login">
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
