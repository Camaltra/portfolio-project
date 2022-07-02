import "./check-card.style.scss";

const CheckCard = ({ check, fromAdmin }) => {
  const alertOutput = () => {
    if (fromAdmin) alert(check.output);
  };

  return (
    <div className="check-card-container">
      {check.isGood ? (
        <h1
          className={`check-card-container-good-check ${
            fromAdmin ? "clickable" : ""
          }`}
          onClick={alertOutput}
        >
          Check {check.checkId}
        </h1>
      ) : (
        <h1
          className={`check-card-container-false-check ${
            fromAdmin ? "clickable" : ""
          }`}
          onClick={alertOutput}
        >
          Check {check.checkId}
        </h1>
      )}
    </div>
  );
};

export default CheckCard;
