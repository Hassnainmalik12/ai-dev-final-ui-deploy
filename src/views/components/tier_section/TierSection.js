import React from 'react';
import checkPinkAvatar from '../../../images/check-pink.png'
import noCheckGreyAvatar from '../../../images/no-check-gray.png'
import image1 from '../../../images/Ai Dev Bot Website Code.gif';
import image2 from '../../../images/Ai Dev Bot Target.gif';
import image3 from '../../../images/Ai Dev Bot Code.gif';
import image4 from '../../../images/Ai Dev Bot Price Prediction.gif';
import image5 from '../../../images/Ai Dev Bot Uncensored Ai.gif';
import image6 from '../../../images/Ai Dev Bot Pad.gif';
import image7 from '../../../images/Ai Dev Bot Meme Generator.gif';
import image8 from '../../../images/Ai Dev Bot Face Swap.gif';
import image9 from '../../../images/Ai Dev Bot Voice AI.gif';
import image10 from '../../../images/Ai Dev Bot Random.gif';
import image11 from '../../../images/Ai Dev Bot Rocket.gif';
import {useTranslation} from "react-i18next";
const TierSection = () => {
    const { t,i18n } = useTranslation();

    return (
        <div className={"tier-section-main  custom-height-px-1600   w-[60%] flex "} >
            {/*left section 40%*/}
            <div className={"h-full w-[40%] flex flex-col gap-2 "}>

                <div className={"flex justify-center bg-white items-center relative"}>
                    <div
                        className={"head-left-feature-section w-2/3 absolute h-44 rounded-xl bg-yellow-300 flex justify-center items-center"}>
                        <h1 className={" custom-text-green feature-text-res font-bold text-3xl uppercase"}>{t('features')}</h1>

                    </div>
                </div>
                <div className={"h-24 w-full flex gap-5"}>

                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image1} alt=""/>
                    </div>
                    <div className={"h-12 w-full  flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}>{t('tier-bot1')}</h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image2} alt=""/>
                    </div>
                    <div className={"h-12 w-full flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot2')}</h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image3} alt=""/>
                    </div>
                    <div className={"h-12 w-full  flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot3')}</h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16 flex justify-center items-center"}>
                        <img src={image4} alt=""/>
                    </div>
                    <div className={"h-12 w-full flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}>{t('tier-bot4')}</h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image5} alt=""/>
                    </div>
                    <div className={"h-12 w-full  flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot5')}</h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image6} alt=""/>
                    </div>
                    <div className={"h-12 w-full  flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot6')}</h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image7} alt=""/>
                    </div>
                    <div className={"h-12 w-full flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot7')}</h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16 flex justify-center items-center"}>
                        <img src={image8} alt=""/>
                    </div>
                    <div className={"h-12 w-full flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot8')}</h1>
                    </div>
                </div>

                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"} >
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image9} alt=""/>
                    </div>
                    <div className={"h-12 w-full flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot9')}</h1>
                    </div>
                </div>

                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image10} alt=""/>
                    </div>
                    <div className={"h-12 w-full  flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}>{t('tier-bot10')}</h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image1} alt=""/>
                    </div>
                    <div className={"h-12 w-full  flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot11')}<span
                            className={"in-development-btn-res bg-green-800 rounded-3xl px-2 capitalize"}>{t('tooltip')}</span></h1>
                    </div>
                </div>

                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image1} alt=""/>
                    </div>
                    <div className={"h-12 w-full flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot12')}<span
                            className={"in-development-btn-res bg-green-800 rounded-3xl px-2 capitalize"}>{t('tooltip')}</span></h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image1} alt=""/>
                    </div>
                    <div className={"h-12 w-full  flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot13')} <span
                            className={"in-development-btn-res bg-green-800 rounded-3xl px-2  capitalize"}>{t('tooltip')}</span></h1>
                    </div>
                </div>
                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image11} alt=""/>
                    </div>
                    <div className={"h-12 w-full flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot14')}<span
                            className={"in-development-btn-res bg-green-800 rounded-3xl px-2 capitalize"}>{t('tooltip')}</span></h1>
                    </div>
                </div>

                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16 flex justify-center items-center"}>
                        <img src={image1} alt=""/>
                    </div>
                    <div className={"h-12 w-full  flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot15')} <span
                            className={"in-development-btn-res bg-green-800 rounded-3xl px-2 capitalize"}>{t('tooltip')}</span></h1>
                    </div>
                </div>

                <div className={"text-heading-gap-res h-24 w-full  justify-center items-center flex gap-5"}>
                    <div className={"h-16 w-16  flex justify-center items-center"}>
                        <img src={image11} alt=""/>
                    </div>
                    <div className={"h-12 w-full flex items-center"}>
                        <h1 className={"tier-section-left-text capitalize"}> {t('tier-bot16')} <span
                            className={"in-development-btn-res bg-green-800 rounded-3xl px-2 capitalize"}>{t('tooltip')}</span></h1>
                    </div>
                </div>


            </div>

            {/*right section 60%*/}
            <div className={"h-full w-[60%] flex  justify-evenly items-start"}>
                <div className={"right-section-cols-res w-[18%] h-full  relative flex flex-col gap-2"}>
                    <div
                        className={"head-right-first-section bg-yellow-500 w-full h-44 absolute rounded-lg flex justify-center flex-col items-center"}
                        style={{top: '-80px'}}>
                        <h1 className={"tier-text-head-res custom-text-green  font-bold text-3xl uppercase"}><span className={"text-white font-normal"}>*</span>{t('free')}</h1>
                        <h1 className={"tier-text-head-des-res custom-text-green  text-sm "}>{t('trial')}</h1>
                    </div>
                    <div className={"h-24 mt- w-full "}>
                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={" h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>

                </div>
                {/*second col of 60%                */}
                <div className={"right-section-cols-res w-[18%] h-full  relative flex flex-col gap-2"}>
                    <div
                        className={"head-right-second-section w-full tier-box h-36 bg-yellow-500 absolute rounded-lg flex justify-center flex-col items-center"}
                        style={{top: '-80px'}}>
                        <h1 className={"tier-text-head-res  text-white font-bold text-3xl uppercase"}>*{t('tier1')}</h1>

                    </div>
                    <div className={"extra-height h-24 w-full "}></div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={ checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>

                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>

                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>

                    <div className={" h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                </div>
                {/*third col of 60%   */}

                <div className={"right-section-cols-res w-[18%] h-full relative flex flex-col gap-2"}>
                    <div
                        className={"head-right-third-section bg-green-300 w-full h-36 tier-box  absolute rounded-lg flex justify-center flex-col items-center"}
                        style={{top: '-80px'}}>
                        <h1 className={"tier-text-head-res  text-white font-bold text-3xl uppercase"}>*{t('tier2')}</h1>

                    </div>
                        <div className={" h-20 w-full mt-2"}></div>
                    <div className={"h-20 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>

                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={noCheckGreyAvatar} alt=""/>
                        </div>

                    </div>

                </div>
                {/*fourth col of 60%                */}

                <div className={"right-section-cols-res w-[18%] h-full  relative flex flex-col gap-2"}>
                    <div
                        className={"head-right-fourth-section w-full tier-box h-28 bg-yellow-500 absolute rounded-lg flex justify-center flex-col items-center"}
                        style={{top: '-80px'}}>
                        <h1 className={"tier-text-head-res  text-white font-bold text-3xl uppercase"}>*{t('tier3')}</h1>

                    </div>
                        <div className={"extra-height h-24 w-full"} style={{paddingTop:'-10px'}}></div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                    <div className={"h-24 w-full  flex justify-center items-center"}>
                        <div className={"right-section-img-res h-16 w-16  flex justify-center items-center blur-md"}>
                            <img src={checkPinkAvatar} alt=""/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TierSection;