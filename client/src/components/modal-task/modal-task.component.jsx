import ReactDOM from "react-dom";

import CheckCard from "../check-card/check-card.component";

import "./modal-task.style.scss";

const ModalTask = ({ open, onClose, onCheck, checkList, isDone }) => {
  return ReactDOM.createPortal(
    open ? (
      <>
        <div className="modal-task-background"></div>
        <div className="modal-task-card">
          {onCheck ? (
            <h1>Waiting</h1>
          ) : (
            <div className="modal-task-checks-render">
              {isDone ? (
                <h1 className="modal-task-checks-render-title">GG WP</h1>
              ) : (
                <h1 className="modal-task-checks-render-title">Nope</h1>
              )}
              <div className="modal-task-check-render-check-list">
                {checkList.map((check) => {
                  return (
                    <CheckCard
                      key={check.checkId}
                      check={check}
                      fromAdmin={false}
                    />
                  );
                })}
              </div>
            </div>
          )}
          <div className="modal-task-button" onClick={onClose}>
            <p>Close</p>
          </div>
        </div>
      </>
    ) : (
      <></>
    ),
    document.getElementById("portal")
  );
};

export default ModalTask;
