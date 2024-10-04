function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcom to The React Quiz!</h2>
      <h3>
        {numQuestions} {numQuestions > 1 ? "questions" : "question"} to test
        your React mastery
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
