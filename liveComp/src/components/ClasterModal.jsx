import React, { useState } from "react";
import styles from "../styles/ClasterModal.module.css";

const ClasterModal = ({
  title,
  layoutImages,
  layoutImgClass,
  onClose,
  isOpen,
}) => {
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setPhone("");
  };
  return (
    <div id="clasterModal" className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <div className={styles.modalContent}>
          <div className={`${styles.imageGrid} ${styles[layoutImgClass]}`}>
            {layoutImages.map((img, i) => (
              <img key={i} src={img} alt={`Планировка ${i + 1}`} />
            ))}
          </div>
          <div className={styles.getPlanContainer}>
            <h2 className={styles.title}>
              Получите подробную информацию и цены кластера {title}
            </h2>
            <p className={styles.subtitle}>
              получите PDF файл с планировками и ценами прямо сейчас
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={isSubmitted}
                className={styles.input}
              />
              <button
                type="submit"
                className={isSubmitted ? styles.successBtn : ""}
                disabled={isSubmitted}
              >
                {isSubmitted
                  ? "Заявка принята, ожидайте звонка"
                  : "Получить планировки"}
              </button>
              <p className={styles.acceptance}>
                Нажимая на кнопку, вы соглашаетесь с условиями <a href="#">обработки персональных данных</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClasterModal;
