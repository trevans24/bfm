import React, { Component } from 'react';

const Link = require('react-router-dom').Link;

export default class Navigation extends Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper pink lighten-2">
          <Link to="#!" className="brand-logo">Logo</Link>
          <Link to="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/market">The Market</Link></li>
            <li><Link to="/vendors">Vendors</Link></li>
            <li><Link to="/invovled">Get Involved</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/find">Find Us</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/market">The Market</Link></li>
            <li><Link to="/vendors">Vendors</Link></li>
            <li><Link to="/invovled">Get Involved</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/find">Find Us</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
