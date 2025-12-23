import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../assests/data";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setscore] = useState(0);
  const [result, setResult] = useState(false);

  const question = data[index];

  const checkAns = (ans) => {
    if (selected !== null) return;
    setSelected(ans);
    if (ans === question.ans) {
      setscore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (index === data.length - 1) {
      setResult(true);
      return 0;
    }
    if (selected === null) return;

    setSelected(null);
    setIndex(index + 1);
  };

  const reset = () => {
    setIndex(0);
    setscore(0);
    setSelected(null);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>

          <ul>
            {[1, 2, 3, 4].map((num) => (
              <li
                key={num}
                onClick={() => checkAns(num)}
                className={
                  selected === null
                    ? ""
                    : question.ans === num
                    ? "correct"
                    : selected === num
                    ? "wrong"
                    : ""
                }
              >
                {question[`option${num}`]}
              </li>
            ))}
          </ul>

          <button onClick={nextQuestion}>Next</button>

          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}{" "}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Quiz;
