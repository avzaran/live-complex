import React from "react";
import styles from "../styles/Advantages.module.css";
import entrance from "../assets/elevator.png";
import lift from "../assets/elevator2.png";
import lift3 from "../assets/image 153-1.svg";
import entrance3 from "../assets/image 153.svg";
import lift2 from "../assets/image 154-1.svg";
import entrance2 from "../assets/image 154.svg";
import tags from "../assets/tags.svg";
import tags2 from "../assets/tags2.svg";

const Advantages = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Современная эстетика и комфорт</h1>
      <div className={styles.subtitle}>
        <div className={styles.subtitleItem}>
          <h2 className={styles.subtitleText}>
            <img src={entrance} alt="Входные группы премиум класса" />
            Входные группы премиум класса
          </h2>
          <div className={styles.tags}><img src={tags} alt="" /></div>
          <div className={styles.subtitleImages}>
            <img src={entrance2} alt="Входные группы премиум класса" />
            <img src={entrance3} alt="Входные группы премиум класса" />
          </div>
        </div>

        <div className={styles.subtitleItem}>
          <h2 className={styles.subtitleText}>
            <img src={lift} alt="Современные лифтовые холлы" />
            Современные лифтовые холлы
          </h2>
          <div className={styles.tags}><img src={tags2} alt="" /></div>
          <div className={styles.subtitleImages}>
            <img src={lift2} alt="Современные лифтовые холлы" />
            <img src={lift3} alt="Современные лифтовые холлы" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
