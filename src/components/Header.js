import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleLogout = () => {
    userLogout()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <header>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <div className="btn normal-case text-xl">daisyUI</div>
          <div className='ml-4 font-semibold'>
            {
              user && user.uid ? <div>{user.email}</div> : ''
            }
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <button onClick={handleLogout}>Logout</button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;