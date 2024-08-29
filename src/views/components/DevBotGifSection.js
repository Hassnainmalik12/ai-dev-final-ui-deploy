import React from 'react';
import AiDevBot from "../../images/Ai Dev Bot Pack Desktop.gif";

const DevBotGifSection = () => {
    return (
        <div className={"w-full h-full"}>
            <div className={"avatar-area avatar-area-res w-full h-[60%] flex justify-center items-center"}>
                <div className={"full  h-4/5 flex justify-center items-center "}>
                    <img src={AiDevBot} alt="" className={" h-[100%] w-[100%]"} />
                </div>

            </div>

            <div className={"gallery-text-area gallery-text-area-res  w-full h-[40%] flex justify-start items-center "}>
                <div className={"w-full h-4/5 gallery-text-area-inner-res flex flex-col items-center justify-center "}>

                    <p className={"gallery-para uppercase"}>Live Bots:Experience our [  <strong className={"text-green-500"}> AI bots</strong>  ] to
                        elevate your skills</p>
                    <h1 className={"gallery-heading mt-2"}>THE ECOSYSTEM</h1>
                    <h1 className={"gallery-heading1"}>BEHIND AI DEV</h1>

                </div>
            </div>
        </div>
    );
};

export default DevBotGifSection;