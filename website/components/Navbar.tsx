import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Our work' },
  { to: '/impact', label: 'Impact' },
  { to: '/budget', label: 'Budget' },
  { to: '/get-involved', label: 'Get involved' },
  { to: '/contact', label: 'Contact' },
];

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
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <ReactRouterDOM.Link to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </ReactRouterDOM.Link>
            </li>
          ))}
          <li>
            <ReactRouterDOM.Link
              to="/get-involved"
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
