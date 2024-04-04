// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CreatePlaylist = () => {
//   const [playlistName, setPlaylistName] = useState("");
//   const [description, setDescription] = useState("");
//   const [songs, setSongs] = useState([]);
//   const [selectedSongs, setSelectedSongs] = useState([]);

//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/songs");
//         setSongs(response.data);
//       } catch (error) {
//         console.error("Error fetching songs:", error);
//       }
//     };

//     fetchSongs();
//   }, []);

//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setSelectedSongs([...selectedSongs, value]);
//     } else {
//       setSelectedSongs(selectedSongs.filter((songId) => songId !== value));
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // You can send a POST request to the server to create the playlist
//       // with the selected songs
//       console.log("Playlist Name:", playlistName);
//       console.log("Description:", description);
//       console.log("Selected Songs:", selectedSongs);
//     } catch (error) {
//       console.error("Error creating playlist:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Create Playlist</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="playlistName">Playlist Name:</label>
//         <input
//           type="text"
//           id="playlistName"
//           name="playlistName"
//           value={playlistName}
//           onChange={(e) => setPlaylistName(e.target.value)}
//           required
//         />
//         <label htmlFor="description">Description:</label>
//         <input
//           type="text"
//           id="description"
//           name="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <label>Select Songs:</label>
//         <br />
//         {songs.map((song) => (
//           <div key={song.id}>
//             <input
//               type="checkbox"
//               id={`song-${song.id}`}
//               name="songs"
//               value={song.id}
//               onChange={handleCheckboxChange}
//             />
//             <label>{song.songTitle}</label>
//             <br />
//           </div>
//         ))}
//         <button type="submit" className="back-button">
//           Create Playlist
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePlaylist;

import React, { useState, useEffect } from "react";
import axios from "axios";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/songs");
        setSongs(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSongs();
  }, []);

  const handleCheckboxChange = (event, song) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedSongs([...selectedSongs, song]);
    } else {
      setSelectedSongs(
        selectedSongs.filter((selectedSong) => selectedSong.id !== song.id)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/playlists", {
        playlistName,
        description,
        songs: selectedSongs,
      });
      // Redirect or show success message
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Create Playlist</h1>
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
        <label>Select Songs:</label>
        <br />
        {songs.map((song) => (
          <div key={song.id}>
            <input
              type="checkbox"
              id={`song-${song.id}`}
              checked={selectedSongs.some(
                (selectedSong) => selectedSong.id === song.id
              )}
              onChange={(event) => handleCheckboxChange(event, song)}
            />
            <label htmlFor={`song-${song.id}`}>{song.songTitle}</label>
            <br />
          </div>
        ))}
        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
