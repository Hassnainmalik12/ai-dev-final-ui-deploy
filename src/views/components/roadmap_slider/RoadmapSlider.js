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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                background: "#32CD32",
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                background: "#32CD32",
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1
            }}
            onClick={onClick}
        />
    );
}

const RoadmapSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 4, // Display 4 cards at a time
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 400,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
        <h1 className={"roadmap-heading font-bold text-center capitalize mb-16 "}> roadmap</h1>
    <div className="roadmap-slider-container px-7 flex flex-col">


        <Slider {...settings} className="roadmap-slider  flex justify-center items-center ">
            <div className="roadmap-slider-slide ">
                <div className={" roadmap-slider-card  w-96 h-full bg-gray-800 card-radius px-7 flex flex-col py-2"}>
                    <div className={"h-[15%] w-full   flex justify-between items-center px-3"}>
                        <div className={"h-1/2 w-[40%] "}>
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>phase
                                1</h1>
                        </div>
                        <div className={"h-1/2 w-[40%] flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg  px-3 rounded-xl flex justify-center items-center"}>Development</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full  flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white w-3/4"}> Establishment and Initial
                            Development</h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-1"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}> 1. Website Builder
                                    Bot</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    2. Sniper Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    3. Smart Contract
                                    Deployer Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}> 4. Homma Prediction AI
                                    Bot (price prediction)
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    5. NSFW Image Generator
                                    AI Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    6. Image Generator AI
                                    Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    7. Meme Generator AI
                                    Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    8. AI Face Swap Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    9. AI DEV Voice Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    10. AI DEV Chatbot
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
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>phase
                                2</h1>
                        </div>
                        <div className={"h-1/2 w-[40%] flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg  px-3 rounded-xl flex justify-center items-center"}>Completed</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full  flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white w-3/4"}>Enhancement and
                            Optimization</h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-2"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}> 1. Feature
                                    Enhancements
                                    for all Bots</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    2. User Interface and
                                    Experience Improvements
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    3. Beta Testing and
                                    Feedback Integration
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}>4. Web3 Support and
                                    Partnerships
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    5. AI Model Training
                                    and Performance
                                    Optimization
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
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>phase
                                3</h1>
                        </div>
                        <div className={"h-1/2 w-auto flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg  px-3 rounded-xl flex justify-center items-center"}>In Progress</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full   flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white "}>Launch and Expansion</h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-2"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}> 1. Official Launch of
                                    All Developed Bots</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    2. Token launching &
                                    DEX Listing
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    3. Marketing and
                                    Community Building
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}>4. Strategic
                                    Partnerships and
                                    Integrations
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    5. User Onboarding and
                                    Support Systems
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-2"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    6. Introduction of
                                    Subscription and
                                    Token-Based Access
                                    Tiers
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
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>phase
                                4</h1>
                        </div>
                        <div className={"h-1/2 w-[40%] flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg capitalize  px-3 rounded-xl flex justify-center items-center"}>Upcoming</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full  flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white"}>Future Development & Cex
                            Listing
                        </h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-2"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>  1. Flash Loan Arbitrage
                                    Bot</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    2. Coin Lending Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    3. Sandwich Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}>4. MEV Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    5. Grid Trading Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    6. Signal Bot
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    7. Advanced Sentiment
                                    Analysis Integration
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    8. Staking DApp
                                    Development
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    9. Cex Listing
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
                            <h1 className={"roadmap-phase-2-text uppercase text-white flex justify-center items-center h-full"}>phase
                                5</h1>
                        </div>
                        <div className={"h-1/2 w-[40%] flex items-center justify-center"}>
                            <h1 className={"roadmap-status-button text-white text-lg  px-3 rounded-xl flex justify-center items-center text-blur"}>Planned</h1>
                        </div>
                    </div>
                    <div className={"h-[20%] w-full  flex  items-center"}>
                        <h1 className={"roadmap-card-heading capitalize text-white "}>Decentralized Computing
                            and Expansion</h1>
                    </div>


                    <div className={"main-card h-[60%] w-full flex flex-col gap-2"}>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-8 w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}> 1. Integration of
                                    Decentralized GPU Power</h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    2. Expansion of AI DEV
                                    Ecosystem
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={nocheckAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white text-sm flex  items-center h-full"}>
                                    3. Global Adoption and
                                    Community Growth
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8 flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full "}>
                                <h1 className={"text-white flex  items-center h-full text-sm"}> 4. Revenue Sharing and
                                    Incentive Programs
                                </h1>
                            </div>
                        </div>
                        <div className={"w-full flex gap-1"}>
                            <div className={"h-auto w-8  flex justify-center items-center"}>
                                <img src={checkPinkAvatar} alt="" className={"w-1/2"}/>
                            </div>
                            <div className={"h-auto w-full  "}>
                                <h1 className={"text-white flex text-sm items-center h-full"}>
                                    5. Long-Term Vision and
                                    Sustainability
                                </h1>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </Slider>
        <div className={"roadmap-button  text-white h-auto  flex justify-center gap-5 py-12"}>
            <h1 className={"px-5 py-3 whitepaper rounded-full"}>whitepaper</h1>
            <h1 className={"px-5 py-3 view-in-full-roadmap rounded-full"}>view in full roadmap</h1>
        </div>
    </div>
        </>
    );
};

export default RoadmapSlider;
