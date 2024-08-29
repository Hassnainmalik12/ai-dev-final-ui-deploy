import React, { useState, useEffect } from 'react';
import { navigateToScreen } from "../../../utils/nav_controller";
import { SCREEN } from "../../../models/constants/screen";
import splashGif from '../../../images/preloader.gif';
import animatedImage from '../../../images/Splash 2.png'; // Replace with your image path

const SplashScreen = () => {
    const [text, setText] = useState('Ai dev is coming.');
    const [animate, setAnimate] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setText('Ai dev is coming ..');
        }, 400);

        const secondTimer = setTimeout(() => {
            setText('Ai dev is coming ...');
        }, 800);

        const thirdTimer = setTimeout(() => {
            setText('Ai dev is coming ....');
        }, 1200);


        const animateTimer = setTimeout(() => {
            setAnimate(true);
        }, 1300);

        // const navigateTimer = setTimeout(() => {
        //     // navigateToScreen(SCREEN.MAIN);
        // }, 2700);

        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
            clearTimeout(animateTimer);
            // clearTimeout(navigateTimer);
        };
    }, []);

    // useEffect(() => {
    //     if (loaded) {
    //         navigateToScreen(SCREEN.MAIN);
    //     }
    // }, [loaded]);

    return (
        <div className={`splash ${animate ? 'animate-up' : ''}`}>
            {!animate ? (
                <div className="center-box">
                    <div className="splash-gif">
                        <img src={splashGif} alt="splash gif" />
                    </div>
                    <div className="splash-bar">
                        <div className="splash-bar-inner"></div>
                        <p>{text}</p>
                    </div>
                </div>
            ) : (
                <div className="animated-image">
                    <img src={animatedImage} alt="Animated" />
                </div>
            )}
        </div>
    );
};

export default SplashScreen;
