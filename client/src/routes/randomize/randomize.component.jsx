import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Navigate } from "react-router";

import CardTask from "../../components/card-task/card-task.components";
import NavBar from "../../components/navbar/navbar.component";

import "./randomize.style.scss";

const Randomize = () => {
  const [task, setTask] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const downloadTask = (URL) => {
    axios
      .get(`${URL}/api/v1/tasks/random`)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const URL =
      process.env.REACT_APP_ENV === "dev"
        ? "http://localhost:8000"
        : process.env.REACT_APP_API_URL;

    axios
      .get(`${URL}/auth/user`, { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const URL =
    process.env.REACT_APP_ENV === "dev"
      ? "http://localhost:8000"
      : process.env.REACT_APP_API_URL;

  useEffect(() => {
    downloadTask(URL);
  }, [URL]);

  return (
    <>
      {loading ? (
        <></>
      ) : user ? (
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
                downloadTask(URL);
              }}
            >
              Refresh
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Randomize;
