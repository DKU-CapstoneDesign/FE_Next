'use client';

import styles from './MyPageSlider.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MyPageSlider({ cardComponent }: { cardComponent: JSX.Element }) {
    return (
        <div className={styles.body}>
            <Swiper
                slidesPerGroup={1}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  // 1024px 이상일 때
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  // 768px 이상일 때
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  // 640px 이상일 때
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  // 320px 이상일 때
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
            >
                <SwiperSlide>
                    {cardComponent}
                </SwiperSlide>
                <SwiperSlide>
                    {cardComponent}
                </SwiperSlide>
                <SwiperSlide>
                    {cardComponent}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
