import React from "react";
import { Provider } from "./provider/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/homeScreen";
import { Signup } from "./screens/signUpScreen";
import { Login } from "./screens/loginScreen";
import { Verification } from "./screens/verificationScreen";
export default function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verification" element={<Verification/>}/>
        </Routes>
      </Provider> 
    </BrowserRouter>
  );
}
