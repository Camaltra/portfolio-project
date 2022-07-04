import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import CardTask from "../../components/card-task/card-task.components";
import NavBar from "../../components/navbar/navbar.component";
import UserProvider from "../../context/user/user.context";

import "./randomize.style.scss";

const Randomize = () => {
  const user = useContext(UserProvider.context);

  const [task, setTask] = useState({});
  const [isLoading, setLoading] = useState(true);

  const downloadTask = () => {
    axios
      .get("http://localhost:8000/api/v1/tasks/random")
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    downloadTask();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Randomize</title>
      </Helmet>
      <NavBar isUserAdmin={user.admin} />
      <div className="randomize-container">
        <div className="randomize-card-container">
          <CardTask task={task} user={user} />
        </div>
        <div
          className="randomize-button"
          onClick={() => {
            downloadTask();
          }}
        >
          Refresh
        </div>
      </div>
    </>
  );
};

export default Randomize;
