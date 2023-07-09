import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Container from "../Container/Container";

export default function Galeri() {
    return (
        <section className="bg-gradient-to-r from-slate-50 to-sky-200">
            <Container className="overflow-hidden p-8">
                <div className="flex flex-col w-full pb-8">
                    <h2 className="text-center font-bold text-base md:text-xl lg:text-3xl">
                        Sekilas Galeri Qurban Zakat Sukses
                    </h2>
                </div>
                <Swiper
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        780: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper h-auto text-center"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </Container>
        </section>
    );
}
