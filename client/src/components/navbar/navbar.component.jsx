import { Outlet } from "react-router-dom";

import "./navbar.style.scss";

import { ReactComponent as TaskLogo } from "../../assets/lister.svg";

const NavBar = () => {
  const logOut = () => {
    window.open("http://localhost:8000/auth/logout", "_self");
  };

  const navigateToFullPath = () => {
    window.open("/full-path", "_self");
  };

  const navigateToDashboard = () => {
    window.open("/dashboard", "_self");
  };
  return (
    <div className="nav-bar">
      <h3 className="link-to-pages">Profile</h3>
      <h3 className="link-to-pages" onClick={navigateToFullPath}>
        Full Path
      </h3>
      <div className="dashboard-header">
        <h1 onClick={navigateToDashboard}>Hyppo'nterview</h1>
      </div>
      <h3 className="link-to-pages">Randomize</h3>
      <h3 className="link-to-pages" onClick={logOut}>
        Logout
      </h3>
    </div>
  );
};

export default NavBar;
