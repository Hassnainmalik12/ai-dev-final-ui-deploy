import React from 'react';
import icStarPurple from '../../../images/ic-star-purple.png'

const LowerTierSection = () => {
    return (
        <div className={"lower-tier-section-inner-res  w-[70%] h-[90%] flex flex-col justify-center gap-2"}>
            <h1 className={"lower-tier-text-res text-white px-10 text-xl"}>* Tier 1, 2 and 3</h1>
            <div className={"h-12 w-full flex gap-2"}>
                <div className={"lower-tier-img-res h-12 w-12  flex justify-center items-center"}>
                    <img src={icStarPurple} alt=""/>
                </div>
                <div className={"h-12 w-[90%]"}>
                    <h1 className={"custom-text-green-new"}>All bots are available at launch for the first 28 days for
                        all users. After this period, continued use will require holding AIDEV tokens, with access
                        levels determined by your tier.</h1>
                </div>
            </div>
        </div>
    );
};

export default LowerTierSection;