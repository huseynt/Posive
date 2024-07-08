import style from "./loginDescription.module.scss";
import login_wall from '/assets/login_wall.png';
import login_person from '/assets/login_wall_person.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";

export default function Test() {
  
  const swiperRef = useRef<any>(null);
  
  
  useEffect(() => {
    const startAutoplay = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.autoplay.start();
      }
    };
    const timer = setTimeout(startAutoplay, 3000);
    return () => clearTimeout(timer);
  }, []);




  return (
    <>
      <Swiper
        ref={swiperRef}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={style.mySwiper}
      >
        <SwiperSlide>
          <img
            src={login_wall}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <div className={style.mySwiper_slide_info}>
            <h1> Unleash the Power of Our Intuitive Point of Sale Solution</h1>
            <p>Experience the future of retail with our user-friendly POS platform. Increase your sales, streamline operations, and delight your customers with a modern and efficient checkout process</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={login_person}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white">_</div>
          <div className={style.mySwiper_slide_info}>
            <h1>Unleash the Power of Our Intuitive Point of Sale Solution</h1>
            <p>Experience the future of retail with our user-friendly POS platform. Increase your sales, streamline operations, and delight your customers with a modern and efficient checkout process</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={login_wall}
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white">cscsdc</div>
          <div className={style.mySwiper_slide_info}>
            <h1>Unleash the Power of Our Intuitive Point of Sale Solution</h1>
            <p>Experience the future of retail with our user-friendly POS platform. Increase your sales, streamline operations, and delight your customers with a modern and efficient checkout process</p>
          </div>
        </SwiperSlide>        
      </Swiper>
    </>
  );
}
