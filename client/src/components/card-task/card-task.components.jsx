import "./card-task.style.scss";

const CardTask = ({ task }) => {
  const httpSendCodeToChecker = (
    taskId,
    sectionId,
    numberOfChecks,
    githubUsername
  ) => {
    console.log("checking the task");
  };

  const getClue = (clue) => {
    alert(clue);
  };

  return (
    <div className="card-task">
      <div className="card-task-title">
        <h1>{task.id}.</h1>
        <h1>{task.title}</h1>
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
                "Camaltra"
              );
            }}
          >
            Check-Code
          </div>
        </div>
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
