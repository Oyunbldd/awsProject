import React, { useContext } from "react";
import "../styles/main.css";
import Button from "../components/button";
import { Context } from "../provider/authContext";
import axios from "axios";
export const Home = () => {
  const { logout } = useContext(Context);
  const { token } = useContext(Context);
  const get = () => {
    console.log(token);
    axios
    .get(
      "https://57jarpsam7.execute-api.ap-southeast-1.amazonaws.com/dev1/test",
      {
        headers: {
          token: token,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  };
  return (
    <div id="container">
      <div>dqwdqwdwq</div>
      <Button
        onClick={() => {
          logout();
        }}
      >
        Log out
      </Button>
      <Button
        onClick={() => {
          get();
        }}
      >
        dqwdqw
      </Button>
    </div>
  );
};
