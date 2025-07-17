import React from "react";
import styles from "../styles/Contact.module.css";
const Contact = () => {

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>
          Сотрудничаем с более 20 банками - самые выгодные условия кредитования
        </h1>
        <button className={styles.button} >Получить список банков и условия кредитования</button>
      </section>

      <section className={styles.section}>
        <h1 className={styles.title}>Контакты</h1>
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <h2 className={styles.contactItemTitle}>Телефон офиса продаж</h2>
            <p className={styles.contactItemText}>+7 (999) 999-99-99</p>
            <h2 className={styles.contactItemTitle}>Адрес офиса продаж</h2>
            <p className={styles.contactItemText}>
              г. Москва, ул. Ленина, д. 1
            </p>
            <h2 className={styles.contactItemTitle}>Email</h2>
            <p className={styles.contactItemText}>info@example.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
