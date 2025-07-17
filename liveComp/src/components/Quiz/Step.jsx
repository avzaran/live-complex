import React from "react";
import ProgressBar from "./Progress";
import styles from "../../styles/QuizStep.module.css";


const QuizStep = ({ question, stepIndex, onAnswer, currentAnswer, totalSteps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.step}>
        <ProgressBar current={stepIndex} total={totalSteps} />
        <h3>{question.question}</h3>
        <ul className={styles.options}>
          {question.options.map((opt, i) => (
            <li key={i}>
              <button
                className={currentAnswer === opt ? styles.selected : ""}
                onClick={() => onAnswer(opt)}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizStep;
