import { navigateToInfo } from "../../navigate-functions/navigate-functions";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import axios from "axios";

import "./login.style.scss";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL =
    process.env.REACT_APP_ENV === "dev"
      ? "http://localhost:8000"
      : process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/auth/user`, { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [URL]);

  const loginWithGoogle = () => {
    window.open(`${URL}/auth/google`, "_self");
  };

  return (
    <>
      {loading ? (
        <></>
      ) : user ? (
        <Navigate to="/dashboard" />
      ) : (
        <div className="login-container">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Login</title>
          </Helmet>
          <div className="login-header">
            <h1>Hyppo'nterview</h1>
          </div>
          <div className="login-card">
            <h1>Welcome Mate</h1>
            <h2>Please Log-In/Sign-Up</h2>
            <div className="login-google-button" onClick={loginWithGoogle}>
              <p>Connect With Google</p>
            </div>
            <p className="get-info-button" onClick={navigateToInfo}>
              Get more information about the project
            </p>
          </div>
          <div className="login-footer">
            <h3>Portfolio Project made by Mickael Boillaud</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
