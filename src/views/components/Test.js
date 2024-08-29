import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../test.css'; // Import custom CSS for the arrows

const Test = () => {
    console.log("a gya render")

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow next-arrow`}
                style={{
                    ...style,
                    display: "flex",
                    background: "#32CD32",
                    width: "35px",
                    height: "35px",
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
                className={`${className} custom-arrow next-arrow`}
                style={{
                    ...style,
                    display: "flex",
                    background: "#32CD32",
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                }}
                onClick={onClick}
            />
        );
    }


    var settings = {
        dots: false,
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
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>01</h1>
                        <span className={"custom-slide-heading w-4/5"}>WEBSITE BUILDER  <span
                            className={"text-green-500 uppercase inline"}>Bot</span></span>
                        <p className={"custom-slide-para"}>This is your instant website builder on Telegram! Choose a
                            template,
                            follow simple steps, and upload content by replying to bot
                            queries.
                            Use AI prompts for quick image/logo generation. Get your new
                            website
                            files in under 5 minutes. Effortless, fast, and professional.
                            Save a
                            fortune on development costs!</p>
                    </div>

                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold uppercase w-1/2"}>02</h1>
                        <h1 className={"custom-slide-heading"}> SNIPER <span
                            className={"text-green-500 uppercase"}>Bot</span></h1>
                        <p className={"custom-slide-para"}>AI Dev Sniper Bot on Telegram! Easily snipe upcoming launches
                            or
                            trade live tokens with ease.just provide a contract address
                            and
                            investment details, and we'll handle the rest. Our automated
                            system
                            ensures seamless tax calculations, maxTx, and methodID. Set up
                            limit
                            orders, copy wallet trades, and enjoy anti-rug and honeypot
                            protection.</p>
                    </div>

                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold w-1/2"}>03</h1>
                        <h1 className={"custom-slide-heading "}> Smart Contract Deployer <span
                            className={"text-green-500 uppercase"}>Bot</span></h1>
                        <p className={"custom-slide-para"}>
                            Easily generate, deploy, and verify ERC20 or custom Solidity
                            contracts directly from Telegram. No coding knowledge is
                            required. Launch your Smart Contracts effortlessly and
                            securely with our user-friendly interface. Get started with AI
                            DEV Smart Contract Deployer Bot today and simplify blockchain
                            deployment!
                        </p>
                    </div>

                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold w-1/2"}>04</h1>
                        <h1 className={"custom-slide-heading "}>Homma Prediction AI <span
                            className={"text-green-500 uppercase"}>Bot</span></h1>
                        <p className={"custom-slide-para"}>
                            Unlock Insights with AI-Powered Chart Analysis and
                            Predictions!
                            Transform your chart data into actionable insights with our
                            Homma Prediction AI Bot. Whether you're tracking market
                            trends, monitoring performance, or seeking investment
                            opportunities, our bot provides in-depth analysis and
                            prediction to help you make informed decisions.
                        </p>
                    </div>

                </div>

                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold w-1/2"}>05</h1>
                        <h1 className={"custom-slide-heading "}>NSFW Image Generator AI <span
                            className={"text-green-500 uppercase"}>Bot</span></h1>
                        <p className={"custom-slide-para"}>
                            Unlock discreet, secure adult content tailored to your
                            prompts. Perfect for educational purposes and artistic
                            exploration. Enjoy instant delivery and complete privacy.
                            Experience sophisticated and personalized NSFW images today
                            with our innovative AI bot. We also offer SaaS for businesses
                            with specific training data.
                        </p>
                    </div>

                </div>
                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold w-1/2"}>06</h1>
                        <h1 className={"custom-slide-heading "}>Image Generator AI <span
                            className={"text-green-500 uppercase"}>Bot</span></h1>
                        <p className={"custom-slide-para"}>
                            Unleash your imagination with AI-generated art! Transform
                            ideas into stunning visuals instantly with our Image Generator
                            AI Bot. Perfect for creating unique artwork, visualizing
                            concepts, or adding a creative touch to projects. Your go-to
                            tool for all things visual and creative. We also offer SaaS
                            for businesses.
                        </p>
                    </div>

                </div>
                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold w-1/2"}>07</h1>
                        <h1 className={"custom-slide-heading "}>Meme Generator AI <span
                            className={"text-green-500 uppercase"}>Bot</span></h1>
                        <p className={"custom-slide-para"}>
                            Meme magic at your fingertips! Turn creative ideas into
                            hilarious memes instantly with our Meme Generator AI Bot.
                            Share laughs with friends, spice up chats, or enjoy daily
                            humor. Easy to use with custom prompts and instant results.
                            Create and share memes in seconds! We also offer SaaS for
                            businesses.
                        </p>
                    </div>

                </div>
                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold w-1/2"}>08</h1>
                        <h1 className={"custom-slide-heading "}>AI Face Swap  <span
                            className={"text-green-500 uppercase"}>Bot</span></h1>
                        <p className={"custom-slide-para"}>
                            Transform photos with AI-powered face swaps! Unleash
                            creativity, have fun with friends, create unique content, or
                            see yourself in a new look. Our bot provides seamless and
                            stunning face swaps effortlessly. Experience the magic of AI
                            face transformation today! We also offer SaaS for businesses.
                        </p>
                    </div>

                </div>
                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold w-1/2"}>09</h1>
                        <h1 className={"custom-slide-heading "}> AI DEV Voice  <span
                            className={"text-green-500 uppercase"}>Bot</span></h1>
                        <p className={"custom-slide-para"}>
                            Experience iconic conversations with voices like Trump, Tate,
                            Elon Musk, Vitalik Buterin, Changpeng Zhao and other custom
                            voices. Ask questions about AI DEV or other topics. We also
                            offer SaaS for businesses to train the bot with their specific
                            data for customized interactions.
                        </p>
                    </div>

                </div>
                <div className={"custom-slide px-10 "}>
                    <div className={"custom-slide-inner flex flex-col"}>
                        <h1 className={"custom-slide-number font-bold w-1/2"}>10</h1>
                        <h1 className={"custom-slide-heading "}> AI DEV  <span
                            className={"text-green-500 uppercase"}>ChatBot</span></h1>
                        <p className={"custom-slide-para"}>
                            Engage in seamless conversations on any topic with our AI
                            Chatbot. Need advice, a friendly chat, or just someone to
                            listen? Our bot is here for you. We also offer SaaS for
                            businesses to train the bot with their specific data for
                            customized interactions.
                        </p>
                    </div>

                </div>

            </Slider>
        </div>
    );
};

export default Test;
