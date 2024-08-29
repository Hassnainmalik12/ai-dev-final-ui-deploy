import React from 'react';
import {SCREEN} from "./models/constants/screen";
import {navigateToScreen} from "./utils/nav_controller";
import SplashScreen from "./views/screens/Splash_Screen/SplashScreen";
import MainScreen from "./views/screens/main_screen/MainScreen";
import './index.css';
function App() {
    const url = new URL(window.location.href).searchParams

    if (!url.has('screen')) {
        navigateToScreen(SCREEN.MAIN)
        return;
    }

    if (url.has('screen')) {
        const screen = url.get('screen');

        if (screen === SCREEN.SPLASH) {
            return <SplashScreen />
        }
        else if (screen === SCREEN.MAIN) {
            return <MainScreen/>

        }
    }

    return <></>
}

export default App;
