import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AddSongsToPlaylist = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [error, setError] = useState(null);
  const { playlistId } = useParams();

  useEffect(() => {
    const fetchAllSongs = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/songs");
        if (!response.ok) {
          throw new Error("Failed to fetch all songs");
        }
        const data = await response.json();
        setAllSongs(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchPlaylistSongs = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/playlists/${playlistId}/songs`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch songs for playlist");
        }
        const data = await response.json();
        setPlaylistSongs(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAllSongs();
    fetchPlaylistSongs();
  }, [playlistId]);

  const handleAddSong = async (songId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/playlists/${playlistId}/songs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(songId),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add song to playlist");
      }

      // Update the list of available songs by filtering out the added song
      setAllSongs(allSongs.filter((song) => song.id !== songId));

      // Handle success: redirect to view playlist songs page or any other appropriate action
    } catch (error) {
      console.error("Error adding song to playlist:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  // Filter out the songs that are already in the playlist
  const availableSongs = allSongs.filter(
    (song) => !playlistSongs.some((playlistSong) => playlistSong.id === song.id)
  );

  return (
    <div>
      <h1>Add Songs to Playlist</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2>Available Songs</h2>
          <ul>
            {availableSongs.map((song) => (
              <li key={song.id}>
                <h3>{song.songTitle}</h3>
                <p>Artist: {song.artist}</p>
                <p>Genre: {song.genre}</p>
                <p>Year: {song.releaseYear}</p>
                <button onClick={() => handleAddSong(song.id)}>Add</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddSongsToPlaylist;
