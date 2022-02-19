import React, {useState} from "react";
import Button from "../components/button";
import {TextInput} from "../components/textInput";
import "../styles/main.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div id="container">
      <h1>Welcome to Login Screen</h1>
      <TextInput
        placeholder="email@address.com"
        type={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        placeholder="password"
        type={"password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          console.log("dqwdq");
        }}
      >
        Sign in
      </Button>
    </div>
  );
};
