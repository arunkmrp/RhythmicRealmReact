import React, { useState } from "react";

const AddSong = () => {
  // State variables to store form input values
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [songLink, setSongLink] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Gather form data
    const formData = new FormData(event.target);
    const songTitle = formData.get("songTitle");
    const artist = formData.get("artist");
    const genre = formData.get("genre");
    const releaseYear = formData.get("releaseYear");
    const songLink = formData.get("songLink");

    // Create an object with the form data
    const addSongRequest = {
      songTitle,
      artist,
      genre,
      releaseYear: parseInt(releaseYear), // Convert releaseYear to a number
      songLink,
    };

    try {
      // Send a POST request to the server
      const response = await fetch("http://localhost:8080/api/admin/addsong", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addSongRequest), // Convert data to JSON format
      });

      if (response.ok) {
        // If the request was successful, redirect to another page
        window.location.href = "/admin/add-song"; // Redirect to the add-song page
      } else {
        // If there was an error, display an error message
        console.error("Error:", response.statusText);
        // You can display an error message to the user here if needed
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any other errors that occur during the request
      // You can display an error message to the user here if needed
    }
  };

  return (
    <div className="container">
      <h1>Add Song</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="songTitle">Song Title:</label>
        <input
          type="text"
          id="songTitle"
          name="songTitle"
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <label htmlFor="releaseYear">Release Year:</label>
        <input
          type="text"
          id="releaseYear"
          name="releaseYear"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          required
        />
        <label htmlFor="songLink">GitHub Song Link:</label>
        <input
          type="url"
          id="songLink"
          name="songLink"
          value={songLink}
          onChange={(e) => setSongLink(e.target.value)}
          required
        />
        <input type="submit" value="Add Song" />
      </form>
    </div>
  );
};

export default AddSong;
