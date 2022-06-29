import "./check-card-history.style.scss";

const CheckCardHistory = ({ dataCheck }) => {
  return (
    <div className="check-card-history-container">
      <div className="check-card-history-user-info">
        <h1>Check ID: {dataCheck.checkId}</h1>
        <h1>Username: {dataCheck.userUsername}</h1>
        <div className="check-card-history-date">
          <h1>
            {dataCheck.checkedTime.substring(8, 10)}/
            {dataCheck.checkedTime.substring(5, 7)}/
            {dataCheck.checkedTime.substring(0, 4)}
          </h1>
          <h1>&nbsp;at {dataCheck.checkedTime.substring(11, 19)}</h1>
        </div>
      </div>
      <div className="check-card-history-checks-details">
        {dataCheck.checkDetails.map((check) => {
          return (
            <div
              key={check.checkId}
              className="check-card-history-check-container"
            >
              <div className="check-card-history-check-check">
                <h1>Check {check.checkId}:</h1>
                {check.isGood ? <h1>&nbsp;True</h1> : <h1>&nbsp;False</h1>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckCardHistory;
