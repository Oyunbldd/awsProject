/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, useEffect, useState } from "react";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import { useNavigate } from "react-router";
import React from "react";
const poolData = {
  UserPoolId: "ap-southeast-1_hxIAusO0I",
  ClientId: "7s3bjqssng6pa9gva1dlaohp1c",
};
const userPool: any = new CognitoUserPool(poolData);
type ContextType = {
  user: null;
  token: string;
  errorMessage: string;
  setUser: (user: null) => void;
  setErrorMessage: (errorMessage: string) => void;
  signUp: (email: string, password: string, confirmPassword: string) => void;
  signIn: (email: string, password: string) => void;
  verifyUser: (code: string) => void;
  logout: () => void;
};
export const Context = createContext<ContextType>({
  user: null,
  errorMessage: "",
  token: "",
  setErrorMessage: () => {},
  setUser: () => {},
  signUp: () => {},
  signIn: () => {},
  logout: () => {},
  verifyUser:()=>{},
});
export const Provider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<any>(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  useEffect(() => {
    console.log(userPool.getCurrentUser());
    setUser(userPool.getCurrentUser());
  }, [userPool]);
  const signUp = (email: string, password: string, confirmPassword: string) => {
    var attributeList = [];

    var dataEmail = {
      Name: "email",
      Value: email,
    };

    var dataPhone = {
      Name: "phone_number",
      Value: "+97699999999",
    };
    let dataName = {
      Name: "name",
      Value: "Test1",
    };
    var attributeEmail = new CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new CognitoUserAttribute(dataPhone);
    var attributeName = new CognitoUserAttribute(dataName);
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);
    userPool.signUp(
      email,
      password,
      attributeList,
      [],
      function (err: { message: any }, result: { user: any }) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        var cognitoUser = result?.user;
        setUser(cognitoUser);
        console.log(cognitoUser);
        console.log("user name is " + cognitoUser?.getUsername());
        navigate("/verification");
      }
    );
  };
  const signIn = (email: string, password: string) => {
    var authenticationData = {
      Username: email,
      Password: password,
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    var userData = {
      Username: email,
      Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        setToken(accessToken);
        navigate('/')
      },
      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  };
  const logout = () => {
    var cognitoUser = userPool.getCurrentUser();
    cognitoUser?.signOut();
    setUser(null);
    navigate("login");
  };

  const verifyUser = (code : string) => {
    console.log(code);
      user.confirmRegistration(code, true, (err: any, result: any) => {
        if (err) {
          throw err.message || JSON.stringify(err);
        }
        console.log("call result: " + result);
        navigate('/')
      });
  };
  return (
    <Context.Provider
      value={{
        token,
        user,
        setUser,
        signUp,
        errorMessage,
        setErrorMessage,
        logout,
        signIn,
        verifyUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
