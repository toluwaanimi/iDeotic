import React from "react";
import { useFetch } from "./hooks";
import "./image.css";
import Media from "./image";
import Header from "./header/header";
function Photo() {
  return (
    <>
      <Header />
      <Media />
    </>
  );
}

export default Photo;
