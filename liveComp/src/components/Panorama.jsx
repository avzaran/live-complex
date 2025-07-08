import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/Panorama.module.css";

import pan1 from "../assets/pan1.svg";
import pan2 from "../assets/pan2.svg";
import pan3 from "../assets/pan3.svg";

const images = [
  { src: pan1, label: "Прекрасная детская площадка во дворе" },
  { src: pan2, label: "Аккуратный комплекс зданий" },
  { src: pan3, label: "Уникальное расположение рядом с лесопарковой зоной" },
  { src: pan1, label: "Современная инфраструктура" },
  { src: pan2, label: "Благоустроенная территория" },
  { src: pan3, label: "Экологичный район" },
];

export default function Panorama() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Наслаждайтесь видами из окон своей квартиры
      </h2>

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        spaceBetween={30}
        loop
        speed={1000}
        navigation
        autoplay={{ 
          delay: 3500, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className={styles.swiper}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img src={item.src} alt={item.label} />
            <div className={styles.caption}>{item.label}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
