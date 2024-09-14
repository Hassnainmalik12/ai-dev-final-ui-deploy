import React from 'react';
import {useTranslation} from "react-i18next";
// import './YourCustomStyles.css'; // Ensure the CSS file is correctly imported

const ResearchAndDevelopment = () => {
    const { t,i18n } = useTranslation();

    return (
        <div className="research-and-development w-full h-full  flex justify-center items-center ">
            <div className="research-and-development-inner-res w-[60%] h-[65%] bg-white flex flex-col items-center rounded-3xl">
                <div className="trade-dev-res h-[25%] w-full flex flex-col justify-center items-center">
                    <div className="research-and-development-heading h-full w-[70%] gap-3 flex flex-col justify-center items-center">
                        <h1>{t('res&dev-title')}</h1>
                        <p className="text-center">
                            {t('res&dev-description1')} <span className="font-bold">{t('res&dev-description2')}</span>{t('res&dev-description3')} .
                        </p>
                    </div>
                </div>

                <div className="  trade-li-section-res   h-[70%]  w-[70%] ">
                        <div className="current-projects h-[50%] w-full  px-20 flex flex-col justify-center">
                        <h1 className="px-4 font-bold">{t('currentProjects')}:</h1>
                        <ul className="list-disc custom-bullet-color flex flex-col  gap-1">
                            <li>{t('currentProjectsList1')}</li>
                            <li>{t('currentProjectsList2')}</li>
                            <li>{t('currentProjectsList3')}</li>
                            <li>{t('currentProjectsList4')}</li>
                        </ul>
                    </div>
                    <div className=" our-goals h-[40%] w-full  px-20 flex flex-col">
                        <h1 className="px-4 font-bold">{t('ourGoals')}:</h1>
                        <ul className="list-disc custom-bullet-color flex flex-col gap-1">
                            <li>{t('ourGoalsList1')}</li>
                            <li>{t('ourGoalsList2')}</li>
                            <li>{t('ourGoalsList3')}</li>
                            <li>{t('ourGoalsList4')}</li>
                        </ul>
                        <p className={"mt-7"}><strong>{t('learnMore')}:</strong> To learn more about our
                            {t('learnMore-text')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchAndDevelopment;
