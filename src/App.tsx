import React from "react";
//import { UserProvider } from './provider/provider';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./screens/homeScreen";
import {Signup} from "./screens/signUpScreen";
import {Login} from "./screens/loginScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
