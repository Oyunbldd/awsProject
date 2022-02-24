/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";
import Button from "../components/button";
import {TextInput} from "../components/textInput";
import { CognitoUser, AuthenticationDetails ,CognitoUserAttribute} from "amazon-cognito-identity-js";
import userPool from "../components/userPool";
import "../styles/main.css";
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
export const Signup = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const tilt=()=>{
    var name={
      Name:'name',
      Value:'testing',
    }
    var phone={
      Name:'phone_number',
      Value:'+97699162182',
    }
    let attributeName=new CognitoUserAttribute(name);
    let attributePhone=new CognitoUserAttribute(phone);
    let a = []
    a.push(attributeName)
    a.push(attributePhone)
  
     userPool.signUp(email,password, a, [], (err,data)=>{ 
        if(err) console.log(err);
        console.log(data);
     });
  }
  return (
    <div id="container">
      <h1>Welcome to SignUp Screen</h1>
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
          tilt();
        }}
      >
        Sign up
      </Button>
    </div>
  );
};
