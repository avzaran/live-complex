import React from 'react';
import Styles from '../styles/NavBar.module.css';

const sections = [
  { id: 'hero', label: 'Главная' },
  { id: 'panorama', label: 'Панорама' },
  { id: 'clasters', label: 'Наши кластеры' },
  { id: 'advantages', label: 'Наши преимущества' },
  { id: 'apartments', label: 'Наши отделки' },
  { id: 'contact', label: 'Контакты' },
];

const NavBar = ({ activeSection }) => {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={Styles.navbar}>
      <ul className={Styles.navList}>
        {sections.map(({ id, label }) => (
          <li
            key={id}
            className={`${Styles.navItem} ${
              activeSection === id ? Styles.activeItem : ''
            }`}
            onClick={() => handleClick(id)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
