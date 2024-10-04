function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🧑‍⚖️";
  if (percentage >= 80) emoji = "😊";
  if (percentage >= 50) emoji = "⭐";
  if (percentage >= 0) emoji = "🤐";
  if (percentage === 0) emoji = "😣";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>you scored<strong>{points}</strong> out of
        {maxPossiblePoints}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High score : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
      ;
    </>
  );
}

export default FinishScreen;
