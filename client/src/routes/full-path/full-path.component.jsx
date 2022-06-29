import { useContext, useState, useEffect } from "react";
import axios from "axios";

import CardTask from "../../components/card-task/card-task.components";
import NavBar from "../../components/navbar/navbar.component";
import UserProvider from "../../context/user/user.context";

import "./full-path.style.scss";

const FullPath = () => {
  const user = useContext(UserProvider.context);

  const [isLoading, setLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);
  const [allTasksToShow, setAllTasksToShow] = useState(null);

  const selectAllTaskFromSection = (sectionId) => {
    const allSectionTask = allTasks.filter(
      (task) => task.sectionId === sectionId
    );

    setAllTasksToShow(allSectionTask);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
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
        {!allTasksToShow ? (
          <div>Please select a section</div>
        ) : (
          <div className="all-card-container">
            {allTasksToShow.map((task) => {
              return <CardTask task={task} user={user} key={task.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FullPath;
