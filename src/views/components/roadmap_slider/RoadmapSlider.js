import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../logo_slider.css';
import checkPinkAvatar from '../../../images/check-pink.png';
import nocheckAvatar from '../../../images/no-check-pink.png';

import a1 from '../../../images/a1.png';
import a2 from '../../../images/a2.png';
import a3 from '../../../images/a3.png';
import a4 from '../../../images/a4.png';
import a5 from '../../../images/a5.png';
import a6 from '../../../images/a6.png';
import a7 from '../../../images/a7.png';
import a8 from '../../../images/a8.png';
import a9 from '../../../images/a9.png';
import a10 from '../../../images/a10.png';
import a11 from '../../../images/a11.png';
import a12 from '../../../images/a12.png';
import a13 from '../../../images/a13.png';
import rightArrow from "../../../images/rightArrow.png";
import leftArrow from "../../../images/leftArrow.png";
import {useTranslation} from "react-i18next";

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
    const {className, style, onClick} = props;
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

const RoadmapSlider = () => {
    const { t,i18n } = useTranslation();


    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 4, // Display 4 cards at a time
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 400,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
        <h1 className={"roadmap-heading font-bold text-center capitalize mb-16 "}>{t('roadmap')}</h1>
    <div className="roadmap-slider-container px-7 flex flex-col">


        <Slider {...settings} className="roadmap-slider  flex justify-center items-center ">
            <div className="roadmap-slider-slide ">
                <div className={" roadmap-slider-card  w-96 h-full bg-gray-800 card-radius px-7 flex flex-col py-2"}>
                    <div className={"h-[15%] w-full   flex justify-between items-center px-3"}>
                        <div className={"h-1/2 w-[40%]"}>
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>{t('phase1')}</h1>
                        </div>
                        <div className={"h-1/2 w-[40%] flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg  px-3 rounded-xl flex justify-center items-center"}>{t('phase-1-development')}</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full  flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white w-3/4"}> {t('phase-1-title')}</h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-1"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}> {t('phase-1-list1')}</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-1-list2')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    {t('phase-1-list3')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}> {t('phase-1-list4')}

                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-1-list5')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-1-list6')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-1-list7')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-1-list8')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-1-list9')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-1-list10')}
                                </h1>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className="roadmap-slider-slide ">
                <div className={"roadmap-slider-card w-96 h-full bg-gray-800 card-radius px-7 flex flex-col py-2"}>
                    <div className={"h-[15%] w-full  flex justify-between items-center px-3"}>
                        <div className={"h-1/2 w-[40%] "}>
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>{t('phase2')}</h1>
                        </div>
                        <div className={"h-1/2 w-[40%] flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg  px-3 rounded-xl flex justify-center items-center"}>{t('phase-2-completed')}</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full  flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white w-3/4"}>{t('phase-2-title')}</h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-2"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>{t('phase-2-list1')}</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-2-list2')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    {t('phase-2-list3')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}>{t('phase-2-list4')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-2-list5')}
                                </h1>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className="roadmap-slider-slide ">
                <div className={"roadmap-slider-card h-full bg-gray-800 card-radius px-7 flex flex-col py-2"}>
                    <div className={"h-[15%] w-full  flex justify-between items-center"}>
                        <div className={"h-1/2 w-[40%] "}>
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>{t('phase3')}</h1>
                        </div>
                        <div className={"h-1/2 w-auto flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg  px-3 rounded-xl flex justify-center items-center"}>{t('phase-3-in-prog')}</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full   flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white "}>{t('phase-3-title')}</h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-2"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}> {t('phase-3-list1')}</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-3-list2')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    {t('phase-3-list3')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}>{t('phase-3-list4')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-3-list5')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-3-list6')}
                                </h1>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <div className="roadmap-slider-slide">
                <div className={"roadmap-slider-card w-96 h-full bg-gray-800 card-radius px-7 flex flex-col py-2"}>
                    <div className={"h-[15%] w-full  flex justify-between items-center px-3"}>
                        <div className={"h-1/2 w-[40%] "}>
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>{t('phase4')}</h1>
                        </div>
                        <div className={"h-1/2 w-[40%] flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg capitalize  px-3 rounded-xl flex justify-center items-center"}>{t('phase-4-upcoming')}</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full  flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white"}>{t('phase-4-title')}
                        </h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-2"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>  {t('phase-4-list1')}</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-4-list2')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    {t('phase-4-list3')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}>{t('phase-4-list4')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-4-list5')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-4-list6')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-4-list7')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-4-list8')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-4-list9')}
                                </h1>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className="roadmap-slider-slide  ">
                <div className={"roadmap-slider-card w-96 h-full bg-gray-800 card-radius px-7 flex flex-col py-2"}>
                    <div className={"h-[15%] w-full  flex justify-between items-center px-3"}>
                        <div className={"h-1/2 w-[40%] "}>
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>{t('phase5')}</h1>
                        </div>
                        <div className={"h-1/2 w-[40%] flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg  px-3 rounded-xl flex justify-center items-center text-blur"}>{t('phase-5-planned')}</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full  flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white "}>{t('phase-5-title')}</h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-2"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}> {t('phase-5-list1')}</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-5-list2')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    {t('phase-5-list3')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}>
                                    {t('phase-5-list4')}
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    {t('phase-5-list5')}
                                </h1>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </Slider>
        <div className={"roadmap-button  text-white h-auto  flex justify-center  gap-5 py-12 "}>
            <h1 className={"px-5 py-3 whitepaper rounded-full"}><p>{t('whitepaper-btn')}</p></h1>
            <h1 className={"px-5 py-3 view-in-full-roadmap rounded-full flex justify-center items-center"}><p>{t('view-btn')}</p></h1>
        </div>
    </div>
        </>
    );
};

export default RoadmapSlider;
