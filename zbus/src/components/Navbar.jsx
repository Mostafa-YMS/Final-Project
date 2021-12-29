import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const Navbar = (props) => {
  let { logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.getElementById("nav").className =
        "navbar navbar-expand-lg navbar-dark bg-dark";
    } else {
      document.body.classList.remove("dark");
      document.getElementById("nav").className =
        "navbar navbar-expand-lg navbar-light bg-light";
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          UBus
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="lines">
                Lines & Stops
              </NavLink>
            </li>
          </ul>

          <ul className="my-2 my-lg-0 navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                onClick={() => setDarkMode(!darkMode)}
              >
                Dark Mode
              </a>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/chat">
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="" onClick={logOut}>
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
