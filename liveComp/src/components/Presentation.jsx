import { useState } from 'react';
import Styles from '../styles/Presentation.module.css';
import expertPhoto from '../assets/expert.svg';

export default function PresentationForm() {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Заявка отправлена:", phone);
    setPhone('');
    setIsSubmitted(true);

    // Убираем сообщение через 5 секунд
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <span className={Styles.tagline}>СПЕЦИАЛЬНО ДЛЯ ВАС</span>
        <h2 className={Styles.title}>Персональная<br />презентация от <span>AKVILON</span></h2>
        <ul className={Styles.benefits}>
          <li>➜ Подробно расскажем про жилой комплекс</li>
          <li>➜ Ознакомитесь с планировками и ценами</li>
          <li>➜ Прогуляетесь по прилегающей парковой зоне</li>
        </ul>

        <form onSubmit={handleSubmit} className={Styles.form}>
          <label htmlFor="phone">Записаться на презентацию</label>
          <div className={Styles.inputGroup}>
            <input
              id="phone"
              type="tel"
              placeholder="+7"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={isSubmitted}
            />
            <button
              type="submit"
              className={isSubmitted ? Styles.successBtn : ''}
              disabled={isSubmitted}
            >
              {isSubmitted
                ? 'Заявка принята, ожидайте звонка'
                : 'Записаться на презентацию'}
            </button>
          </div>
          <p className={Styles.privacy}>
            Нажимая на кнопку, вы даёте согласие на обработку персональных данных
            и соглашаетесь с <a href="#">политикой конфиденциальности</a>
          </p>
        </form>
      </div>

      <div className={Styles.right}>
        <img src={expertPhoto} alt="Эксперт" />
        <p className={Styles.caption}>Алина Кирющенко<br />Ведущий эксперт по недвижимости в AKVILON</p>
      </div>
    </div>
  );
}
