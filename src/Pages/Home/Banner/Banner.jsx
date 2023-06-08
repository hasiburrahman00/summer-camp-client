import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'
import { BsFillPersonPlusFill, BsFillPlusCircleFill } from 'react-icons/bs';

const Banner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderContent = <>
        <div className="w-10/12  md:w-1/2  mx-auto  text-center" >
            <h5 className="text-xl md:text-2xl font-bold text-[#f5b016]">#IMPROVING LIVES THROUGH LEARNING</h5>
            <h1 className="text-4xl md:text-6xl md:my-4 font-bold text-white">TOP CLASS LEARNING <br /> FROM EVERYWHERE</h1>
            <p className="text-white py-4 md:my-8 ">We believe everyone has the capacity to be creative. Turitor is a <br className="md:block hidden" /> place where people develop their own potential</p>
            <div className="pt-12 md:pt-0">
                <button className="btn btn-warning text-white font-semibold tracking-widest	 mr-4"> <BsFillPersonPlusFill /> Start Trial</button>
                <button className="btn btn-primary text-white font-semibold tracking-widest	 "> <BsFillPlusCircleFill /> View Courses</button>
            </div>
        </div>
    </>

    return (
        <Slider {...settings} className="z-10">
            <div className="slider-1">
                <div className="bg-black bg-opacity-60 min-h-screen md:py-52 py-32">
                    {sliderContent}
                </div>
            </div>
            <div className="slider-2">
                <div className="bg-black bg-opacity-60 min-h-screen md:py-52 py-32">
                    {sliderContent}
                </div>
            </div>
            <div className="slider-3">
                <div className="bg-black bg-opacity-60 min-h-screen md:py-52 py-32">
                    {sliderContent}
                </div>
            </div>

        </Slider>
    );
};

export default Banner;