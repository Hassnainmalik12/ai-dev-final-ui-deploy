import React, { useState, useEffect } from 'react';
import AiDevBotDesktop from "../../images/Ai Dev Bot Pack Desktop.gif";
import AiDevBotMobile from "../../images/Ai Dev Bot Pack Mobile.gif";

const DevBotGifSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={"w-full h-full"}>
            <div className={"avatar-area avatar-area-res w-full h-[60%] flex justify-center items-center"}>
                <div className={"avatar-area-inner w-full  h-4/5 flex justify-center items-center"}>
                    <img src={isMobile ? AiDevBotMobile : AiDevBotDesktop} alt="AI Dev Bot" className={"h-auto w-auto"} />
                </div>
            </div>

            <div className={"gallery-text-area gallery-text-area-res w-full h-[40%] flex justify-start items-center"}>
                <div className={"w-full h-4/5 gallery-text-area-inner-res flex flex-col items-center justify-center"}>
                    <p className={"gallery-para uppercase"}>Live Bots:Experience our [ <strong className={"text-green-500"}> AI bots</strong> ] to
                        elevate your skills</p>
                    <h1 className={"gallery-heading mt-2"}>THE ECOSYSTEM</h1>
                    <h1 className={"gallery-heading1"}>BEHIND AI DEV</h1>
                </div>
            </div>
        </div>
    );
};

export default DevBotGifSection;
