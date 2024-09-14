import React from 'react';
import icStarPurple from '../../../images/ic-star-purple.png'
import {useTranslation} from "react-i18next";

const LowerTierSection = () => {
    const { t,i18n } = useTranslation();

    return (
        <div className={"lower-tier-section-inner-res  w-[60%] h-[90%] flex flex-col justify-center gap-2"}>
            <h1 className={"lower-tier-text-res text-white px-10 text-xl"}>*{t('tiers')}</h1>
            <div className={"h-12 w-full flex gap-2"}>
                <div className={"lower-tier-img-res h-12 w-12  flex justify-center items-center"}>
                    <img src={icStarPurple} alt=""/>
                </div>
                <div className={"h-12 w-[90%]"}>
                    <h1 className={"custom-text-green-new"}>{t('tier-Description')}</h1>
                </div>
            </div>
        </div>
    );
};

export default LowerTierSection;