import React, { useState, useEffect } from "react";

const ViewSongs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/songs");
        if (!response.ok) {
          throw new Error("Failed to fetch songs");
        }
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div>
      <h1>Songs</h1>
      {songs.length === 0 ? (
        <p>No songs available</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <h2>{song.songTitle}</h2>
              <p>Artist: {song.artist}</p>
              <p>Genre: {song.genre}</p>
              <p>Year: {song.releaseYear}</p>
              <audio controls>
                <source src={song.songLink} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewSongs;
