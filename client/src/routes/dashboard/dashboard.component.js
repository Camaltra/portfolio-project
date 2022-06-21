import { useContext, useState, useEffect } from "react";
import axios from "axios";

import UserProvider from "../../context/user/user.context";
import CardTask from "../../components/card-task/card-task.components";
import NavBar from "../../components/navbar/navbar.component";

import "./dashboard.style.scss";

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
    <div></div>
  ) : (
    <>
      <NavBar />
      <div className="dashboard-container">
        <div className="section-select">
          <h1>Helllloo</h1>
        </div>
        <div className="all-card-container">
          {allTasks.map((task) => {
            return <CardTask task={task} key={task.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
