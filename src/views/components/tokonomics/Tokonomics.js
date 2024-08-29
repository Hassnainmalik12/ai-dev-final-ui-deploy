import React from 'react';
import  copy from '../../../images/tabler-copy.png'
import  ethscan from '../../../images/btn-ic-ethscan.png'
import  dex from '../../../images/btn-ic-dex.png'
import  uniswap from '../../../images/btn-ic-uniswap.png'

const Tokonomics = () => {
    return (
        <div className={" h-full w-full flex flex-col py-5"}>
            <div className={"tokonomics-first-section-height-res h-[50%]  w-full flex justify-center items-center"}>
                <div className={"tokonomics-first-section-width-res h-[90%] py-3 w-[30%]  flex flex-col justify-between items-center"}>
                    <h1 className={"tokonomics-text font-bold capitalize"}>tokenomics</h1>
                    <div className={"h-auto w-full  flex justify-between"}>
                        <div className={"tokonomics-button-per-res percentage-section  w-[20%] justify-center items-center flex flex-col"}>
                            <h1 >10m</h1>
                            <h6 className={"text-sm"}>token supply</h6>
                        </div>
                        <div className={"tokonomics-button-per-res percentage-section  w-[20%] justify-center items-center flex flex-col"}>
                            <h1 >5%</h1>
                            <h6 className={"text-sm"}>buy/sell tax</h6>
                        </div>
                        <div className={"tokonomics-button-per-res percentage-section  w-[20%] justify-center items-center flex flex-col"}>
                            <h1 >3%</h1>
                            <h6 className={"text-sm"}>Max Wallet</h6>
                        </div>
                        <div className={"tokonomics-button-per-res percentage-section  w-[20%] justify-center items-center flex flex-col"}>
                            <h1 >0%</h1>
                            <h6 className={"text-sm"}>Transfer</h6>
                        </div>
                    </div>

                </div>
            </div>
            <div className={"tokonomics-second-sec-res h-[50%]  w-full flex justify-center items-center"}>
                <div className={"tokonmics-second-btn-sec-res h-[70%] w-[65%] flex flex-col justify-between items-center"}>
                    <div className={"h-auto  w-full  flex justify-between items-center"}>
                        <div className={"percentage-section-with-border  w-[24%]  flex justify-center items-center"}>
                            <h1 className={"text-center capitalize contract-renounced-res"}>contract renounced  </h1>
                        </div>
                        <div className={"percentage-section-with-border  w-[24%] justify-center items-center flex flex-col gap-3"}>
                            <h1>2.5 years </h1>
                            <h6 className={"text-sm"}>Liquidity Locked</h6>
                        </div>
                        <div className={"percentage-section-with-border w-[24%] justify-center items-center flex flex-col gap-3"}>
                            <h1>10M Supply</h1>
                            <h6 className={"text-sm"}>100% Tokens in Circulation</h6>
                        </div>
                        <div className={"percentage-section-with-border tax-section-res w-[24%] justify-center items-center flex flex-col gap-3"}>
                            <h1>Taxes</h1>
                            <h6 className={"text-center extra-small-text text-lg"}> Development, Marketing, Listings, Buybacks, Web2</h6>
                        </div>
                    </div>

                </div>


            </div>

            <div className={"contract-adres-res h-auto  w-full  flex flex-col "}>
                <div className={"contract-address-line w-[75%] mt-2"}>
                    <h1 className={"text-white text-center contract-address"}>Contract Address</h1>
                </div>
                <div className={"parent-div  h-auto w-full flex justify-center items-center gap-5"}>
                    <div className={" copy-text-border child-div-copy  flex gap-4 h-16 w-auto bg-gray-800    justify-center items-center px-5 rounded-full"}>
                        <h1 className={"text-white copy-code hover:cursor-pointer"}>0x9Cf0ED013e67DB12cA3AF8e7506fE401aA14dAd6</h1>
                        <img src={copy} className={"hover:cursor-pointer"} alt=""/>
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