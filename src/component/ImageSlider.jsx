import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper"
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import "../style/slider.css"
import { SliderData } from "../data/sliderData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export const ImageSlider = () =>{
    SwiperCore.use([Autoplay])
    return (
        <div className="container">
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                effect="fade"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                speed={800}
                slidesPerView={1}
                loop
                className="myswiper"
            >
                {SliderData.map((photo, i) =>
                    <SwiperSlide className="swiperslide">
                        <div className="imageSlider">
                            <img src={photo.image} alt="Slider"/>

                            <div className="boxTitle">
                                <div className="titleSlide">
                                    <div className="locationPlace">
                                        <FontAwesomeIcon icon={faLocationDot} className="iconPlace"/>
                                        <h3 className="fontBold">{photo.place}</h3>
                                    </div>
                                    <p>{photo.content}</p>
                                </div>
                                {/* <div className="linkSlide">
                                    <h3><Link>Read More!</Link></h3>
                                </div> */}
                            </div>
                            
                        </div>
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
}