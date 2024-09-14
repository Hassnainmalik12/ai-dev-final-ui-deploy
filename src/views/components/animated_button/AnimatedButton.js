import React from 'react';
import github from '../../../images/social-03.png'
import X from '../../../images/social-04.png'
import telegram from '../../../images/telegram.png'
import {useTranslation} from "react-i18next";
const AnimatedButton = () => {
    const { t,i18n } = useTranslation();
    return (
        <div className={"w-full h-full  flex justify-center items-center"}>
            <div className={"animated-btn-inner w-full h-[60%] flex justify-center items-center"}>
                <div className={"lets-connect w-[70%] h-[100%]  flex flex-col justify-between items-center"}>
                    <h1 >{t('animated-title')}</h1>
                    <div className={"animated-button-div-res w-full py-2  flex justify-center gap-10"}>
                        <button className=" animated-button uppercase rounded-3xl flex items-center justify-center">
                            <div className={"image-res h-6 w-6  bg-white rounded-full"}>
                                <img src={github} alt=""/>
                            </div>
                            <p>{t('animated-social1')}</p>
                        </button>
                        <button className="animated-button uppercase rounded-3xl flex items-center justify-center gap-5">
                            <div className={" image-res h-6 w-6   rounded-full"}>
                                <img src={telegram} alt=""/>
                            </div>
                          <p> {t('animated-social2')}</p>
                        </button>
                        <button className="animated-button uppercase rounded-3xl flex items-center justify-center gap-5">
                            <div className={"image-res h-6 w-6   bg-white rounded-full"}>
                                <img src={X} alt=""/>
                            </div>
                           <p>{t('animated-social3')}</p>
                        </button>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default AnimatedButton;
