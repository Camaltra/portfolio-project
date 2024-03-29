import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { Helmet } from "react-helmet";
import axios from "axios";

import CardTask from "../../components/card-task/card-task.components";
import NavBar from "../../components/navbar/navbar.component";

import "./full-path.style.scss";

const FullPath = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [allTasksToShow, setAllTasksToShow] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const selectAllTaskFromSection = (sectionId) => {
    const allSectionTask = allTasks.filter(
      (task) => task.sectionId === sectionId
    );

    setAllTasksToShow(allSectionTask);
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

  useEffect(() => {
    const URL =
      process.env.REACT_APP_ENV === "dev"
        ? "http://localhost:8000"
        : process.env.REACT_APP_API_URL;

    axios
      .get(`${URL}/api/v1/tasks`)
      .then((response) => setAllTasks(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : user ? (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Full Path</title>
          </Helmet>
          <NavBar isUserAdmin={user.admin} />
          <div className="full-path-container">
            <div className="section-select">
              {/* TO MAKE A COMPONENT */}
              <div
                className="section-select-button"
                onClick={() => {
                  selectAllTaskFromSection("0");
                }}
              >
                <p>Section 1</p>
              </div>
              <div
                className="section-select-button-disable"
                // onClick={() => {
                //   selectAllTaskFromSection("1");
                // }}
              >
                <p>Section 2</p>
              </div>
              <div
                className="section-select-button-disable"
                // onClick={() => {
                //   selectAllTaskFromSection("2");
                // }}
              >
                <p>Section 3</p>
              </div>
              <div
                className="section-select-button-disable"
                // onClick={() => {
                //   selectAllTaskFromSection("3");
                // }}
              >
                <p>Section 4</p>
              </div>
              <div
                className="section-select-button-disable"
                // onClick={() => {
                //   selectAllTaskFromSection("4");
                // }}
              >
                <p>Section 5</p>
              </div>
            </div>
            <div className="requirements">
              <h1>Requirements</h1>
              <p>
                Your repository <span>have to be public.</span>
              </p>
              <p>
                All your files must begin by the header{" "}
                <span>#!/usr/bin/python3.</span>
              </p>
              <p>
                All your files should work under the{" "}
                <span>3.8 python version.</span>
              </p>
              <p>
                Comments and pycodestyle aren't tested, but it's nicer with.
              </p>
              <p>
                And the most important is <span>TO HAVE FUN!.</span>
              </p>
            </div>
            {!allTasksToShow ? (
              <div></div>
            ) : (
              <div className="all-card-container">
                {allTasksToShow.map((task) => {
                  return <CardTask task={task} user={user} key={task.id} />;
                })}
              </div>
            )}
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default FullPath;
