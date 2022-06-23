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
    console.log("renderTask");
    console.log(user.tasksDone[0]);
    console.log(task.id);
  }, [done]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const httpSendCodeToChecker = async (
    taskId,
    sectionId,
    numberOfChecks,
    githubUsername
  ) => {
    console.log(isCurrentlyChecking);
    setIsOpen(true);
    if (!isCurrentlyChecking) {
      setIsCurrentlyChecking(true);
      await axios
        .get(
          `http://localhost:8000/api/v1/check?task_id=${taskId}&github_username=${githubUsername}&section_id=${sectionId}&number_of_checks=${numberOfChecks}`
        )
        .then((res) => {
          console.log(res.data);
          let isDone = true;
          res.data.forEach((check) => {
            if (!check.isGood) {
              isDone = false;
            }
          });
          console.log(isDone);
          if (isDone) {
            setDone(true);
          }
          setCheckList(res.data);
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
