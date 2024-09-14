import React from 'react';
import LogoSlider from "../logo_slider/LogoSlider";
import {useTranslation} from "react-i18next";

const BelowGallerySection = () => {
    const { t,i18n } = useTranslation();

    return (
        <div className={"below-gallery-section  w-full h-full flex justify-center items-center px-5"}>

            <div className={"below-gallery-section-res w-4/5 h-full  flex  flex-col py-10"}>
                <div className={"h-[350px] below-gallery-section-res-inner w-full flex flex-col justify-between"}>
                    <h6 className={"top-h1 "}>{t('bot-service-tagline')}</h6>
                    <div>
                        <h1 className={"main-heading main-heading-res uppercase  mt-8"}>{t('bg-main-heading')}</h1>
                        <h1 className={"main-heading-green-text italic"}>{t('bg-heading-green')}</h1>
                    </div>
                    <h1 className={"below-gallery-desc-section mt-2"}>{t('bg-gallery-description')}</h1>
                </div>
                <div className={"below-gallery-section-second-res  h-[700px] w-full  flex flex-col gap-5 mt-20"}>
                    <p className={"below-gallery-desc-section2 w-[95%] mt- "}>{t('bg-gallery-description2')}:</p>
                    <div className={"below-gallery-button-line-res w-full h-[20%]  flex items-center gap-5"}>
                        <button className={"button below-gallery-button-res h-[90%] px-10 capitalize"}>{t('bg-button1')}</button>
                        <button className={"button below-gallery-button-res h-[90%]  px-10 capitalize"}>{t('bg-button2')}</button>
                        <button className={"button below-gallery-button-res  h-[90%]  px-10 capitalize"}>{t('bg-button3')}</button>
                    </div>
                    <div className={" w-full below-gallery-button-line-res h-[20%]  flex  items-center gap-5"}>
                        <button className={"button h-[90%] below-gallery-button-res  px-10 capitalize"}>{t('bg-button4')}</button>
                        <button className={"button below-gallery-button-res  h-[90%]  px-10 capitalize"}>{t('bg-button5')}</button>
                        <button className={"button below-gallery-button-res  h-[90%]  px-10 capitalize"}>{t('bg-button6')}</button>
                        {/*<h1 className={"capitalize p-4 text-2xl border"}>E-commerce platforms</h1>*/}
                    </div>
                    <div className={" w-full below-gallery-button-line-res h-[20%]  flex  items-center gap-5"}>
                        <button className={"button button below-gallery-button-res h-[90%] px-10 capitalize"}>{t('bg-button7')}</button>
                        <button className={"button button below-gallery-button-res h-[90%]  px-10 capitalize"}>{t('bg-button8')}</button>
                        <button className={"button button below-gallery-button-res h-[90%]  px-10 capitalize"}>{t('bg-button9')}</button>
                    </div>
                    <div className={" w-full below-gallery-button-line-res-virtual  h-[20%]   flex  items-center gap-5"}>
                        <button className={"button h-[90%] px-10 capitalize button below-gallery-button-res"}>{t('bg-button10')}</button>
                    </div>
                    <p className={"lower-button-desc w-[80%] text-white mt-10"}>{t('bg-gallery-description3')}.</p>

                </div>
                <div className={"below-gallery-section-last-text-res h-96 w-full flex items-center justify-center"}>
                    <div className={"h-[50%] w-full   flex flex-col gap-5"}>
                        <p className={"last-desc  text-white"}>{t('bg-gallery-description4')}.:</p>
                        <div className={"last-desc-btn-res w-full h-[35%] flex  items-center gap-5"}>
                            <button className={"button h-full px-10 capitalize"}>{t('bg-button11')}</button>
                        </div>
                    </div>
                </div>
                <div className={"above-slider-text slider-text h-[5%] w-full  flex justify-center items-center"}>
                    <h1>{t('logo-description-green')}<span>{t('logo-description')}</span></h1>
                </div>
                <div className={" h-84 logo-slider-res w-full"}>
                    <LogoSlider/>

                </div>
            </div>

        </div>
    );
};

export default BelowGallerySection;