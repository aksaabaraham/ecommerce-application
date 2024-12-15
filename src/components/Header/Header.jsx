import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/" className="header-link">
            CCC Store
          </Link>
        </h1>
        <nav className="header-nav">
          <Link to="/logout" className="logout-link">
            <button className="logout-button">Log Out</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
