import { useContext, useState, useEffect } from "react";

import UserProvider from "../../context/user/user.context";

const Dashboard = () => {
  const user = useContext(UserProvider.context);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return isLoading ? (
    //Creer une page de loading...
    <div>
      <h1>THIS IS THE DASHBOARD</h1>
    </div>
  ) : (
    <>
      <div>
        <h1>THIS IS THE DASHBOARD</h1>
        <p>{user}</p>
      </div>
    </>
  );
};

export default Dashboard;
