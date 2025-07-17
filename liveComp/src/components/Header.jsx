import React from 'react';
import Styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header id="header" className={Styles.header_card}>
            <div className={Styles.left}>
                <span>Akvilon</span>
                <span>Официальный партнер ОАО "Сбербанк"</span>
            </div>
            <div className={Styles.right}>
                <span>Круглосуточный прием звонков: 8 495 845 07 77</span>
            </div>
        </header>
    );
};

export default Header;