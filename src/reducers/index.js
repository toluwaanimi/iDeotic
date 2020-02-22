import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
//import breedReducer from "./breedReducer";
//import imageReducer from "./imageReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
  //breed: breedReducer,
  //image: imageReducer
});
