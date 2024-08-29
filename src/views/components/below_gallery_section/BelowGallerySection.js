import React from 'react';
import LogoSlider from "../logo_slider/LogoSlider";

const BelowGallerySection = () => {
    return (
        <div className={"below-gallery-section w-full h-full flex justify-center items-center px-5"}>

            <div className={"below-gallery-section-res w-4/5 h-full  flex  flex-col py-10"}>
                <div className={"h-[350px] below-gallery-section-res-inner  w-full flex flex-col justify-between"}>
                    <h6 className={"top-h1 "}>Bot as a Service (BaaS)</h6>
                    <div>
                        <h1 className={"main-heading main-heading-res uppercase  mt-8"}>AI DEV Custom Bot Solutions,</h1>
                        <h1 className={"main-heading-green-text "}>Tailored to You</h1>
                    </div>
                    <h1 className={"below-gallery-desc-section mt-2"}>At AI DEV, we excel in providing a wide array of
                        AI-driven Bot and Assistant solutions, designed
                        to cater to the unique demands of various industry verticals.</h1>
                </div>
                <div className={"below-gallery-section-second-res h-[700px] w-full  flex flex-col gap-5 mt-20"}>
                    <p className={"below-gallery-desc-section2 w-[95%] mt- "}>Our AI DEV bots are built to engage,
                        entertain, educate, inform, and automate actions for:</p>
                    <div className={"below-gallery-button-line-res w-full h-[20%]  flex items-center gap-5"}>
                        <button className={"button below-gallery-button-res h-[90%] px-10 capitalize"}>E-commerce platforms</button>
                        <button className={"button below-gallery-button-res h-[90%]  px-10 capitalize"}>corporate brands</button>
                        <button className={"button below-gallery-button-res  h-[90%]  px-10 capitalize"}>public figures</button>
                    </div>
                    <div className={" w-full below-gallery-button-line-res h-[20%]  flex  items-center gap-5"}>
                        <button className={"button h-[90%] below-gallery-button-res  px-10 capitalize"}>Blockchain Initiatives</button>
                        <button className={"button below-gallery-button-res  h-[90%]  px-10 capitalize"}>Marketing Campaigns</button>
                        <button className={"button below-gallery-button-res  h-[90%]  px-10 capitalize"}>Trading and Gaming Markets</button>
                        {/*<h1 className={"capitalize p-4 text-2xl border"}>E-commerce platforms</h1>*/}
                    </div>
                    <div className={" w-full below-gallery-button-line-res h-[20%]  flex  items-center gap-5"}>
                        <button className={"button button below-gallery-button-res h-[90%] px-10 capitalize"}>Social Media Influencers</button>
                        <button className={"button button below-gallery-button-res h-[90%]  px-10 capitalize"}>Professional Coaches</button>
                        <button className={"button button below-gallery-button-res h-[90%]  px-10 capitalize"}>Educational Organizations</button>
                    </div>
                    <div className={" w-full below-gallery-button-line-res  h-[20%]  flex  items-center gap-5"}>
                        <button className={"button h-[90%] px-10 capitalize button below-gallery-button-res"}>Virtual CIO Services</button>
                    </div>
                    <p className={"lower-button-desc w-[80%] text-white mt-10"}>Transform your business with AI DEV’s
                        innovative, customized
                        bot solutions. Whether you need to enhance customer
                        engagement, streamline operations, or offer unique
                        experiences, our tailored bots are here to meet your specific
                        needs.</p>

                </div>
                <div className={"below-gallery-section-last-text-res h-96 w-full flex items-center justify-center"}>
                    <div className={"h-[50%] w-full   flex flex-col gap-5"}>
                        <p className={"last-desc text-white"}>To make an enquiry, contact our sales team:</p>
                        <div className={"last-desc-btn-res w-full h-[35%] flex  items-center gap-5"}>
                            <button className={"button h-full px-10 capitalize"}>Virtual CIO Services</button>
                        </div>
                    </div>
                </div>
                <div className={"above-slider-text slider-text h-[5%] w-full  flex justify-center items-center"}>
                    <h1>AI DEV <span>Supporters & Partners</span></h1>
                </div>
                <div className={" h-84 logo-slider-res w-full "}>
                    <LogoSlider/>

                </div>
            </div>

        </div>
    );
};

export default BelowGallerySection;