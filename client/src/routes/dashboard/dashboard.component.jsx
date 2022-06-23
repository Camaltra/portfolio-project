import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/navbar/navbar.component";
import UserProvider from "../../context/user/user.context";

import "./dashboard.style.scss";

const Dashboard = () => {
  const user = useContext(UserProvider.context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, []);

  const navigateToFullPath = () => {
    window.open("/full-path", "_self");
  };

  return loading ? (
    <></>
  ) : (
    <>
      {user.githubProfile ? (
        <div>
          <NavBar />
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
              <div className="dashboard-redirection-button">Randomize</div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/welcome" />
      )}
    </>
  );
};

export default Dashboard;
