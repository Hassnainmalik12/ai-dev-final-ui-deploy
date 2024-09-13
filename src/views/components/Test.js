import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../test.css'; // Import custom CSS for the arrows
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'
import {useTranslation} from "react-i18next";

const Test = () => {
    const { t,i18n } = useTranslation();

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img
                src={rightArrow} // Use the custom right arrow image
                className={`${className} custom-arrow next-arrow`}
                style={{
                    ...style,
                    width: "45px",
                    height: "45px",
                    zIndex: 1,
                    cursor: "pointer",
                }}
                onClick={onClick}
                alt="Next"
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img
                src={leftArrow} // Use the custom left arrow image
                className={`${className} custom-arrow prev-arrow`}
                style={{
                    ...style,
                    width: "45px",
                    height: "45px",
                    zIndex: 1,
                    cursor: "pointer",
                }}
                onClick={onClick}
                alt="Previous"
            />
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:10000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    centerMode: true, // Enable centered mode
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true, // Enable centered mode
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true, // Enable centered mode
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="carousel-container flex flex-col px-1 justify-center w-full h-full">
            <Slider {...settings}>
                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-1')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide1-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide1-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide1-para')}</p>
                    </div>

                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-2')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide2-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide2-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide2-para')}</p>
                    </div>

                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-3')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide3-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide3-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide3-para')}</p>
                    </div>
                </div>


                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-4')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide4-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide4-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide4-para')}</p>
                    </div>
                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-5')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide5-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide5-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide5-para')}</p>
                    </div>
                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-6')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide6-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide6-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide6-para')}</p>
                    </div>
                </div>
                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-7')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide7-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide7-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide7-para')}</p>
                    </div>
                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-8')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide8-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide8-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide8-para')}</p>
                    </div>
                </div>
                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-9')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide9-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide9-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide9-para')}</p>
                    </div>
                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>{t('slide-no-10')}</h1>
                        <span className={"custom-slide-heading w-4/5"}>{t('slide10-heading')}<span
                            className={"text-green-500 uppercase inline"}>{t('slide10-heading-span')}</span></span>
                        <p className={"custom-slide-para"}> {t('slide10-para')}</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Test;
