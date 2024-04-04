import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import image from "./RythmicRealm.jpg";
import logo from "./logo.png";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <Link to="/" className="navbar_logo">
          <img src={logo} alt="RhythmicRealm Logo" />
        </Link>
        <div className="navbar_nav">
          <button onClick={toggleLogin} className="signin">
            Sign In
          </button>
          <button onClick={toggleRegister} className="signup">
            Sign Up
          </button>
        </div>
      </nav>
      <header className="header">
        <h1 className="title">RhythmicRealm</h1>
        <p className="subtitle">Welcome to Your Ultimate Music Experience</p>
        <br />
        <img src={image} alt="RhythmicRealmPicture" className="logo" />
      </header>
      <section className="features">
        <h2 className="section-title">Key Features</h2>
        <div className="features-container">
          <div className="feature">
            <h3 className="feature-title">Explore</h3>
            <p className="feature-description">
              Dive into our vast library of songs spanning across genres and
              eras.
            </p>
          </div>
          <div className="feature">
            <h3 className="feature-title">Create Playlists</h3>
            <p className="feature-description">
              Create your personalized playlists to match your mood or occasion.
            </p>
          </div>
          <div className="feature">
            <h3 className="feature-title">Premium Access</h3>
            <p className="feature-description">
              Unlock exclusive content and features with our premium membership.
            </p>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2 className="section-title">Get Started Today</h2>
        <p className="cta-description">
          Join RhythmicRealm now to embark on your musical journey. Sign up for
          free and experience music like never before.
        </p>
        <div className="cta-buttons">
          <button onClick={toggleRegister} className="btn btn-primary">
            Sign Up Now
          </button>
        </div>
      </section>
      {showLogin && (
        <div className="blur-background" onClick={toggleLogin}></div>
      )}
      {showLogin && <Login />}
      {showRegister && (
        <div className="blur-background" onClick={toggleRegister}></div>
      )}
      {showRegister && <Register />}
    </div>
  );
};

export default LandingPage;
