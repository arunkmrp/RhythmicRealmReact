// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const ViewPlaylistSongs = () => {
//   const [songs, setSongs] = useState([]);
//   const [error, setError] = useState(null);
//   const { playlistId } = useParams();

//   useEffect(() => {
//     const fetchSongsForPlaylist = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/playlists/${playlistId}/songs`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch songs for playlist");
//         }
//         const data = await response.json();
//         console.log("Data returned:", data); // Log the data to see its structure
//         setSongs(data);
//       } catch (error) {
//         console.error("Error fetching songs for playlist:", error);
//         setError(error.message);
//       }
//     };

//     fetchSongsForPlaylist();
//   }, [playlistId]);

//   return (
//     <div>
//       <h1>Songs for Playlist</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : songs.length === 0 ? (
//         <p>No songs available for this playlist</p>
//       ) : (
//         <ul>
//           {songs.map((song) => (
//             <li key={song.id}>
//               <h2>{song.songTitle}</h2>
//               <p>Artist: {song.artist}</p>
//               <p>Genre: {song.genre}</p>
//               <p>Year: {song.releaseYear}</p>
//               <audio controls>
//                 <source src={song.songLink} type="audio/mpeg" />
//                 Your browser does not support the audio element.
//               </audio>
//               <Link to={`/edit-song/${song.id}`}>Edit</Link>{" "}
//               {/* Add edit button */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ViewPlaylistSongs;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ViewPlaylistSongs = () => {
//   const [songs, setSongs] = useState([]);
//   const [error, setError] = useState(null);
//   const { playlistId } = useParams();

//   useEffect(() => {
//     const fetchSongsForPlaylist = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/playlists/${playlistId}/songs`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch songs for playlist");
//         }
//         const data = await response.json();
//         setSongs(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchSongsForPlaylist();
//   }, [playlistId]);

//   const handleAddSong = async () => {
//     // Logic for adding a new song to the playlist
//     // This could involve opening a modal or redirecting to another page for adding songs
//     // For simplicity, let's just console log a message
//     console.log("Add song to playlist");
//   };

//   const handleRemoveSong = async (songId) => {
//     // Logic for removing a song from the playlist
//     // This could involve making a DELETE request to the backend API
//     // For simplicity, let's just console log a message
//     console.log(`Remove song ${songId} from playlist`);
//   };

