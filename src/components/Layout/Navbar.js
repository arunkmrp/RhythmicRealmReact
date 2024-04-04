import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {" "}
      {/* Use className instead of class */}
      <Link to="/" className="navbar_logo">
        {" "}
        {/* Replace <a> tag with Link */}
        <img src={logo} alt="RhythmicRealm Logo" />
      </Link>
      <div className="navbar_nav">
        <Link to="/login" className="signin">
          {" "}
          {/* Link to login page */}
          Sign In
        </Link>
        <Link to="/register" className="signup">
          {" "}
          {/* Link to register page */}
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
