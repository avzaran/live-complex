import React, { useState } from "react";
import styles from "../styles/Apartments.module.css";
import Modal from "../components/Modal";
import light_1 from "../assets/Light_1.svg";
import light_2 from "../assets/Light_2.svg";
import light_3 from "../assets/Light_3.svg";
import dark_1 from "../assets/Dark_1.svg";
import dark_2 from "../assets/Dark_2.svg";
import dark_3 from "../assets/Dark_3.svg";
import apart1 from "../assets/Apart1.svg";
import apart2 from "../assets/Apart2.svg";

const variants = [
  {
    id: "light",
    title: "Светлая отделка",
    images: [light_1, light_2, light_3],
    colors: ["#eae6de", "#d6c2a1", "#bfa382"],
    description:
      "Сочетание белых стен и светлой напольной доски с текстурой дерева расширяет пространство, формируя гармоничную, наполненную светом атмосферу",
    modalImg: apart1,
  },
  {
    id: "dark",
    title: "Тёмная отделка",
    images: [dark_1, dark_2, dark_3],
    colors: ["#6a5c4b", "#3a2d23", "#3e5a6a"],
    description:
      "Отделка в тёмном варианте формируется за счёт нейтральных оттенков стен, а также напольной доски, выполненной в цвете темного дерева",
    modalImg: apart2,
  },
];

const Apartments = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    alert(`На ваш номер отправлен дизайн-буклет`);
    closeModal();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>2 варианта отделки</h2>
      {variants.map(({ id, title, images, description, colors }) => (
        <section key={id} className={styles.section}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <button
              className={styles.downloadBtn}
              onClick={openModal}
            >
              Скачать дизайн-буклет
            </button>
          </div>
          <div className={styles.content}>
            <img src={images[0]} alt={`${title} 1`} className={styles.image} />
            <img src={images[1]} alt={`${title} 2`} className={styles.image} />
            <img src={images[2]} alt={`${title} 3`} className={styles.image} />
            <div className={styles.description}>
              <div className={styles.colorCircles}>
                {colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={styles.colorCircle}
                    style={{ background: color }}
                  />
                ))}
              </div>
              <p style={{ margin: 0 }}>{description}</p>
            </div>
          </div>
        </section>
      ))}
      {modalOpen && (
        <Modal
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Apartments;
