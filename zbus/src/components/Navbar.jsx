import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const Navbar = () => {
  let { user, logOut } = useContext(AuthContext);
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
        <a className="navbar-brand" href="/">
          UBus
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="lines">
                Lines & Stops
              </a>
            </li>
          </ul>

          <ul className="my-2 my-lg-0 navbar-nav ml-auto">
            <li className="nav-item {% block profile %} {% endblock %}">
              <a
                className="nav-link"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                Dark Mode
              </a>
            </li>
            <li className="nav-item {% block profile %} {% endblock %}">
              <a className="nav-link" href="/Profile">
                Profile
              </a>
            </li>
            {user ? (
              <li className="nav-item">
                <a className="nav-link" href="/login" onClick={logOut}>
                  logout
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login" onClick={logOut}>
                  login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
