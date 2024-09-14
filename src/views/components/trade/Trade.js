import React from 'react';
import arrow from '../../../images/arrow3.png';
import logo from '../../../images/logo.png';
import social1 from '../../../images/social-01.png';
import social2 from '../../../images/social-02.png';
import social3 from '../../../images/social-03.png';
import social4 from '../../../images/social-04.png';
import social5 from '../../../images/social-05.png';
import social6 from '../../../images/social-06.png';
import {useTranslation} from "react-i18next";
const Trade = ({ sectiontopRef}) => {
    const { t,i18n } = useTranslation();

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className={" h-full w-full py-5"}>
            {/*first part marquee*/}

            <div className={"trade-marquee-area  h-1/2 w-full flex justify-center items-center"} style={{background:'none'}}>
                <div className={"marquee-text-area w-full flex flex-col justify-center items-center relative"}>

                    <marquee className={"custom-marquee"} width="100%" direction="left" height="225px"
                             scrollamount="13">
                        <h1>{t('marquee-upper-h')}</h1>
                    </marquee>


                    <svg width="201" height="201" viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className={"rotating-image absolute hover:cursor-pointer"}
                         onClick={() => scrollToSection(sectiontopRef)}>
                        <rect width="175.728" height="30.8537" transform="matrix(-1 0 0 1 200.009 1.12775)"
                              fill="#1F1F1F"></rect>
                        <rect width="175.728" height="30.8537" transform="matrix(-1 0 0 1 200.009 1.12775)"
                              fill="#1F1F1F"></rect>
                        <path d="M169.169 1.12775L169.169 176.856L200.024 176.856L200.024 1.12775L169.169 1.12775Z"
                              fill="#1F1F1F"></path>
                        <path d="M169.169 1.12775L169.169 176.856L200.024 176.856L200.024 1.12775L169.169 1.12775Z"
                              fill="#1F1F1F"></path>
                        <rect x="0.0132751" y="179.115" width="251.903" height="30.9395"
                              transform="rotate(-45 0.0132751 179.115)" fill="#1F1F1F"></rect>
                        <rect x="0.0132751" y="179.115" width="251.903" height="30.9395"
                              transform="rotate(-45 0.0132751 179.115)" fill="#1F1F1F"></rect>
                    </svg>

                    {/*<img src={arrow} alt="" className={"rotating-image absolute h-[60%] w-auto top-[80px]"}*/}
                    {/*     style={{height: "400px", mixBlendMode: 'multiply'}}*/}
                    {/*     onClick={() => scrollToSection(sectiontopRef)}/>*/}

                    <marquee className={"custom-marquee"} width="100%" direction="right" height="225px"
                             scrollamount="13">
                        <h1>{t('marquee-upper-h')}</h1>
                    </marquee>
                </div>
            </div>


            {/*second part*/}

            <div className={"h-1/2 w-full"}>
                <div className={"second-part-height-res h-[60%] w-full"}>
                    <div className={"trade-logo-icons-sec h-[30%] w-full   flex justify-between items-center"}>
                        <div className={"trade-logo-width h-[80%]   w-[20%] flex justify-center"}>
                            <div className={"h-full w-[60%] flex justify-center items-center"}>
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                        <div className={"social-icons-width h-[80%]  gap-3 w-[35%] flex justify-center items-center"}>
                            <div className={"social-icons-width h-full w-[80%]  flex justify-between items-center"}>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social1} alt="" className={"h-full"}/>
                                </div>
                                <div className={" icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social2} alt="" className={"h-full"}/>
                                </div>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social3} alt="" className={"h-full"}/>
                                </div>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social4} alt="" className={"h-full"}/>
                                </div>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social5} alt="" className={"h-full"}/>
                                </div>
                                <div className={"icon-height h-[70%] w-[15%]  flex justify-center items-center"}>
                                    <img src={social6} alt="" className={"h-full"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"trade-section-last-border  h-[70%] w-full  flex justify-between "}>
                        <div className={"trade-section-last-width h-[75%] w-[60%]  flex justify-between"}>

                        </div>
                        <div className={"trade-last-contact h-[75%] w-[33%]  flex flex-col justify-evenly items-center"}>
                                <h1 className={"trade-contact-sec text-center w-[70%] justify-end"}>{t('trade-description1')} <u className={"hover:cursor-pointer"}>{t('trade-description1-u')}</u> {t('trade-description1-rem')}</h1>
                            <p className={"text-start px-4 w-full"}><u>{t('trade-link1')}</u> <u>{t('trade-link2')}</u> <u>{t('trade-link3')}</u> <u>{t('trade-link4')}</u></p>

                        </div>
                    </div>
                </div>
                <div className={"copyright h-[40%] w-full px-5 main-color "}>
                    <h1 className={"copyright-text pt-4 text-2xl"}>{t('trade-copyright')}</h1>
                </div>
            </div>
        </div>
    );
};

export default Trade;
