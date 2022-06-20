import { useContext, useState, useEffect } from "react";
import axios from "axios";

import UserProvider from "../../context/user/user.context";

const Dashboard = () => {
  const user = useContext(UserProvider.context);

  const [isLoading, setLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/tasks")
      .then((response) => setAllTasks(response.data))
      .catch((err) => console.log(err));
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
        {allTasks.map((task) => {
          return (
            <div key={task.id}>
              <h1>{task.id}</h1>
              <p>{task.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
