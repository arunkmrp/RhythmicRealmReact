import React, { useState } from "react";
import axios from "axios";

const PasswordReset = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [resetOptionsVisible, setResetOptionsVisible] = useState(false);

  const handleCheckUser = async () => {
    try {
      // Send a request to the backend to check if the email or username exists
      const response = await axios.get(
        `http://localhost:8080/api/check-user/${emailOrUsername}`
      );

      // If the user exists, set the state to true and show reset options
      setUserExists(true);
      setResetOptionsVisible(true);
    } catch (error) {
      // If the user does not exist, display an error message
      setErrorMessage("User with the provided email/username does not exist");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userExists) {
      setErrorMessage(
        "Please check if the user exists before resetting the password"
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      // Send a request to the backend to update the user's password
      const response = await axios.post(
        "http://localhost:8080/api/reset-password",
        {
          emailOrUsername: emailOrUsername,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        }
      );
      window.location.href = "/login";

      // Handle success response
    } catch (error) {
      console.error("Error resetting password:", error);
      setErrorMessage("An error occurred while resetting your password");
    }
  };

  return (
    <div>
      <h1>Password Reset</h1>
      <div>
        <label htmlFor="emailOrUsername">Email or Username:</label>
        <input
          type="text"
          id="emailOrUsername"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          required
        />
        <button type="button" onClick={handleCheckUser}>
          Check User
        </button>
      </div>
      {userExists && resetOptionsVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default PasswordReset;
