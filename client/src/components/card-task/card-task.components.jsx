import { useState, useEffect } from "react";
import axios from "axios";

import ModalTask from "../modal-task/modal-task.component";

import "./card-task.style.scss";

const CardTask = ({ task, user }) => {
  const [done, setDone] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const [isCurrentlyChecking, setIsCurrentlyChecking] = useState(false);

  useEffect(() => {
    if (user.tasksDone.includes(task.id) && !done) {
      setDone(true);
    }
  }, [done, user.tasksDone, task.id]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const URL =
    process.env.REACT_APP_ENV === "dev"
      ? "http://localhost:8000"
      : process.env.REACT_APP_API_URL;

  const httpSendCodeToChecker = async (
    taskId,
    sectionId,
    numberOfChecks,
    githubUsername
  ) => {
    setIsOpen(true);
    if (!isCurrentlyChecking) {
      setIsCurrentlyChecking(true);
      await axios
        .get(
          `${URL}/api/v1/check?task_id=${taskId}&github_username=${githubUsername}&section_id=${sectionId}&number_of_checks=${numberOfChecks}`,
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.success) setDone(true);
          setCheckList(res.data.checkerResult);
        })
        .catch((err) => {
          console.log(err);
        });
      setIsCurrentlyChecking(false);
    }
  };

  const getClue = (clue) => {
    alert(clue);
  };

  return (
    <div className="card-task">
      <div className="card-task-title">
        <div className="card-task-title-idname">
          <h1>{task.id}.</h1>
          <h1>{task.title}</h1>
        </div>
        {done ? <p>Done</p> : <p>Not Done</p>}
      </div>
      <div className="card-task-content">
        <p
          className="card-task-description"
          dangerouslySetInnerHTML={{ __html: task.description }}
        ></p>
        <div className="card-task-prototype-container">
          <p>Prototype:</p>
          <p className="card-task-prototype">{task.taskPrototype}</p>
        </div>
        <div className="card-task-exemple-container">
          <p className="card-task-exemple">{task.exemple}</p>
        </div>
        <div className="card-task-edge-cases-container">
          <p className="card-task-edge-cases-title">Edges Cases:</p>
          <div className="card-task-exemple-container">
            <p
              className="card-task-edge-cases"
              dangerouslySetInnerHTML={{ __html: task.edgeCases }}
            ></p>
          </div>
        </div>
        <div className="card-tasks-files-infos">
          <div className="card-tasks-files-infos-container">
            <p>
              Github Repo: <span>{task.githubRepo}</span>
            </p>
            <p>
              Directory: <span>{task.directoryName}</span>
            </p>
            <p>
              File: <span>{task.fileName}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card-task-button-container">
        <div className="card-task-check-button-container">
          <div
            className="card-task-button"
            onClick={() => {
              httpSendCodeToChecker(
                task.id,
                task.sectionId,
                task.numberOfChecks,
                user.githubProfile
              );
            }}
          >
            Check-Code
          </div>
        </div>
        <ModalTask
          open={modalIsOpen}
          onClose={closeModal}
          onCheck={isCurrentlyChecking}
          checkList={checkList}
          isDone={done}
        ></ModalTask>
        <div className="card-task-clue-button-container">
          {/* Create Modal here */}
          <div
            className="card-task-button"
            onClick={() => {
              getClue(task.clueOne);
            }}
          >
            Clue One
          </div>
          <div
            className="card-task-button"
            onClick={() => {
              getClue(task.clueTwo);
            }}
          >
            Clue Two
          </div>
          <div
            className="card-task-button"
            onClick={() => {
              getClue(task.optimizeSolution);
            }}
          >
            Optimize Solution
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTask;
