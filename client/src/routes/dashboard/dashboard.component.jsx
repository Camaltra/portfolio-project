import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

import NavBar from "../../components/navbar/navbar.component";
import {
  navigateToFullPath,
  navigateToRandomize,
} from "../../navigate-functions/navigate-functions";

import "./dashboard.style.scss";

const Dashboard = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL =
      process.env.REACT_APP_ENV === "dev"
        ? "http://localhost:8000"
        : process.env.REACT_APP_API_URL;

    axios
      .get(`${URL}/auth/user`, { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : user ? (
        user.githubProfile ? (
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
          <Navigate to="/welcome" />
        )
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Dashboard;
