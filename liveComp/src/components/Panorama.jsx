import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pan1 from "../assets/pan1.svg";
import pan2 from "../assets/pan2.svg";
import pan3 from "../assets/pan3.svg";
import Styles from "../styles/Panorama.module.css";

const images = [
  { src: pan1, label: "Прекрасная десткая площадка во дворе и зоны для детей всех возрастов" },
  { src: pan2, label: "Аккуратный комплекс зданий, со всеми коммерческими центрами" },
  { src: pan3, label: "Уникальное расположение рядом с лесопарковой зоной, свежий воздух везде и всегда" },
];

export default function ImageSlider() {
  return (
    <div className={Styles.sliderContainer}>
      <h2 className={Styles.sliderTitle}>
        Виды из окна твоей квартиры и общий вид завораживают
      </h2>

      <div className={Styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className={Styles.customSwiper}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className={Styles.slide}>
              <img src={item.src} alt={`Slide ${index + 1}`} />
              <div className={Styles.caption}>
                <span className={Styles.captionText}>{item.label}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
