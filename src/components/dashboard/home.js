import React from "react";
import { useFetch } from "./listHook";

function DashBoard() {
  const [data, loading] = useFetch("https://dog.ceo/api/breeds/list/all");
  for (var key in data.message) {
    console.log("Key: " + key);
    console.log("Value: " + data.message[key]);
  }
  return (
    <div>
      <h1>List</h1>

      {/* {loading ? "Loading..." : <p> data.message  <p/>} */}
    </div>
  );
}

export default DashBoard;
