import React from "react";
import style from "./SliderBox.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Img1 from "../../assets/pexels-helena-lopes-933964.jpg";
import img2 from "../../assets/pexels-pixabay-50987.jpg";
import img3 from "../../assets/pexels-vlad-bagacian-1028441.jpg";
import Image from "next/image";
import "swiper/css";

const SliderBox = () => {
    return (
        <>
            <Swiper
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide className={style.swiper_slide}>
                    <Image src={Img1} alt={Img1} />
                </SwiperSlide>
                <SwiperSlide className={style.swiper_slide}>
                    <Image src={img2} alt={img2} />
                </SwiperSlide>
                <SwiperSlide className={style.swiper_slide}>
                    <Image src={img3} alt={img3} />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderBox;
