import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">OBOMOCARE Community Based Organisation</div>
          <p>Gusii Region, Kenya &middot; Kisii and Nyamira Counties</p>
          <p>Established 2020 &middot; Registered CBO, Kenya</p>
          <p style={{ marginTop: '0.5rem' }}>
            Contact: <a className="footer__contact" href="mailto:obomocare@gmail.com">obomocare@gmail.com</a>
          </p>
        </div>
        <div>
          <div className="footer__brand" style={{ marginBottom: '0.5rem' }}>Quick links</div>
          <div className="footer__links">
            <ReactRouterDOM.Link to="/about">About</ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/programs">Our work</ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/impact">Impact</ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/budget">Budget</ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/get-involved">Get involved</ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/contact">Contact</ReactRouterDOM.Link>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 'var(--space-8)', opacity: 0.4, fontSize: 'var(--text-xs)' }}>
        &copy; {year} OBOMOCARE Community Based Organisation. All rights reserved.
      </div>
    </footer>
  );
};
