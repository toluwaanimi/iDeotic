import React from "react";
import { useFetch } from "./hooks";

function Photo() {
  const [data, loading] = useFetch("https://dog.ceo/api/breeds/image/random");
  console.log(data);
  return (
    <>
      <h1>Photo</h1>
      {loading ? "Loading..." : <img src={data.message} alt="done" />}
    </>
  );
}

export default Photo;
