import React, { useState, useEffect } from "react";
import styles from "../styles/Clasters.module.css";
import ClasterModal from "./ClasterModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import cluster1 from "../assets/Cl1.svg";
import cluster2 from "../assets/Cl2.svg";
import CModal1 from "../assets/C-Modal1.svg";
import CModal2 from "../assets/C-Modal2.svg";
import claster1_2 from "../assets/claster1-2.svg";
import claster2_2 from "../assets/claster2-2.svg";
import claster1_3 from "../assets/claster1-3.svg";
import claster2_3 from "../assets/claster2-3.svg";

const clasters = [
  {
    id: 1,
    name: 'River Line Akvilon',
    description: "Уютный кластер рядом с детским садом и школой.",
    images: [cluster1, claster1_2, claster1_3],
    bgClass: "Background-primary",
    layoutImages: [CModal1],
    layoutImgClass: "modalFirst",
    layout: "Планировка River Line Akvilon",
  },
  {
    id: 2,
    name: 'Park Line Akvilon',
    description: "Рядом с лесопарком и озером, идеален для семей.",
    images: [cluster2, claster2_2, claster2_3],
    layoutImages: [CModal2],
    bgClass: "Background-secondary",
    layoutImgClass: "modalSecond",
    layout: "Планировка Park Line Akvilon",
  },
];

const Clasters = () => {
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modalData ? "hidden" : "";
  }, [modalData]);

  return (
    <section id="clasters" className={styles.container}>
      <h2 className={styles.title}>Наши кластеры</h2>

      {clasters.map((claster) => (
        <div
          key={claster.id}
          className={`${styles.block} ${styles[claster.bgClass]}`}
        >
          <div className={styles.header}>
            <div className={styles.textBlock}>
              <h3 className={styles.clusterTitle}>{claster.name}</h3>
              <p className={styles.clusterSubtitle}>{claster.description}</p>
            </div>
            <button onClick={() => setModalData(claster)}>Планировки</button>
          </div>

          <div className={styles.slider}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop
              modules={[Pagination, Navigation]}
            >
              {claster.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`${claster.name} ${i + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}

      {modalData && (
        <ClasterModal title={modalData.name} layoutImgClass={modalData.layoutImgClass} layoutImages={modalData.layoutImages} onClose={() => setModalData(null)} isOpen={!!modalData} />
      )}
    </section>
  );
};

export default Clasters;
