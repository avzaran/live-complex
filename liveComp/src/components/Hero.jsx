import React from 'react';
import Styles from '../styles/Hero.module.css'
import hero from '../assets/hero.svg'
import h1 from '../assets/h1.svg'
import h2 from '../assets/h2.svg'
import h3 from '../assets/h3.svg'

const Hero = () => {
    return (
        <div className={Styles.hero}>
            <h1>Жизнь в районе с развитой и уютной инфраструктурой</h1>
            <p>Жилой комплекс недалеко от центра, но в то же время в тихом и уютном месте</p>
            <img src={hero} alt="hero" className={Styles.hero} />
            <div className={Styles.sub_hero}>
                <div>
                    <img src={h1} alt="h1" className={Styles.h1} />
                    <span>20 гектаров жилого комплекса</span>
                </div>
                <div>
                    <img src={h2} alt="h2" className={Styles.h2} />
                    <span>2 километра от центрального кольца</span>
                </div>
                 <div>
                    <img src={h3} alt="h3" className={Styles.h3} />
                    <span>7 гектаров ближайшей лесопарковой зоны</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;