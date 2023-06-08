import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import sponsorImg1 from '../../../assets/Images/sponsor_logo1.png'
import sponsorImg2 from '../../../assets/Images/sponsor_logo2.png'
import sponsorImg3 from '../../../assets/Images/sponsor_logo4.png'
import sponsorImg4 from '../../../assets/Images/sponsor_logo4.png'

const Sponsor = () => {
    return (
        <div className='bg-[#f2f7fc] py-16 text-center mb-[400px]'>
            <div className='w-11/12 mx-auto md:w-9/12'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={sponsorImg1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sponsorImg2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sponsorImg3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sponsorImg1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sponsorImg4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sponsorImg1} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Sponsor;