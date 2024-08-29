import React from 'react';
import preloader from '../../../images/preloader.gif'
import arrowDown from '../../../images/white-arrow-down.png'

const ChatBot = ({onClose}) => {
    return (
        <div className={"chatbot-div-inside w-full h-full flex justify-center  items-center"}>
            <div className={"chatbot-pos-res w-[60%] h-[90%]  flex justify-start"}>
                <div className={"w-[70%] h-full inner light-grey-color-bg rounded-xl p-1"}>
                    <div className={"h-[20%] w-full  flex justify-between items-center"}>

                        <div className={"w-[45%] h-[80%]  flex items-center justify-center gap-3"}>
                            <div className={"h-[90%] w-[50%]  flex items-center justify-center"}>
                                <img src={preloader} alt="" className={"h-full"}/>
                            </div>
                            <h1 className={"text-white text-lg "}>AI DEV</h1>
                        </div>
                        <div className={"w-[55%] h-[80%]  flex items-center justify-end px-2"}>
                            <div className={"w-4 h-4 "} onClick={onClose}>
                                <img src={arrowDown} alt="" style={{mixBlendMode:'unset'
                                }}/>
                            </div>
                        </div>

                    </div>
                    <div className={"h-[70%] w-full "}>
                        <div className={"h-16 w-full flex items-center justify-center px-3"}>
                            <div className={"h-12 w-full flex items-center px-2 light-grey-color-bg-message rounded-lg"}>
                                <p className={"text-white"}>Welcome! How can I assist you today?</p>
                            </div>
                        </div>
                    </div>
                    <div className={"h-[10%] w-full  flex justify-between px"}>

                        <div className={"chatbot-input w-[80%] h-full light-grey-color-bg-message flex  items-center"}>
                            <input type="text" placeholder={"Type a message..."}/>
                        </div>
                        <div className={"w-[20%] h-full light-grey-color-bg-send-btn flex  items-center justify-center"}>
                            <p className={"text-lg"}>Send</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ChatBot;