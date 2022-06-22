import UserProvider from "../../context/user/user.context";
import { useContext, useState, useEffect } from "react";

import axios from "axios";

const Welcome = () => {
  const user = useContext(UserProvider.context);
  const [loading, setLoading] = useState(true);

  const [userInfos, setUserInfo] = useState({
    username: "",
    githubProfile: "",
  });

  const onChangeTypeUsername = (event) => {
    setUserInfo({ ...userInfos, username: event.target.value });
  };

  const onChangeTypeGithub = (event) => {
    setUserInfo({ ...userInfos, githubProfile: event.target.value });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const updateUserInfos = async () => {
    console.log(userInfos);
    if (userInfos.username === "") {
      console.log("Please enter a userName");
    } else if (userInfos.githubProfile === "") {
      console.log("Please enter your GithubProfile");
    } else {
      const options = {
        method: "PUT",
        url: `http://localhost:8000/api/v1/users/${user.id}`,
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
        },
        data: userInfos,
      };
      console.log(options);
      const result = await axios.request(options);

      if (result) {
        window.open("/dashboard", "_self");
      } else {
        console.log("Error");
      }
    }
  };

  return loading ? (
    <div></div>
  ) : (
    <div>
      <h1>Heyyyy ! Nice to meet you mate</h1>
      <p>Seems to be your first time here</p>
      <p>Let's get to know each other!</p>
      <div className="form-container">
        <form className="register-form">
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
        <div className="subbmit-button" onClick={updateUserInfos}>
          Continue
        </div>
      </div>
    </div>
  );
};

export default Welcome;
