import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../logo_slider.css';
import a1 from '../../../images/a1.png';
import a2 from '../../../images/a2.png';
import a3 from '../../../images/a3.png';
import a4 from  '../../../images/a4.png';
import a5 from '../../../images/a5.png';
import a6 from '../../../images/a6.png';
import a7 from '../../../images/a7.png';
import a8 from '../../../images/a8.png';
import a9 from '../../../images/a9.png';
import a10 from '../../../images/a10.png';
import a11 from '../../../images/a11.png';
import a12 from '../../../images/a12.png';
import a13 from '../../../images/a13.png';



const LogoSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 400, // Adjust as needed
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        customSlideClass: "logo_slider-slide" // Renamed custom class for slides
    };

    return (
        <div className="logo-slider-container ">
            <Slider {...settings} className="logo-slider px-5 flex gap-5">
                <div className="logo-slider-slide  px-5">
                    <img src={a1} alt="Logo 1" className={"w-[90%] px-5 "}/>
                </div>
                <div className="logo-slider-slide ">
                    <img src={a2} alt="Logo 2" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a3} alt="Logo 3" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a4} alt="Logo 4" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a5} alt="Logo 5" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a6} alt="Logo 6" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a7} alt="Logo 7" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a8} alt="Logo 8" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a9} alt="Logo 9" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a10} alt="Logo 10" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a11} alt="Logo 11" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a12} alt="Logo 12" className={"w-[90%] px-5"}/>
                </div>
                <div className="logo-slider-slide">
                    <img src={a13} alt="Logo 13" className={"w-[90%] px-5"}/>
                </div>
            </Slider>
        </div>
    );
};

export default LogoSlider;