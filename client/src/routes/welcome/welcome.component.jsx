import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Helmet } from "react-helmet";
import axios from "axios";

import { navigateToDashboard } from "../../navigate-functions/navigate-functions";

import "./welcome.style.scss";

const Welcome = () => {
  const [userInfos, setUserInfo] = useState({
    username: "",
    githubProfile: "",
  });
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const onChangeTypeUsername = (event) => {
    setUserInfo({ ...userInfos, username: event.target.value });
  };

  const onChangeTypeGithub = (event) => {
    setUserInfo({ ...userInfos, githubProfile: event.target.value });
  };

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

  const updateUserInfos = async () => {
    if (userInfos.username === "") {
      alert("Please enter a userName");
    } else if (userInfos.githubProfile === "") {
      alert("Please enter your GithubProfile");
    } else {
      const options = {
        method: "PUT",
        url: `${URL}/api/v1/users/${user.id}`,
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
        },
        data: userInfos,
      };
      const result = await axios.request(options).catch((err) => {});

      const emailOptions = {
        method: "POST",
        url: `${URL}/api/v1/email/signUp`,
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
        },
        data: {
          email: user.email,
          username: userInfos.username,
        },
      };

      await axios.request(emailOptions).catch((err) => {
        console.error(err);
      });

      if (result) {
        navigateToDashboard();
      } else {
        console.log("Error");
      }
    }
  };

  return (
    <>
      {loading ? (
        <></>
      ) : user.githubProfile ? (
        <Navigate to="/dashboard" />
      ) : (
        <div className="welcome-container">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Welcome</title>
          </Helmet>
          <h1 className="welcome-title">Hippo'nterview</h1>
          <div className="welcome-card">
            <h1 className="welcome-hey">Heyyyyyy!</h1>
            <h1 className="welcome-greating">
              Nice to meet you <span>mate</span>
            </h1>
            <p>Seems to be your first time here</p>
            <p>Let's get to know each other!</p>
            <div className="welcome-form-container">
              <form className="welcome-register-form">
                <input
                  onChange={onChangeTypeUsername}
                  value={userInfos.username}
                  className="form-field"
                  placeholder="Username"
                  name="username"
                />
                <input
                  onChange={onChangeTypeGithub}
                  value={userInfos.githubProfile}
                  className="form-field"
                  placeholder="Github Username"
                  name="github-username"
                />
              </form>
              <div className="welcome-subbmit-button" onClick={updateUserInfos}>
                Continue
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
