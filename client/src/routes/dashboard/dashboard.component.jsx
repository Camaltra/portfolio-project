import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../../components/navbar/navbar.component";
import {
  navigateToFullPath,
  navigateToRandomize,
} from "../../navigate-functions/navigate-functions";
import UserProvider from "../../context/user/user.context";

import "./dashboard.style.scss";

const Dashboard = () => {
  const user = useContext(UserProvider.context);

  return (
    <>
      {user.githubProfile ? (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Dashboard</title>
          </Helmet>
          <NavBar isUserAdmin={user.admin} />
          <div className="dashboard-container">
            <div className="dashboard-greeting">
              <span>Welcome</span> {user.username},
            </div>
            <p className="dasboard-first-line-p">
              What's the <span>Challenge</span>
            </p>
            <p className="dasboard-second-line-p">for today?</p>
            <div className="dashboard-button-container">
              <div
                className="dashboard-redirection-button"
                onClick={navigateToFullPath}
              >
                Full-Path
              </div>
              <div
                className="dashboard-redirection-button"
                onClick={navigateToRandomize}
              >
                Randomize
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>{user ? <Navigate to="/welcome" /> : <Navigate to="/" />}</>
      )}
    </>
  );
};

export default Dashboard;
