import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <div className="btn normal-case text-xl">daisyUI</div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/'>Logout</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;