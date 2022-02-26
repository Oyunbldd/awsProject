/* eslint-disable @typescript-eslint/no-unused-vars */
import {createContext, useEffect, useState} from "react";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
const poolData = {
  UserPoolId: " ap-southeast-1_hxIAusO0I",
  ClientId: "7s3bjqssng6pa9gva1dlaohp1c",
};
const userPool: any = new CognitoUserPool(poolData);
type functionProps = {
  email: string;
  password: string;
};
type verifyProps = {
  code: string;
};
type authProps = {
  user: any;
  setUser: any;
  token: string;
  signUp: ({email, password}: functionProps) => void;
  signIn: ({email, password}: functionProps) => void;
  verifyUser: ({code}: verifyProps) => void;
  logOut: () => void;
};
export const AuthContext = createContext<authProps>({
  user: {},
  token: "",
  setUser: null,
  signIn: () => {},
  signUp: () => {},
  verifyUser: () => {},
  logOut: () => {},
});
export const AuthProvider = ({children}: any) => {
  const [cognitoUser, setCognitoUser] = useState<any>({Pool: userPool});
  const [user, setUser] = useState<any>({});
  const [token, setToken] = useState("");

  const signUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    userPool.signUp(email, password, [], [], (err: any, result: any) => {
      if (err) throw err.message || JSON.stringify(err);
      setCognitoUser(result.user);
      return;
    });
  };
  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    let authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    let userInfo = new CognitoUser({
      Username: email,
      Pool: userPool,
    });
    return userInfo.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const tk = result.getIdToken().getJwtToken();
        setToken(tk);
      },
      onFailure: (err) => {
        throw err.message || JSON.stringify(err);
      },
    });
  };
  const verifyUser = ({code}: {code: string}) => {
    if (cognitoUser) {
      cognitoUser.confirmRegistration(code, true, (err: any, result: any) => {
        if (err) throw err.mesage || JSON.stringify(err);
        console.log("call result: " + result);
      });
    }
  };
  const logOut = async () => {
    try {
      const cognitoUser = userPool.getCurrentUser();
      if (cognitoUser !== null) {
        await cognitoUser.signOut();
      }
      return;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setUser(userPool.getCurrentUser());
  }, []);
  return (
    <AuthContext.Provider
      value={{user, setUser, signIn, signUp, verifyUser, logOut, token}}
    >
      {children}
    </AuthContext.Provider>
  );
};
