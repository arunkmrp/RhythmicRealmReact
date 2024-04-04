// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import EditPlaylist from "./EditPlaylist"; // Import the component, not the function

// const ViewPlaylists = () => {
//   const [playlists, setPlaylists] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedPlaylist, setSelectedPlaylist] = useState(null);

//   useEffect(() => {
//     const fetchPlaylists = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/api/admin/view-playlists"
//         );
//         setPlaylists(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchPlaylists();
//   }, []);

//   const handleDeletePlaylist = async (playlistId) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/playlists/${playlistId}`);
//       setPlaylists(playlists.filter((playlist) => playlist.id !== playlistId));
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleEditPlaylist = (playlistId) => {
//     setSelectedPlaylist(playlistId); // Set the selected playlist id for editing
//   };

//   return (
//     <div className="playcontainer">
//       <h1>View Playlists</h1>
//       {error ? (
//         <p>Error fetching playlists: {error}</p>
//       ) : (
//         <div className="playlists">
//           {playlists.length === 0 ? (
//             <p>No playlists available</p>
//           ) : (
//             playlists.map((playlist) => (
//               <div className="playlist" key={playlist.id}>
//                 <label>Playlist Name:</label>
//                 <Link
//                   className="playlist-link"
//                   to={`/viewsongs/${playlist.id}`}
//                 >
//                   {playlist.playlistName}
//                 </Link>
//                 <button onClick={() => handleEditPlaylist(playlist.id)}>
//                   Edit
//                 </button>
//                 <button onClick={() => handleDeletePlaylist(playlist.id)}>
//                   Delete
//                 </button>{" "}
//                 {/* Add delete button */}
//                 <br />
//                 <label>Description:</label>
//                 <p>{playlist.description}</p>
//                 <br />
//               </div>
//             ))
//           )}
//         </div>
//       )}
//       {selectedPlaylist && <EditPlaylist playlistId={selectedPlaylist} />}
//       {/* Render the EditPlaylist component conditionally based on selectedPlaylist */}
//     </div>
//   );
// };

// export default ViewPlaylists;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import EditPlaylist from "./EditPlaylist";

const ViewPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPlaylist] = useState(null);
  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/view-playlists"
        );
        setPlaylists(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlaylists();
  }, []);

  const handleDeletePlaylist = async (playlistId) => {
    try {
      await axios.delete(`http://localhost:8080/api/playlists/${playlistId}`);
      setPlaylists(playlists.filter((playlist) => playlist.id !== playlistId));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditPlaylist = (playlistId) => {
    navigate(`/admin/edit-playlist/${playlistId}`); // Set the selected playlist id for editing
  };

  return (
    <div className="playcontainer">
      <h1>View Playlists</h1>
      {error ? (
        <p>Error fetching playlists: {error}</p>
      ) : (
        <div className="playlists">
          {playlists.length === 0 ? (
            <p>No playlists available</p>
          ) : (
            playlists.map((playlist) => (
              <div className="playlist" key={playlist.id}>
                <label>Playlist Name:</label>
                <Link
                  className="playlist-link"
                  to={`/viewsongs/${playlist.id}`}
                >
                  {playlist.playlistName}
                </Link>
                <button onClick={() => handleEditPlaylist(playlist.id)}>
                  Edit
                </button>
                <button onClick={() => handleDeletePlaylist(playlist.id)}>
                  Delete
                </button>{" "}
                {/* Add delete button */}
                <br />
                <label>Description:</label>
                <p>{playlist.description}</p>
                <br />
              </div>
            ))
          )}
        </div>
      )}
      {selectedPlaylist && <EditPlaylist />}

      {/* Render the EditPlaylist component conditionally based on selectedPlaylist */}
    </div>
  );
};

export default ViewPlaylists;
