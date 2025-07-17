import React, { useState } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ onClose, onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Введите корректный номер");
      return;
    }
    setError("");
    onSubmit(phone);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2 className={styles.title}>Получите дизайн-буклет прямо сейчас в формате PDF</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="+7..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
          />
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.submitBtn}>
            Получить буклет
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
