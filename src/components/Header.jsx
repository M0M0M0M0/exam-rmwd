import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header>
      <nav className="custom-navbar">
        <div className="custom-navbar-container">
          {/* Logo */}
          <div className="custom-navbar-brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/logo/logo.jpg" alt="FPT Aptech" height="32" style={{ marginRight: 8 }} />
            <span className="custom-navbar-logo-text">FPT Aptech</span>
          </div>
          {/* Center Nav */}
          <ul className="custom-navbar-nav">
            <li><span className="custom-navbar-link">About Us</span></li>
            <li><span className="custom-navbar-link">Products</span></li>
            <li><span className="custom-navbar-link">Booking</span></li>
            <li><span className="custom-navbar-link">Locations</span></li>
          </ul>
          {/* Right Buttons */}
          <div className="custom-navbar-actions">
            <button
              className="custom-navbar-btn custom-navbar-btn-signin"
              onClick={() => alert('Sign In clicked')}
            >
              Sign In
            </button>
            <button
              className="custom-navbar-btn custom-navbar-btn-signup"
              onClick={() => alert('Sign Up clicked')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}