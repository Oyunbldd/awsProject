import React from "react";
import {AuthProvider} from "./provider/authContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./screens/homeScreen";
import {Signup} from "./screens/signUpScreen";
import {Login} from "./screens/loginScreen";
export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </BrowserRouter>
  );
}
