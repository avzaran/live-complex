import React from 'react';
import styles from '../styles/RareFormats.module.css';
import img1 from '../assets/img.svg';
import img2 from '../assets/img-1.svg';
import img3 from '../assets/img-2.svg';
import img4 from '../assets/img-3.svg';

const data = [
  {
    title: 'Свободная планировка, возможность объединить квартиры до 500 м²',
    text: 'Не ограничивайте себя при создании жилого пространства вашей мечты...',
    image: img1,
  },
  {
    title: 'Настоящий дровяной камин',
    text: 'В пентхаусах предусмотрен дымоход с возможностью установки камина...',
    image: img2,
  },
  {
    title: 'Собственная терраса до 17 м²',
    text: 'Современная терраса с панорамным видом на набережную и Воробьёвы горы...',
    image: img3,
  },
  {
    title: 'Увеличенная высота потолка',
    text: 'Почувствуйте простор помещений с увеличенной высотой потолка до 4.2 м...',
    image: img4,
  },
];

const RareFormats = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        <strong>Более 100 свободных квартир</strong><br />
        редких форматов
      </h2>

      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#" className={styles.link}>Узнать стоимость →</a>
          </div>
          <div className={styles.image}>
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default RareFormats;
