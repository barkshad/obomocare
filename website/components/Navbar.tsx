import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { BRAND } from '../brand';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <ReactRouterDOM.Link to="/" className="nav__logo" aria-label="OBOMOCARE home">
          <span>OC</span>
          OBOMOCARE
        </ReactRouterDOM.Link>

        <button
          className={`nav__toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span className="nav__toggle__bar"></span>
        </button>

        <ul className={`nav__menu ${menuOpen ? 'open' : ''}`} id="nav-menu" role="list">
          <li><ReactRouterDOM.Link to="/" onClick={() => setMenuOpen(false)}>Home</ReactRouterDOM.Link></li>
          <li><ReactRouterDOM.Link to="/about" onClick={() => setMenuOpen(false)}>About</ReactRouterDOM.Link></li>
          <li><ReactRouterDOM.Link to="/programs" onClick={() => setMenuOpen(false)}>Our work</ReactRouterDOM.Link></li>
          <li><ReactRouterDOM.Link to="/get-involved" onClick={() => setMenuOpen(false)}>Get involved</ReactRouterDOM.Link></li>
          <li>
            <ReactRouterDOM.Link
              to="/contact"
              className="btn btn--accent"
              onClick={() => setMenuOpen(false)}
            >
              Support us
            </ReactRouterDOM.Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
