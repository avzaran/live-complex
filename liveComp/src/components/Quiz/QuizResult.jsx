import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../styles/QuizResult.module.css";

const QuizResult = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!state || !state.answers) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Пожалуйста, пройдите тест сначала</h2>
        <button className={styles.button} onClick={() => navigate("/quiz/")}>К началу теста</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Введите корректный номер в формате +7");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    setPhone("");
  };

  return (
    <div className={styles.container}>
     <div className={styles.result}>
        <h2 className={styles.title}>Готово! <br /> Остался последний шаг, оставьте заявку и мы пришлем вам подборку</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input className={styles.input}
            type="tel"
            placeholder="Ваш телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {error && <span className={styles.error}>{error}</span>}
          <button type="submit">{success ? <button className={styles.button} onClick={() => navigate("/")}>Подборка отправлена, вернуться в начало</button> : "Получить подборку"}</button>
        </form>
     </div>
    </div>
  );
}

export default QuizResult;
