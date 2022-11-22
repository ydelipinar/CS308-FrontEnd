import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';


import HomePage from "./components/Screens/HomePage";
import Signup from "./components/Screens/SignUp";
import Login from "./components/Screens/Signin";
import Navbar from "./components/Navbar";

import UserProfile from "./components/Screens/UserPage/UpdateProfile";

import DeleteProfile from "./components/Screens/UserPage/DeleteProfile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserPage from "./components/Screens/UserPage/UserPage";
import Ref from "./components/Screens/Referee";


function App() {
  const user = localStorage.getItem("token");
  console.log(user);
  return (

    <GoogleOAuthProvider clientId= "330490937140-hmot7hf3u41oijddu2efks7j3ffvoig0.apps.googleusercontent.com">
      <Navbar />
      <Routes>
        {user && <Route path="/" exact element={<HomePage />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />

        <Route path="/profile" exact element={<UserPage />} />
        <Route path="/profile/update" exact element={<UserProfile />} />
        <Route path="/profile/delete" exact element={<DeleteProfile />} />

        <Route path="/referees" exact element={<Ref />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;