//   return (
//     <div>
//       <h1>Songs for Playlist</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : songs.length === 0 ? (
//         <p>No songs available for this playlist</p>
//       ) : (
//         <div>
//           <h2>Song List</h2>
//           <button onClick={handleAddSong}>Add Song</button>
//           <ul>
//             {songs.map((song) => (
//               <li key={song.id}>
//                 <h3>{song.songTitle}</h3>
//                 <p>Artist: {song.artist}</p>
//                 <p>Genre: {song.genre}</p>
//                 <p>Year: {song.releaseYear}</p>
//                 <button onClick={() => handleRemoveSong(song.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewPlaylistSongs;
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const ViewPlaylistSongs = () => {
//   const [allSongs, setAllSongs] = useState([]);
//   const [playlistSongs, setPlaylistSongs] = useState([]);
//   const [error, setError] = useState(null);
//   const { playlistId } = useParams();
//   const [addingSongs, setAddingSongs] = useState(false); // State to track if user is adding songs

//   useEffect(() => {
//     const fetchAllSongs = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/songs");
//         if (!response.ok) {
//           throw new Error("Failed to fetch all songs");
//         }
//         const data = await response.json();
//         setAllSongs(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchPlaylistSongs = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/playlists/${playlistId}/songs`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch songs for playlist");
//         }
//         const data = await response.json();
//         setPlaylistSongs(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchAllSongs();
//     fetchPlaylistSongs();
//   }, [playlistId]);

//   const handleAddSongsClick = () => {
//     setAddingSongs(true); // Set state to indicate user is adding songs
//   };

//   const handleRemoveSong = async (songId) => {
//     // Logic for removing a song from the playlist
//     // This could involve making a DELETE request to the backend API
//     // For simplicity, let's just console log a message
//     console.log(`Remove song ${songId} from playlist`);
//   };

//   return (
//     <div>
//       <h1>Songs for Playlist</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : playlistSongs.length === 0 ? (
//         <p>No songs available for this playlist</p>
//       ) : (
//         <div>
//           <h2>Playlist Songs</h2>
//           <ul>
//             {playlistSongs.map((song) => (
//               <li key={song.id}>
//                 <h3>{song.songTitle}</h3>
//                 <p>Artist: {song.artist}</p>
//                 <p>Genre: {song.genre}</p>
//                 <p>Year: {song.releaseYear}</p>
//                 <button onClick={() => handleRemoveSong(song.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <Link to={`/add-songs-toplaylist/${playlistId}`}>Add Songs</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewPlaylistSongs;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ViewPlaylistSongs = () => {
//   const [allSongs, setAllSongs] = useState([]);
//   const [playlistSongs, setPlaylistSongs] = useState([]);
//   const [error, setError] = useState(null);
//   const [addingSongs, setAddingSongs] = useState(false); // State to track if user is adding songs
//   const { playlistId } = useParams();

//   useEffect(() => {
//     const fetchAllSongs = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/songs");
//         if (!response.ok) {
//           throw new Error("Failed to fetch all songs");
//         }
//         const data = await response.json();
//         setAllSongs(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchPlaylistSongs = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/playlists/${playlistId}/songs`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch songs for playlist");
//         }
//         const data = await response.json();
//         setPlaylistSongs(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchAllSongs();
//     fetchPlaylistSongs();
//   }, [playlistId]);

//   const handleAddSongsClick = () => {
//     setAddingSongs(true); // Set state to indicate user is adding songs
//   };

//   const handleAddSong = async (songId) => {
//     try {
//       // Send a POST request to your backend API to add the song to the playlist
//       const response = await fetch(
//         `http://localhost:8080/api/playlists/${playlistId}/songs`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(songId),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to add song to playlist");
//       }

//       // Update the playlistSongs state to reflect the changes
//       setPlaylistSongs([
//         ...playlistSongs,
//         { id: songId /* Add other song properties */ },
//       ]);
//     } catch (error) {
//       console.error("Error adding song to playlist:", error);
//       // Handle error appropriately, e.g., show an error message to the user
//     }
//   };

//   const handleRemoveSong = async (songId) => {
//     try {
//       // Send a DELETE request to your backend API to remove the song from the playlist
//       const response = await fetch(
//         `http://localhost:8080/api/playlists/${playlistId}/songs/${songId}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to remove song from playlist");
//       }

//       // Update the playlistSongs state to reflect the changes
//       setPlaylistSongs(playlistSongs.filter((song) => song.id !== songId));
//     } catch (error) {
//       console.error("Error removing song from playlist:", error);
//       // Handle error appropriately, e.g., show an error message to the user
//     }
//   };

//   // Filter out the songs that are not in the playlist
//   const availableSongs = allSongs.filter(
//     (song) => !playlistSongs.some((playlistSong) => playlistSong.id === song.id)
//   );

//   return (
//     <div>
//       <h1>Songs for Playlist</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : playlistSongs.length === 0 ? (
//         <p>No songs available for this playlist</p>
//       ) : (
//         <div>
//           <h2>Playlist Songs</h2>
//           <ul>
//             {playlistSongs.map((song) => (
//               <li key={song.id}>
//                 <h3>{song.songTitle}</h3>
//                 <p>Artist: {song.artist}</p>
//                 <p>Genre: {song.genre}</p>
//                 <p>Year: {song.releaseYear}</p>
//                 <button onClick={() => handleRemoveSong(song.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           {!addingSongs && (
//             <button onClick={handleAddSongsClick}>Add Songs</button>
//           )}
//           {addingSongs && (
//             <div>
//               <h2>Available Songs</h2>
//               <ul>
//                 {availableSongs.map((song) => (
//                   <li key={song.id}>
//                     <h3>{song.songTitle}</h3>
//                     <p>Artist: {song.artist}</p>
//                     <p>Genre: {song.genre}</p>
//                     <p>Year: {song.releaseYear}</p>
//                     <button onClick={() => handleAddSong(song.id)}>Add</button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewPlaylistSongs;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ViewPlaylistSongs = () => {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [error, setError] = useState(null);
  const { playlistId } = useParams();

  useEffect(() => {
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

    fetchPlaylistSongs();
  }, [playlistId]);

  const handleRemoveSong = async (songId) => {
    try {
      // Send a DELETE request to your backend API to remove the song from the playlist
      const response = await fetch(
        `http://localhost:8080/api/playlists/${playlistId}/songs/${songId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove song from playlist");
      }

      // Update the playlistSongs state to reflect the changes
      setPlaylistSongs(playlistSongs.filter((song) => song.id !== songId));
    } catch (error) {
      console.error("Error removing song from playlist:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h1>Songs for Playlist</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : playlistSongs.length === 0 ? (
        <p>No songs available for this playlist</p>
      ) : (
        <div>
          <h2>Playlist Songs</h2>
          <ul>
            {playlistSongs.map((song) => (
              <li key={song.id}>
                <h3>{song.songTitle}</h3>
                <p>Artist: {song.artist}</p>
                <p>Genre: {song.genre}</p>
                <p>Year: {song.releaseYear}</p>
                <button onClick={() => handleRemoveSong(song.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <Link to={`/add-songs-to-playlist/${playlistId}`}>Add Songs</Link>
        </div>
      )}
    </div>
  );
};

export default ViewPlaylistSongs;
