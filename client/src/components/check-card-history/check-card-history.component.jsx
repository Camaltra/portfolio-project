import "./check-card-history.style.scss";

import CheckCard from "../check-card/check-card.component";

const CheckCardHistory = ({ dataCheck }) => {
  return (
    <div
      className={`check-card-history-container ${
        dataCheck.checkDetails[0].success ? "good" : "not-good"
      }`}
    >
      <div className="check-card-history-user-info">
        <h1>{dataCheck.taskId}.</h1>
        <h1>{dataCheck.userUsername}</h1>
      </div>
      <div className="check-card-history-date">
        <h1>
          {dataCheck.checkedTime.substring(8, 10)}/
          {dataCheck.checkedTime.substring(5, 7)}/
          {dataCheck.checkedTime.substring(0, 4)}
          &nbsp;at {dataCheck.checkedTime.substring(11, 19)}
          <br />
          GTM +0
        </h1>
      </div>
      <div className="check-card-history-checks-details">
        {dataCheck.checkDetails[0].checkerResult.map((check) => {
          return (
            <CheckCard key={check.checkId} check={check} fromAdmin={true} />
          );
        })}
      </div>
    </div>
  );
};

export default CheckCardHistory;
