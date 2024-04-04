import React from "react";
import { Link } from "react-router-dom";
import "./Adminhome.css";

const AdminHome = () => {
  return (
    <div className="admin-container">
      <header>
        <h1>Welcome to the Admin Dashboard</h1>
      </header>
      <nav>
        <div className="dropdown">
          <span className="dropdown-label">PlayList</span>
          <div className="dropdown-content">
            <Link to="/admin/create-playlist">Create Playlist</Link>
            <Link to="/admin/view-playlists">View Playlists</Link>
          </div>
        </div>
        <Link to="/admin/users">Users</Link>
        <Link to="/">Logout</Link>
      </nav>
      <div className="container-admin">
        <div className="main-content-admin">
          <h2>Admin Dashboard</h2>
          <p>Welcome, Admin! You have access to additional features.</p>
        </div>
        <div className="main-content-admin">
          <div className="premium-section">
            <Link to="/admin/add-song" className="back-button">
              Add Songs
            </Link>
            <p>Add new songs to the library and expand the collection.</p>
          </div>
          <div className="premium-section">
            <Link to="/admin/view-songs" className="back-button">
              View Songs
            </Link>
            <p>Explore the full library of songs and discover new favorites.</p>
          </div>
        </div>
      </div>
      <footer>&copy; 2024 RhythmicRealm. All rights reserved.</footer>
    </div>
  );
};

export default AdminHome;
