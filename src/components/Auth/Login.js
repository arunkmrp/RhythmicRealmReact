import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userId, setUserId] = useState(null); // State to store the user ID
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        usernameOrEmail: usernameOrEmail,
        password: password,
      });

      const { message, userId } = response.data;

      if (message === "admin") {
        // Set userId before redirecting
        setUserId(userId);
        // Redirect to admin home page
        navigate("/adminhome", { state: { userId: userId } });
      } else if (message === "customer") {
        // Set userId before redirecting
        setUserId(userId);
        // Redirect to customer home page
        navigate("/customerhome", { state: { userId: userId } });
      } else {
        // Handle other cases (if any)
        alert("Login Failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login");
    }
  };

  return (
    <div className="signin-container">
      <p>Welcome Back!</p>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="usernameOrEmail">Username or Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
        </div>
        <div className="form-group">
          <span>
            New user? <Link to="/register">Register here</Link>
          </span>
        </div>
        <div className="form-group">
          <span>
            <Link to="/forgot-password">Forgot Password?</Link>
          </span>
        </div>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default Login;
