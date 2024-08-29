import React from 'react';
// import './YourCustomStyles.css'; // Ensure the CSS file is correctly imported

const ResearchAndDevelopment = () => {
    return (
        <div className="research-and-development w-full h-full  flex justify-center items-center ">
            <div className="research-and-development-inner-res w-[60%] h-[90%] bg-white flex flex-col items-center rounded-xl">
                <div className="trade-dev-res h-[25%] w-full flex flex-col justify-center items-center">
                    <div className="research-and-development-heading h-full w-[70%] gap-3 flex flex-col justify-center items-center">
                        <h1>RESEARCH AND DEVELOPMENT</h1>
                        <p className="text-center">
                            At <span className="font-bold">AI DEV</span>, we are committed to pushing the boundaries of AI and blockchain technology. Our dedicated Research and Development team focuses on innovating and enhancing our products to meet the evolving needs of our users and the industry.
                        </p>
                    </div>
                </div>

                <div className="  trade-li-section-res   h-[70%]  w-[70%] ">
                        <div className="current-projects h-[50%] w-full  px-20 flex flex-col justify-center">
                        <h1 className="px-4 font-bold">Current Projects:</h1>
                        <ul className="list-disc custom-bullet-color flex flex-col  gap-1">
                            <li>Website Development Enhancements</li>
                            <li>Advanced Price Prediction Models</li>
                            <li>Image and Meme Generation Bots</li>
                            <li>AI-Powered Voice and Chat Bots</li>
                            <li>Smart Contract Deployment Solutions</li>
                        </ul>
                    </div>
                    <div className=" our-goals h-[40%] w-full  px-20 flex flex-col">
                        <h1 className="px-4 font-bold">Our Goals:</h1>
                        <ul className="list-disc custom-bullet-color flex flex-col gap-1">
                            <li>Integrate Decentralized GPU Power for enhanced computational capabilities.</li>
                            <li>Develop cutting-edge solutions for real-world problems.</li>
                            <li>Collaborate with industry leaders and academic institutions.</li>
                            <li>Continuously improve our existing products based on user feedback.</li>
                        </ul>
                        <p className={"mt-7"}><strong>Learn More:</strong> To learn more about our
                            Research and
                            Development efforts, please visit  AI Dev
                                Docs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchAndDevelopment;
