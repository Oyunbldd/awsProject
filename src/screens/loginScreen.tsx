/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Button from "../components/button";
import { TextInput } from "../components/textInput";
import { Context } from "../provider/authContext";
import "../styles/main.css";
export const Login = () => {
  const { signIn } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async () => {
    try {
      const res = signIn(email, password);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
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
      <Button onClick={() => {submit()}}>Sign in</Button>
    </div>
  );
};
