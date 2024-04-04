// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Login from "./components/Auth/Login";
import AdminHome from "./components/Dashboard/Adminhome";
import CustomerHome from "./components/Dashboard/Customerhome";
import ViewSongs from "./components/Dashboard/Viewsongs";
import AddSong from "./components/Dashboard/Addsongs";
import ViewPlaylists from "./components/Dashboard/Viewplaylist";
import ViewPlaylistSongs from "./components/Dashboard/ViewPlaylistsongs";
import CreatePlaylist from "./components/Dashboard/Createplaylist";
import EditPlaylist from "./components/Dashboard/EditPlaylist";
import AddSongsToPlaylist from "./components/Dashboard/AddSongsToPlaylist";
import UsersPage from "./components/Dashboard/Users";
import PasswordReset from "./components/Auth/PasswordReset";
import PaymentPage from "./components/Dashboard/PaymentPage";

const App = () => {
  return (
    <BrowserRouter basename="/RhythmicRealmReact">
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<PasswordReset />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/customerhome" element={<CustomerHome />} />
          <Route path="/admin/view-songs" element={<ViewSongs />} />
          <Route path="/admin/add-song" element={<AddSong />} />
          <Route path="/admin/view-playlists" element={<ViewPlaylists />} />
          <Route path="/admin/create-playlist" element={<CreatePlaylist />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route
            path="/viewsongs/:playlistId"
            element={<ViewPlaylistSongs />}
          />
          <Route path="/admin/edit-playlist/:id" element={<EditPlaylist />} />
          <Route
            path="/view-playlist-songs/:playlistId"
            element={<AddSongsToPlaylist />}
          />
          <Route
            path="/add-songs-to-playlist/:playlistId"
            element={<AddSongsToPlaylist />}
          />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
