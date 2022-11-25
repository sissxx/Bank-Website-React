import React from "react";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </>
  );
}

export default App;
