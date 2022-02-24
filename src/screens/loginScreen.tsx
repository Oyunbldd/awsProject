/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";
import Button from "../components/button";
import {TextInput} from "../components/textInput";
import  AWS from 'aws-sdk/global';
import { CognitoUser, AuthenticationDetails ,CognitoUserAttribute} from "amazon-cognito-identity-js";
import userPool from "../components/userPool";
import "../styles/main.css";
export const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const tilt=()=>{
   let authenticationData={
     Username: email,
     Password: password,
   }
   let userData = {
     Username:email,
     Pool:userPool,
   }
   let authenticationDetails = new AuthenticationDetails(authenticationData);
   let cognitoUser = new CognitoUser(userData);
   cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function(result) {
      var accessToken = result.getAccessToken().getJwtToken();
      console.log(accessToken);
      AWS.config.region = '<region>';
  
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: '...', // your identity pool id here
        Logins: {
          'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
            .getIdToken()
            .getJwtToken(),
        },
      });
      console.log(AWS.config.credentials)
    },
  
    onFailure: function(err) {
      alert(err.message || JSON.stringify(err));
    },
  });
  }
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
          tilt()
        }}
      >
        Sign in
      </Button>
    </div>
  );
};
