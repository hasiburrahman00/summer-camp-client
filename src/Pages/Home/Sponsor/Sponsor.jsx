import React, { useEffect, useState } from 'react';
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
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const [previewValue, setPreviewValue] = useState(null);

    useEffect(() => {
        if (viewportWidth < 768) {
            setPreviewValue(1)
        } else {
            setPreviewValue(5)
        }
    }, [])




    return (
        <div className='bg-[#f2f7fc] py-16 text-center '>
            <div className='w-11/12 mx-auto md:w-9/12'>
                <Swiper
                    slidesPerView={parseInt(previewValue)}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='mx-auto' src={sponsorImg1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='mx-auto' src={sponsorImg2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='mx-auto' src={sponsorImg3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='mx-auto' src={sponsorImg1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='mx-auto' src={sponsorImg4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='mx-auto' src={sponsorImg1} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Sponsor;