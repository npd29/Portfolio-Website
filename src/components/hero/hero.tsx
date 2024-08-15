/* eslint-disable @typescript-eslint/no-unused-vars */
import './hero.scss';
import logo from '../../assets/images/NDLogo.png';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { flow } from './flowfield';
import { Mode, Settings } from '../../types';
import { defaultSettings } from '../../store';
import { useEffect, useState } from 'react';
import AnimationSettings from '../settings/settings';

export function Hero() {
    const [animationMode, setAnimationMode] = useState<Mode>(Mode.FLOW);
    const [currentSettings, setCurrentSettings] = useState<Settings>(
        defaultSettings[animationMode]
    );
    useEffect(() => {
        setCurrentSettings((prevSettings) => ({
            ...prevSettings,
            rainbowMode: false,
            play: true
        }));
    }, []);
    useEffect(() => {
        setCurrentSettings((prevSettings) => ({
            ...prevSettings,
            play: true,
            ...defaultSettings[animationMode]
        }));
    }, [animationMode]);

    return (
        <div className="hero">
            <ReactP5Wrapper
                sketch={flow}
                mode={animationMode}
                settings={currentSettings}
            ></ReactP5Wrapper>
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
            <AnimationSettings
                settings={currentSettings}
                updateSettings={setCurrentSettings}
                mode={animationMode}
                setMode={setAnimationMode}
            ></AnimationSettings>
        </div>
    );
}
