import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "../assets/css/artSlider.css";
import img1 from "../assets/images/arts/1_Of_1-5.jpg"
import img2 from "../assets/images/arts/1_Of_1-6.jpg"
import img3 from "../assets/images/arts/1_Of_1-7.jpg"
import img4 from "../assets/images/arts/1_Of_1-8.jpg"
import img5 from "../assets/images/arts/1_Of_1-9.jpg"
import img6 from "../assets/images/arts/1_Of_1-11.jpg"
import img7 from "../assets/images/arts/1_Of_1-12.jpg"
import img8 from "../assets/images/arts/1_Of_1-14.jpg"
import img9 from "../assets/images/arts/1_Of_1-18.jpg"
import img10 from "../assets/images/arts/1_Of_1-19.jpg"
import img11 from "../assets/images/arts/1_Of_1-21.jpg"
import img12 from "../assets/images/arts/1_Of_1-22.jpg"
import img13 from "../assets/images/arts/1_Of_1-23.jpg"
import img14 from "../assets/images/arts/1_Of_1-25.jpg"
import img15 from "../assets/images/arts/1_Of_1-26.jpg"


SwiperCore.use([Autoplay, Pagination]);
const ArtsSlider = () => {
    let images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
    ]
    return (
        <section id="nft">
            <Swiper
                data-aos="fade-up"
                autoplay={{ disableOnInteraction: false, delay: 1500 }}
                className="nft-slide-container"
                speed={500}
                initialSlide={3}
                pagination={{ clickable: true }}
                grabCursor
                spaceBetween={75}
                centerInsufficientSlides
                slidesPerView={3}
                centeredSlides
                loop={true}
                breakpoints={{

                    190: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    550: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1500: {
                        slidesPerView: 4,
                    },
                    1800: {
                        slidesPerView: 5,
                    },
                    2200: {
                        slidesPerView: 5,
                    },
                    2800: {
                        slidesPerView: 6,
                    },
                }}
            >
                {images.map((imgItem, index) => (
                    <SwiperSlide key={index} className="nft-slide">
                        <img loading="lazy"  className="nft-art-img" src={imgItem} alt="KRUICY KROCS" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default ArtsSlider
