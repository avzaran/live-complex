import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/QuizIntro.module.css";

function QuizIntro() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Квартира вашей мечты</h1>
        <p className={styles.description}>Ответьте на 5 вопросов и получите персональный подбор</p>
        <button className={styles.button} onClick={() => navigate("/quiz/step0")}>Начать тест</button>
      </div>
    </div>
  );
}

export default QuizIntro;
