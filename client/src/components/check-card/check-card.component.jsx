import "./check-card.style.scss";

const CheckCard = ({ check, isDone }) => {
  return (
    <div className="check-card-container">
      {check.isGood ? (
        <h1 className="check-card-container-good-check">
          Check {check.checkId}
        </h1>
      ) : (
        <h1 className="check-card-container-false-check">
          Check {check.checkId}
        </h1>
      )}
    </div>
  );
};

export default CheckCard;
