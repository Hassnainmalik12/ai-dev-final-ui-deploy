import React, {useEffect, useRef, useState} from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import image1 from '../../images/Ai Dev Bot Website Code.gif';
import image2 from '../../images/Ai Dev Bot Target.gif';
import image3 from '../../images/Ai Dev Bot Code.gif';
import image4 from '../../images/Ai Dev Bot Price Prediction.gif';
import image5 from '../../images/Ai Dev Bot Uncensored Ai.gif';
import image6 from '../../images/Ai Dev Bot Pad.gif';
import image7 from '../../images/Ai Dev Bot Meme Generator.gif';
import image8 from '../../images/Ai Dev Bot Face Swap.gif';
import image9 from '../../images/Ai Dev Bot Voice AI.gif';
import image10 from '../../images/Ai Dev Bot Random.gif';
import image11 from '../../images/Ai Dev Bot Rocket.gif';
import TypingEffect from "../components/typing-effect/TypingEffect";

const Example = () => {
    return (
        <div className="z-1">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);




    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <section ref={targetRef} className=" relative h-[200vh]  example-height" style={{background:"#1f1f1f"}}>
            {/*is line me flex-col*/}
            <div className="position-sticky sticky top-0 flex h-screen items-center" style={{ transition: "10s ease in out" }}>
            {/*is line me flex-col*/}
                <motion.div style={isLargeScreen ? {x} : {}} className="card-res-vertical flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id}/>;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({card}) => {

    return (
        <div
            key={card.id}
            className={`card-res-vertical-height group relative 
                   h-[700px] w-[1150px]`}
            style={{
                margin:  "-9px",
                border: "1px solid grey",
            }}
        >
{/*is line ko flex-col*/}
                <div className="property-for-card-res absolute inset-0 z-1 px-10 flex">
                    <div className="gallery-avatar-area-resp h-full w-1/2 p-8 text-2xl font-black uppercase text-white flex justify-center items-center">
                        <img src={card.url} alt="" />
                    </div>

                    <div className="gallery-heading-res h-full w-48  text-2xl uppercase text-white flex flex-col justify-center items-center py-5">
                        <div className="h-auto w-2/3  flex flex-col justify-between items-center">
                            <div className="h-auto w-full">
                                <h1 className="text-white w-4/5">
                                    <TypingEffect text={card.text} />
                                </h1>
                            </div>
                        </div>
                        <div className="h-16 w-2/3 mt-10 ">
                            <div className="buttons h-full w-full py-1  flex gap-5 justify-start">
                                <button className="px-4 rounded-full">Launch</button>
                                <button className="px-5 rounded-full">Docs</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};
const cards = [
    {
        url: image1,
        text: 'Website builder Bot',
        id: 1,
    },
    {
        url: image2,
        text: 'The Sniper Bot',
        id: 2,
    },
    {
        url: image3,
        text: "Smart Contract Deployer Bot ",
        id: 3,
    },
    {
        url: image4,
        text: " Homma Prediction AI Bot",
        id: 4,
    },
    {
        url: image5,
        text: "NSFW Image Generator AI Bot",
        id: 5,
    },
    {
        url: image6,
        text: "Image Generator AI Bot",
        id: 6,
    },
    {
        url: image7,
        text: "Meme Generator  AI Bot",
        id: 7,
    },
    {
        url: image8,
        text: "Face Swap AI Bot",
        id: 8,
    },
    {
        url: image9,
        text: "AI DEV Voice Bot",
        id: 9,
    },
    {
        url: image10,
        text: "AI DEV Chatbot",
        id: 10,
    },
    {
        url: image11,
        text: "AND MANY MORE",
        id: 11,
    },
];

export default Example;
