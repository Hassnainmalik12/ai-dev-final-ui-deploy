import React, {useState} from 'react';
import  copy from '../../../images/tabler-copy.png'
import  ethscan from '../../../images/btn-ic-ethscan.png'
import  dex from '../../../images/btn-ic-dex.png'
import  uniswap from '../../../images/btn-ic-uniswap.png'
import  tickIcon from '../../../images/tickIcon.png'
import {useTranslation} from "react-i18next";

const Tokonomics = () => {
    const { t,i18n } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);

    const copyCodeToClipboard = () => {
        const copyText = "0x9Cf0ED013e67DB12cA3AF8e7506fE401aA14dAd6";
        navigator.clipboard.writeText(copyText).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false); // Reset the icon after 2 seconds
            }, 300);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };
    return (
        <div className={" h-full w-full flex flex-col "}>
            <div className={"tokonomics-first-section-height-res h-[50%]  w-full flex justify-center items-center"}>
                <div className={"tokonomics-first-section-width-res h-[75%] py-3 w-[30%]  flex flex-col justify-between items-center"}>
                    <h1 className={"tokonomics-text   font-bold capitalize"}>{t('tokenomics-title')}</h1>
                    <div className={"h-auto w-full first-buttons  flex justify-between"}>
                        <div className={"flex first-buttons-inner w-[50%] justify-around "}>
                            <div
                                className={"tokonomics-button-per-res percentage-section  w-[45%] justify-center items-center flex flex-col"}>
                                <h1>10m</h1>
                                <h6 className={"text-sm"}>{t('tokenomics-smallBox1')}</h6>
                            </div>
                            <div
                                className={"tokonomics-button-per-res percentage-section  w-[45%] justify-center items-center flex flex-col"}>
                                <h1>5%</h1>
                                <h6 className={"text-sm"}>{t('tokenomics-smallBox2')}</h6>
                            </div>

                        </div>
                        <div className={"flex first-buttons-inner w-[50%] justify-around "}>
                            <div
                                className={"tokonomics-button-per-res percentage-section  w-[45%] justify-center items-center flex flex-col"}>
                                <h1>3%</h1>
                                <h6 className={"text-sm"}>{t('tokenomics-smallBox3')}</h6>
                            </div>
                            <div
                                className={"tokonomics-button-per-res percentage-section  w-[45%] justify-center items-center flex flex-col"}>
                                <h1>0%</h1>
                                <h6 className={"text-sm"}>{t('tokenomics-smallBox4')}</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={"tokonomics-second-sec-res h-[50%]  w-full flex justify-center items-center"}>
                <div className={"tokonmics-second-btn-sec-res h-[70%]  w-[65%] flex flex-col justify-between items-center"}>
                    <div className={"second-button-res h-auto  w-full  flex justify-betwee items-center"}>

                        <div className={"second-button-res-inner flex  justify-around w-[50%]"}>
                            <div
                                className={"percentage-section-with-border  w-[45%]  flex justify-center items-center"}>
                                <h1 className={"text-center capitalize contract-renounced-res"}>{t('tokenomics-bigBox1Title')}</h1>
                            </div>
                            <div
                                className={"percentage-section-with-border  w-[45%] justify-center items-center flex flex-col gap-3"}>
                                <h1>{t('tokenomics-bigBox2Title')}</h1>
                                <h6 className={"text-sm"}>{t('tokenomics-bigBox2Description')}</h6>
                            </div>
                        </div>

                        <div className={"flex second-button-res-inner justify-around w-[50%] "}>

                        <div
                            className={"percentage-section-with-border w-[45%] justify-center items-center flex flex-col gap-3"}>
                            <h1>{t('tokenomics-bigBox3Title')}</h1>
                            <h6 className={"text-sm text-center"}>{t('tokenomics-bigBox3Description')}</h6>
                        </div>
                        <div
                            className={"percentage-section-with-border tax-section-res w-[45%] justify-center items-center flex flex-col gap-3"}>
                            <h1>{t('tokenomics-bigBox4Title')}</h1>
                            <h6 className={"text-center extra-small-text text-lg"}>{t('tokenomics-bigBox4Description')}</h6>
                        </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className={"contract-adres-res h-auto  w-full  flex flex-col mb-5"}>
                <div className={"contract-address-line w-[75%] mt-2"}>
                    <h1 className={"text-white text-center contract-address mb-2"}>{t('contractAddress')}</h1>
                </div>
                <div className={"parent-div  h-auto w-full flex justify-center items-center  gap-5"}>
                    <div className={" copy-text-border child-div-copy  flex gap-4 h-16 w-auto bg-gray-800    justify-center items-center px-5 rounded-full"}>
                        <h1 className={"text-white copy-code hover:cursor-pointer"}>0x9Cf0ED013e67DB12cA3AF8e7506fE401aA14dAd6</h1>
                        <img src={isCopied ? tickIcon : copy}
                             className={"hover:cursor-pointer h-6"} alt=""
                             onClick={copyCodeToClipboard}
                             // style={{mixBlendMode:'color-dodge'}}
                        />
                    </div>

                    <div className={"three-buttons flex justify-between gap-2 h-auto"}>
                        <div
                            className={"copy-text-border child-div  flex gap-2 h-16 w-auto bg-gray-800   hover:cursor-pointer justify-center items-center px-5 rounded-full"}>
                            <img src={ethscan} alt=""/>
                            <h1 className={"text-white"}>EthScan</h1>
                        </div>
                        <div
                            className={"copy-text-border child-div  flex gap-2 h-16 w-auto bg-gray-800  hover:cursor-pointer  justify-center items-center px-5 rounded-full"}>
                            <img src={dex} alt=""/>
                            <h1 className={"text-white"}>Dextools</h1>

                        </div>
                        <div
                            className={"copy-text-border child-div  flex gap-2 h-16 w-auto bg-gray-800   hover:cursor-pointer justify-center items-center px-4 rounded-full"}>
                            <img src={uniswap} alt="" />
                            <h1 className={"text-white"}>UniSwap</h1>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Tokonomics;