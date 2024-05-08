'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';

import styles from './HomeSlider.module.css';

export default function HomeSlider() {
    return (
      <div className={styles.HomeSliderBody}>
        <Swiper
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
                <div className={styles.imageWrapper}>
                        <Image
                            className={styles.image}
                            src="/img/homeSlider/positano.jpg" // public 폴더 내의 경로
                            alt="Example Image"
                            width={1000}
                            height={600}
                            objectFit="fit"
                        />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.image}
                        src="/img/homeSlider/positano.jpg" // public 폴더 내의 경로
                        alt="Example Image"
                        width={1000}
                        height={650}
                        objectFit="fit"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    );
};