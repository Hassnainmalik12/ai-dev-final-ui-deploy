import React, {useEffect, useRef, useState} from 'react';
import SplashScreen from "./views/screens/Splash_Screen/SplashScreen";
import './index.css';
import 'animate.css';
import Typing from "react-typing-effect";
import burger from "./images/burgerMenu.webp";
import Sidebar from "./views/components/sidebar/Sidebar";
import cross from "./images/cross.png";
import logoIcon from "./images/logo.png";
import addIcon from "./images/addIcon.png";
import splashGif from "./images/preloader.gif";
import Chatbot from "./images/Chatbot.png";
import ChatBot from "./views/components/chatbot/ChatBot";
import arrow from "./images/arrow.png";
import Test from "./views/components/Test";
import DevBotGifSection from "./views/components/DevBotGifSection";
import Example from "./views/screens/Example";
import BelowGallerySection from "./views/components/below_gallery_section/BelowGallerySection";
import TierSection from "./views/components/tier_section/TierSection";
import LowerTierSection from "./views/components/lower_tier-section/LowerTierSection";
import RoadmapSlider from "./views/components/roadmap_slider/RoadmapSlider";
import Tokonomics from "./views/components/tokonomics/Tokonomics";
import ResearchAndDevelopment from "./views/components/research_and_development/ResearchAndDevelopment";
import AnimatedButton from "./views/components/animated_button/AnimatedButton";
import Trade from "./views/components/trade/Trade";
function App() {



        // const [isErasing, setIsErasing] = useState(false);
        const [isVisible, setIsVisible] = useState(false);
        const [isOpen, setIsOpen] = useState(false);
        const [isOpen1, setIsOpen1] = useState(false);
        const [isOpen2, setIsOpen2] = useState(false);

        // Function to toggle the div visibility
        const toggleDiv = () => {
            setIsOpen(!isOpen);
        };
    const toggleDiv1 = () => {
        if (window.innerWidth <= 768) {
            setIsOpen1(!isOpen1);
        }
    };
        const toggleDiv2 = () => {
            setIsOpen2(!isOpen2);
        };

        const ref = useRef(null);
        const sectiontopRef = useRef(null);
        const section1Ref = useRef(null);
        const section2Ref = useRef(null);
        const section3Ref = useRef(null);
        const section4Ref = useRef(null);
        const section5Ref = useRef(null);
        const [isSplashVisible, setIsSplashVisible] = useState(true);

        const scrollToSection = (ref) => {
            const targetPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 2500; // Set the duration in milliseconds (1.5 seconds)
            let startTime = null;

            const smoothScroll = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
            };

            const easeInOutQuad = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(smoothScroll);
        };


        useEffect(() => {
            const handleScroll = () => {
                const element = ref.current;
                if (!element) return;

                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                // Check if 10% of the element is visible in the viewport
                if (
                    (elementTop < windowHeight * 0.9 && elementBottom > windowHeight * 0.1)
                ) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check on mount

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);


        useEffect(() => {
            const timer = setTimeout(() => {
                setIsSplashVisible(false);
            }, 1500);

            return () => clearTimeout(timer);
        }, []);



        return (
            <>
                {isSplashVisible ? (
                    <SplashScreen />
                ) : (
                    <div className="main  w-screen h-screen " ref={sectiontopRef}>
                        {/*burger button*/}
                        <div
                            className="custom-height-7vh  z-10 w-full flex  items-center  fixed "

                        >
                            <div className="w-16 h-16 mt- flex hidden items-center justify-center cursor-pointer"
                                 onClick={toggleDiv1}>
                                <img src={burger} alt="Burger Menu" className="h-8"/>
                            </div>
                        </div>

                        {/* Toggleable Div */}
                        {isOpen1 && (
                            <div className="sidebar-width-res flex w-12 h-12 top-0 left-0 fixed"
                                 style={{width: "85vw", height: "100vh", zIndex: 50}}>
                                <Sidebar section1Ref={section1Ref} section2Ref={section2Ref} section3Ref={section3Ref}
                                         section4Ref={section4Ref} section5Ref={section5Ref}/>
                                <div className={"h-16 w-16 flex justify-center items-center "} onClick={toggleDiv1}>
                                    <img src={cross} alt="" className={'h-8'}/>
                                </div>
                            </div>


                        )}

                        <div className="logo-res-full main-color w-full custom-height-22vh flex items-center">
                            <div className="logo-res  custom-width-15  h-full flex justify-center items-center">
                                <div className="logo w-[75%] h-[50%]   flex justify-center items-center ">
                                    <img src={logoIcon} alt="Logo" className={"h-[80%]"}/>
                                </div>
                            </div>
                            <div className="logo-res1 custom-width-75 h-full "></div>
                        </div>

                        {/*mid section height*/}

                        <div
                            className="custom-height-63vh  ai-dev-area-height-res main-color  w-full flex justify-center items-center">
                            <div className="custom-width-25 add-button-res  h-full flex justify-center items-center">
                                <div className=" w-1/5 h-1/5 flex justify-center items-center">
                                    <img src={addIcon} alt="Add Icon"/>
                                </div>
                            </div>
                            <div
                                className="ai-dev-div-main-res uppercase  w-[65%]  h-full flex flex-col justify-between items-center">
                                <p className="ai-dev-media Ai-dev-p ai-dev-pioner"
                                   >
                                    AI Dev pioneers decentralized [
                                    <span>
        <Typing
            text={["ARTIFICIAL INTELLIGENCE"]}
            speed={100}
            eraseSpeed={100}
            typingDelay={500}
            eraseDelay={500}
            cursor={'.'}
            displayTextRenderer={(text) => (
                <span style={{
                    color: '#2ecc71',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    whiteSpace: 'nowrap'
                }}>
                    <span className={"ai-span text-2xl sm:text-sm"}>.</span> {text}
                </span>
            )}
        />
    </span>
                                    ] offering innovative AI-driven Telegram bots.
                                </p>


                                <div

                                    className="ai-dev-main-title custom-height-90  w-full flex flex-col justify-center items-center">
                                    <div
                                        className={"ai-dev-div w-full h-[90%]  flex-col flex justify-center items-center"}>
                                        <p className="Ai-dev-text ai-dev-margin" style={{color:'#1f1f1f'}}>
                                            <span>A</span>
                                            <span>I</span>
                                        </p>
                                        <p className="Ai-dev-text">
                                            <span>D</span>
                                            <span>E</span>
                                            <span>V</span>
                                        </p>
                                    </div>

                                </div>
                                <p className="text-container1 uppercase Ai-dev-p Ai-dev-bottom-text-resp w-full flex justify-center items-center">
                                    AI DEV [
                                    <p className="text-container">
        <span className="font-bold green-text lower-span-block">
            Craft websites, Deploy smart <span className={"contract-block"}>contracts, Predict Prices</span>
        </span>
                                        <p className="pl-2 inline and-black-text">AND</p>
                                        <span className="pl-2 font-bold">
            Snipe trades <span className={"bracket text-black"}>]</span>
        </span>
                                    </p>

                                    <h1 className="additional-text  pl-1">All directly through your Telegram!</h1>
                                </p>


                            </div>
                            <div className="custom-width-25 add-button-res  h-full flex justify-center items-center">
                                <div className="w-1/5 h-1/5 flex justify-center items-center">
                                    <img src={addIcon} alt="Add Icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-bar  main-color bottom-bar-res bg-green-300 w-full custom-height-15vh flex">
                            <div className="custom-width-25vw h-full flex justify-center items-center" >
                                <div className="w-1/5 h-1/5 flex justify-center items-center">
                                    {/* Optionally include any content here */}
                                </div>
                            </div>
                            <div className="custom-width-50vw  h-full flex justify-center items-center relative" >
                                <div className="navbar fixed h-18 w-[45%]  bg-black p-2 rounded-lg">
                                    <div
                                        className="navbar-inner w-full h-full flex justify-between items-center px-4 bg-black py-1">
                                        <div className="h-12 flex justify-center items-center px-2">
                                            <div className="w-16 h-full flex justify-center">
                                                <img src={splashGif} alt="Splash"/>
                                            </div>
                                        </div>

                                        <div
                                            className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                            onClick={() => scrollToSection(section1Ref)}>
                                            <p className="nav-text text-white uppercase py-2">01. explore</p>
                                            <div
                                                className="hover-content p-2 flex flex-col items-center justify-between ">

                                                <h1 className={"text-white uppercase  mt-2"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center "}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                            </div>
                                            {/* Hover content div */}
                                        </div>

                                        <p className="nav-text text-white uppercase">-</p>

                                        <div
                                            className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                            onClick={() => scrollToSection(section2Ref)}>
                                            <p className="nav-text text-white uppercase py-2">02. ai bots</p>
                                            <div
                                                className="hover-content p-2 flex flex-col items-center justify-between ">

                                                <h1 className={"text-white uppercase  mt-2"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center "}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                            </div>
                                        </div>

                                        <p className="nav-text text-white uppercase">-</p>

                                        <div
                                            className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                            onClick={() => scrollToSection(section3Ref)}>
                                            <p className="nav-text text-white uppercase py-2">03. docs</p>
                                            <div
                                                className="hover-content p-2 flex flex-col items-center justify-between ">

                                                <h1 className={"text-white uppercase  mt-2"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center "}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                            </div>
                                        </div>

                                        <p className="nav-text text-white uppercase">-</p>

                                        <div
                                            className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                            onClick={() => scrollToSection(section4Ref)}>
                                            <p className="nav-text text-white uppercase py-2">04. connect</p>
                                            <div
                                                className="hover-content p-2 flex flex-col items-center justify-between ">

                                                <h1 className={"text-white uppercase  mt-2"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center "}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                            </div>
                                        </div>

                                        <p className="nav-text text-white uppercase">-</p>

                                        <div
                                            className="nav-text-div h-full flex justify-center items-center px-2 hover:cursor-pointer"
                                            onClick={() => scrollToSection(section5Ref)}>
                                            <p className="nav-text text-white uppercase py-2">05. trade</p>
                                            <div
                                                className="hover-content p-2 flex flex-col items-center justify-between ">

                                                <h1 className={"text-white uppercase  mt-2"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center "}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                                <h1 className={"text-white uppercase text-center"}>explore 1</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatbot-div-main custom-width-25vw h-full flex justify-center items-center relative ">
                                <div className="fixed w-96 h-16 z-10 flex justify-end items-center  "
                                     >
                                    <div className={"chatbot-pos w-96 h-full flex justify-end "}>
                                        <img src={Chatbot} alt="Chatbot" className="chatbot-img h-max w-24 hover:cursor-pointer" onClick={toggleDiv}/>
                                        {isOpen && (
                                            <div
                                                className="chatbot-div  toggle-div absolute bottom-full  mb-[calc(6%)] text-white flex items-center justify-end "
                                                style={{width: '600px', height: '500px'}}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ChatBot onClose={toggleDiv}/>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>

                        </div>


                        {/* Mid AI text */}
                        <div
                            className="mid-ai-text-area main-color mid-ai-text-area-res w-full flex custom-height-50vh justify-center items-center">
                            <div
                                className="ai-text-left ai-text-left-res  flex px-10 bg justify-end items-start custom-width-25 h-full"
                                ref={ref} // Move the ref here if you want to animate this element

                            >
                                <div className="w-12 h-48 arrow-res  flex items-start justify-end">
                                    <img src={arrow} alt="Arrow" style={{mixBlendMode: 'color-burn'}}
                                         className={`transition-opacity animate__animated ${isVisible ? 'animate__slideInUp animate__slower' : ''}`}/>
                                </div>
                            </div>
                            <div
                                className="ai-mid-left ai-mid-text custom-width-50 h-full flex justify-center items-start px-4 sm:px-0"
                                ref={ref}
                            >
                                <p className={`tracking-wider transition-opacity animate__animated ${isVisible ? 'animate__slideInUp animate__slow' : ''}`}>
                                    <span>AI Dev </span> aims to provide an AI ecosystem for crypto users, all
                                    accessible
                                    through
                                    the convenience of a Telegram account. Effortlessly create stunning websites with AI
                                    image
                                    generation, just a
                                    few clicks, deploy smart contracts on multiple chains, and utilize
                                    the <span>EXCLUSIVE</span> Sniper Bot,
                                    Enjoy its features such as a seamless wallet tracker, Copy trading from Telegram
                                    channels and
                                    much More!
                                </p>
                            </div>
                            <div className="ai-right-right mid-a-text-right-res custom-width-25 h-full"></div>
                        </div>

                        {/* Test carousel section */}
                        <div
                            className="owl-section w-full custom-height-px-800  main-color flex justify-center items-center overflow-x-hidden">
                            <div className="owl-section-width-res w-9/12 h-full flex justify-center items-center"
                                 ref={section1Ref}>
                                <Test/>
                            </div>
                        </div>


                        <div
                            className={"marquee-text-area-upper custom-height-90vh  w-full main-color flex flex-col justify-center items-center"}>

                            <marquee className="custom-marquee" behavior="scroll" width="100%" direction="left"

                                     scrollamount="13">
                                <h1 style={{display: "inline-block", marginRight: "50px"}}> Website AI x Sniper AI x
                                    Token
                                    Deployer
                                    x AI face Swap x Voice
                                    AI x
                                    MEME Generator x Uncensored AI</h1>
                                <h2 style={{display: "inline-block"}}> Website AI x Sniper AI x Token Deployer x AI face
                                    Swap x
                                    Voice
                                    AI x
                                    MEME Generator x Uncensored AI</h2>
                            </marquee>
                            <marquee className="custom-marquee" behavior="scroll" width="100%" direction="right"

                                     scrollamount="13">
                                <h2 style={{display: "inline-block", marginRight: "50px"}}> Website AI x Sniper AI x
                                    Token
                                    Deployer
                                    x AI face Swap x Voice
                                    AI x
                                    MEME Generator x Uncensored AI</h2>
                                <h1 style={{display: "inline-block"}}> Website AI x Sniper AI x Token Deployer x AI face
                                    Swap x
                                    Voice
                                    AI x
                                    MEME Generator x Uncensored AI</h1>
                            </marquee>


                        </div>

                        <div className={"inverted-image h-16 w-full main-color"}>

                            <img
                                src="https://assets-global.website-files.com/65297561de96778ec29ce81d/65297561de96778ec29ce82e_gallery-border-top.svg"
                                className={"gallery-border"} alt=""/>

                        </div>
                        <div className="devbot-height-res grey-color-bg custom-height-90vh  w-full bg-gray-800"
                             ref={section2Ref}>
                            <DevBotGifSection/>
                        </div>

                        {/* Example horizontal scrolling section */}

                        <Example/>

                        {/*below gallery section*/}

                        <div
                            className={"custom-height-px-2000  grey-color-bg below-gallery-section-height-res  w-full bg-gray-5"}
                            ref={section3Ref}>
                            <BelowGallerySection/>

                        </div>
                        <div
                            className={"tier-section-height-res grey-color-bg h-auto  w-full  py-10 flex justify-center items-center"}>
                            <TierSection/>
                        </div>

                        <div
                            className={"lower-tier-section-res grey-color-bg h-36 w-full bg-gray-800 flex justify-center items-center"}>
                            <LowerTierSection/>
                        </div>

                        <div
                            className={"roadmap-height-res grey-color-bg custom-height-px-700  w-full px-3 bg-gray-500"}>
                            <RoadmapSlider/>
                        </div>
                        <div className={"tokonomics-height-res custom-height-90 w-full grey-color-bg"}>

                            <Tokonomics/>

                        </div>
                        <div className={"inverted-image h-32 w-full main-color"}>

                            <img
                                src="https://assets-global.website-files.com/65297561de96778ec29ce81d/65297561de96778ec29ce82f_gallery-border-bottom.svg"
                                className={"gallery-border"} alt=""/>

                        </div>
                        <div
                            className={"research-and-development-res main-color  w-full bg-gray-400"}>
                            <ResearchAndDevelopment/>
                        </div>
                        <div className={"custom-height-px-500 main-color animated-button-height-res w-full  "}
                             ref={section4Ref}>
                            <AnimatedButton/>

                        </div>
                        <div className={"trade-height-res main-color h-screen h-screen "} ref={section5Ref}>

                            <Trade sectiontopRef={sectiontopRef}/>
                        </div>


                    </div>
                )}
            </>
        );


}


export default App;
