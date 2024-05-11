'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './ContentSlider.module.css';
import Image from 'next/image';

interface contentType {
    title: string;
}

export default function ContentSlider({title} : contentType) {
    return (
        <div className={styles.body}>
            <p className={styles.title}>
                {title}
            </p>
            <Swiper
                key={title}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    1
                </SwiperSlide>
                <SwiperSlide>
                    2
                </SwiperSlide>
                <SwiperSlide>
                    3
                </SwiperSlide>
            </Swiper>
        </div>
    )
}