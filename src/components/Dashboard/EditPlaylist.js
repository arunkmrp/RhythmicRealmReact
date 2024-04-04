import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const EditPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Extract id from URL

  useEffect(() => {
    const fetchPlaylistDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/playlists/${id}`
        );
        const { playlistName, description } = response.data;
        setPlaylistName(playlistName);
        setDescription(description);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlaylistDetails();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/playlists/${id}`, {
        playlistName,
        description,
      });
      navigate("/admin/view-playlists");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancel = () => {
    navigate("/admin/view-playlists");
  };

  return (
    <div className="container">
      <h1>Edit Playlist</h1>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="playlistName">Playlist Name:</label>
        <input
          type="text"
          id="playlistName"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Update Playlist</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditPlaylist;
