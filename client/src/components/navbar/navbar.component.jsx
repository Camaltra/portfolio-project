import "./navbar.style.scss";

import {
  logOut,
  navigateToProfile,
  navigateToFullPath,
  navigateToDashboard,
} from "../../navigate-functions/navigate-functions";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h3 className="link-to-pages" onClick={navigateToProfile}>
        Profile
      </h3>
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
