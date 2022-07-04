import { navigateToInfo } from "../../navigate-functions/navigate-functions";
import { Helmet } from "react-helmet";

import "./login.style.scss";

const LoginPage = () => {
  const loginWithGoogle = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  return (
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
  );
};

export default LoginPage;
