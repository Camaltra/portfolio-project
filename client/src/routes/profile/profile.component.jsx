import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router";
import axios from "axios";

import NavBar from "../../components/navbar/navbar.component";
import { navigateToDashboard } from "../../navigate-functions/navigate-functions";

import "./profile.style.scss";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [profileInfos, setProfileInfos] = useState({
    email: "",
    username: "",
    githubProfile: "",
  });

  useEffect(() => {
    const URL =
      process.env.REACT_APP_ENV === "dev"
        ? "http://localhost:8000"
        : process.env.REACT_APP_API_URL;

    axios
      .get(`${URL}/auth/user`, { withCredentials: true })
      .then((response) => {
        setUser(response.data);
        setProfileInfos({
          email: response.data.email,
          username: response.data.username,
          githubProfile: response.data.githubProfile,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onChangeTypeUsername = (event) => {
    setProfileInfos({ ...profileInfos, username: event.target.value });
  };

  const onChangeTypeGithub = (event) => {
    setProfileInfos({ ...profileInfos, githubProfile: event.target.value });
  };

  const onChangeTypeEmail = (event) => {
    setProfileInfos({ ...profileInfos, email: event.target.value });
  };

  const URL =
    process.env.REACT_APP_ENV === "dev"
      ? "http://localhost:8000"
      : process.env.REACT_APP_API_URL;

  const updateUserInfos = async () => {
    const options = {
      method: "PUT",
      url: `${URL}/api/v1/users/${user.id}`,
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
      },
      data: profileInfos,
    };
    const result = await axios.request(options);

    if (result) {
      navigateToDashboard();
    } else {
      console.log("Error");
    }
  };

  return (
    <>
      {loading ? (
        <></>
      ) : user ? (
        <div className="profile-container">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Profile</title>
          </Helmet>
          <NavBar isUserAdmin={user.admin} />
          <div className="profile-text">
            <h1>Need to change your</h1>
            <h1 className="profile-title">Informations ?</h1>
          </div>
          <div className="profile-card">
            <div className="profile-form-container">
              <form className="profile-register-form">
                <p>Email</p>
                <input
                  value={profileInfos.email}
                  onChange={onChangeTypeEmail}
                  className="form-field"
                  placeholder="email"
                  name="email"
                  spellCheck="false"
                />
                <p>UserName</p>
                <input
                  value={profileInfos.username}
                  onChange={onChangeTypeUsername}
                  className="form-field"
                  placeholder="Username"
                  name="username"
                  spellCheck="false"
                />
                <p>GitHub Username</p>
                <input
                  value={profileInfos.githubProfile}
                  onChange={onChangeTypeGithub}
                  className="form-field"
                  placeholder="Github Username"
                  name="github-username"
                  spellCheck="false"
                />
              </form>
              <div className="profile-subbmit-button" onClick={updateUserInfos}>
                Continue
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Profile;
