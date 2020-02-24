import React from "react";
import { useFetch } from "./hooks";
import "./image.css";
import { Link } from "react-router-dom";

function Photo() {
  const [data, loading] = useFetch("https://dog.ceo/api/breeds/image/random");
  console.log(data);
  function fetched(e) {
    window.location.reload();
  }
  return (
    <>
      <button
        style={{ float: "left", marginLeft: 20 }}
        className="btn orange"
        type="button"
      >
        <Link to="/dashboard" style={{ color: "#FFFF" }}>
          <span>Dashboard</span>
        </Link>
      </button>
      <h1>Photo</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card-type-2">
                <div className="img-c">
                  <img src={data.message} alt="Dogs" width="400" height="400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <button className="btn orange" type="button" onClick={fetched}>
        <span>View Another</span>
      </button>
    </>
  );
}

export default Photo;
