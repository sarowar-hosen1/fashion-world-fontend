import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

// import Swiper core and required modules
import SwiperCore, {  Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([ Thumbs]);

const ProductImagesSlider = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff"
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
            >
                {
                    images.map(img =>
                        <SwiperSlide>
                            <img src={img} alt="" />
                        </SwiperSlide>)
                }
            </Swiper>
            <br />
            <br />
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
                {
                    images.map(img =>
                        <SwiperSlide>
                            <img src={img} alt="" />
                        </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default ProductImagesSlider;