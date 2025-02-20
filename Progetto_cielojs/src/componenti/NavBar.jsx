
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Gestione Volo</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/RicercaVolo">Cerca Volo</Link></li>
        <li><Link to="/volo">Voli</Link></li>
        <li><Link to="/comp">Compagnie</Link></li>
        <li><Link to="/aer">Aeroporti</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
