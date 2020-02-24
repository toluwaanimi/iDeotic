import React from "react";
import setAuthToken from "../../utils/setAuthToken";
import "./d.css";
import { useHistory } from "react-router-dom";

import "./image.css";
import { Link } from "react-router-dom";
function NavBar() {
  const history = useHistory();

  function logout() {
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    history.push("/login");
  }

  return (
    <div>
      <button
        onClick={logout}
        style={{ float: "right", marginRight: 20 }}
        className="btn orange"
        type="button"
      >
        <span>Log Out</span>
      </button>
      <button
        style={{ float: "left", marginLeft: 20 }}
        className="btn orange"
        type="button"
      >
        <Link to="/single" style={{ color: "#FFFF" }}>
          <span>Dog Image</span>
        </Link>
      </button>
    </div>
  );
}

export default NavBar;
