import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Customerhome.css";
import PaymentPage from "./PaymentPage";
import axios from "axios";

const CustomerHome = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const fetchPremiumStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/${userId}/premium`
        );
        setIsPremium(response.data);
      } catch (error) {
        console.error("Error fetching premium status:", error);
      }
    };

    if (userId) {
      fetchPremiumStatus();
    }
  }, [userId]);
  return (
    <div className="customer-container">
      {isPremium ? (
        <div className="premium">
          <header>
            <h1>Welcome to the Customer Dashboard</h1>
            {/* Add any additional header content here */}
          </header>
          <nav>
            <Link to="/">Logout</Link>
          </nav>
          <div className="container">
            <div className="main-content">
              <div className="premium-section">
                <Link to="/admin/view-songs" className="back-button">
                  View Songs
                </Link>
                <p>
                  Explore the full library of songs and discover new favorites.
                </p>
              </div>
              <div className="premium-section">
                <Link to="/admin/create-playlist" className="back-button">
                  Create Playlist
                </Link>
                <p>
                  Create your own playlists and organize your favorite songs.
                </p>
              </div>
              <div className="premium-section">
                <Link to="/admin/view-playlists" className="back-button">
                  View Playlists
                </Link>
                <p>
                  View your existing playlists and enjoy your curated
                  collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="non-premium">
          <header>
            <h1>Welcome to the Customer Dashboard</h1>
          </header>
          <div className="container">
            <div className="main-content">
              <div className="non-premium-section">
                <h2>View Songs</h2>
                <p>
                  To access the full library of songs, upgrade to premium
                  membership.
                </p>
                {!userId && (
                  <Link to="/pay">
                    <PaymentPage />
                  </Link>
                )}
                {userId && (
                  <Link to="/pay" state={{ userId: userId }}>
                    <PaymentPage userId={userId} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <footer>&copy; 2024 RhythmicRealm. All rights reserved.</footer>
    </div>
  );
};

export default CustomerHome;
