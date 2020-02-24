import React from "react";
import { useFetch } from "./listHook";
import setAuthToken from "../../utils/setAuthToken";
import "./d.css";
import { useHistory } from "react-router-dom";
import NavBar from "./navbar";
import "./image.css";
import { Link } from "react-router-dom";
function DashBoard() {
  const history = useHistory();
  const [data, loading] = useFetch("https://dog.ceo/api/breeds/list/all");
  let rows = [];
  for (var key in data.message) {
    rows.push(key);
    //console.log("Key: " + key);
    // console.log("Value: " + data.message[key]);
  }
  const styled = {
    textTransform: "capitalize"
  };

  return (
    <div>
      <NavBar />
      <h1>List</h1>

      {rows.map(keyed => {
        return (
          <ul>
            <div className="all">
              <div className="cards">
                {loading ? (
                  "Loading..."
                ) : (
                  <div className="card shadow-1" style={styled} key={keyed}>
                    {keyed}
                  </div>
                )}

                <div />
              </div>
            </div>
          </ul>
        );
      })}
    </div>
  );
}

export default DashBoard;
