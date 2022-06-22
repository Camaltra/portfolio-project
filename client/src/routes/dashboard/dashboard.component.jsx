import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import UserProvider from "../../context/user/user.context";

const Dashboard = () => {
  const user = useContext(UserProvider.context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return loading ? (
    <></>
  ) : (
    <>
      <h1>Welcome {user.username}</h1>
      {user.githubProfile ? (
        <p>Welcome {user.username}</p>
      ) : (
        <Navigate to="/welcome" />
      )}
    </>
  );
};

export default Dashboard;
