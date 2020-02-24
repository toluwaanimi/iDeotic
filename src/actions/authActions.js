import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

export const registerUser = (userData, history) => dispatch => {
  console.log(userData);
  axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    url: `https://warm-tundra-71392.herokuapp.com/user/signup`,
    data: JSON.stringify(userData)
  })
    .then(json => {
      console.log(json);
      history.push("/login");
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    url: `https://warm-tundra-71392.herokuapp.com/user/login`,
    data: JSON.stringify(userData)
  })
    .then(json => {
      console.log(json);
      const { token } = json.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));

      console.log(json);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
