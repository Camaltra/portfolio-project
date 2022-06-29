import { useContext, useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../../components/navbar/navbar.component";
import { navigateToDashboard } from "../../navigate-functions/navigate-functions";
import UserProvider from "../../context/user/user.context";

import "./profile.style.scss";

const Profile = () => {
  const user = useContext(UserProvider.context);
  const [loading, setLoading] = useState(true);

  const [profileInfos, setProfileInfos] = useState({
    email: "",
    username: "",
    githubProfile: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
    setProfileInfos({
      email: user.email,
      username: user.username,
      githubProfile: user.githubProfile,
    });
  }, [user]);

  const onChangeTypeUsername = (event) => {
    setProfileInfos({ ...profileInfos, username: event.target.value });
  };

  const onChangeTypeGithub = (event) => {
    setProfileInfos({ ...profileInfos, githubProfile: event.target.value });
  };

  const onChangeTypeEmail = (event) => {
    setProfileInfos({ ...profileInfos, email: event.target.value });
  };

  const updateUserInfos = async () => {
    const options = {
      method: "PUT",
      url: `http://localhost:8000/api/v1/users/${user.id}`,
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

  return loading ? (
    <div></div>
  ) : (
    <div className="profile-container">
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
  );
};

export default Profile;
