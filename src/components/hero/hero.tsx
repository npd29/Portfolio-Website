/* eslint-disable @typescript-eslint/no-unused-vars */
import './hero.scss';
import logo from '../../assets/images/NDLogo.png';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { flow } from './flowfield';
import { Mode, Settings } from '../../types';
import { defaultSettings } from '../../store';
import { useContext, useEffect, useState } from 'react';
import AnimationSettings from '../settings/settings';
import { SettingsContext } from '../../App';

export function Hero() {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error(
            'SettingsContext must be used within a SettingsProvider'
        );
    }
    const { settings, setSettings } = context;
    // const [currentSettings, setCurrentSettings] = useState<Settings>({
    //     ...defaultSettings[Mode.FLOW],
    //     color: [0, 255, 255],
    //     rainbowMode: false,
    //     play: true
    // });
    const [currentColor, setCurrentColor] = useState<number[]>([
        0, 255, 255, 5
    ]);
    // useEffect(() => {
    //     console.log('test');
    //     setClearCanvas(false);
    //     setCurrentSettings((prevSettings) => ({
    //         ...prevSettings,
    //         color: currentColor,
    //         rainbowMode: false,
    //         play: true
    //     }));
    // }, []);
    // useEffect(() => {
    //     setClearCanvas(true);
    //     setCurrentSettings(() => ({
    //         ...defaultSettings[animationMode],
    //         color: currentColor,
    //         play: true,
    //         rainbowMode: currentSettings.rainbowMode
    //     }));
    // }, [animationMode]);
    // useEffect(() => {
    //     console.log('cleared');
    // }, [clearCanvas]);

    return (
        <div className="hero">
            <div id="homeDisplay" className="home">
                <div id="framerate">
                    <p id="fr"></p>
                </div>
                <img className="logo" src={logo} alt="Noel Desmarais' Logo" />
                <div className="name">
                    <h1>NOEL DESMARAIS</h1>
                    <h2>Full Stack Software Developer</h2>
                </div>
            </div>
            {/* <AnimationSettings
                mode={animationMode}
                color={currentColor}
                setMode={setAnimationMode}
                setClear={setClearCanvas}
            ></AnimationSettings> */}
        </div>
    );
}
