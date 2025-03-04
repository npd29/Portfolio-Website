import './App.css';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import Banner from './components/banner/banner';
import { Settings, Mode } from './types';
import { createContext, useContext, useState } from 'react';
import { defaultSettings } from './store';
import { ReactP5Wrapper } from '@p5-wrapper/react';
import { flow } from './components/hero/flowfield';

export type SettingsContextType = {
    settings: Settings;
    setSettings: (newSettings: Settings) => void;
};
export const SettingsContext = createContext<SettingsContextType | null>(null);

function App() {
    const [settings, setSettings] = useState({
        ...defaultSettings[Mode.FLOW],
        rainbowMode: false,
        play: true
    });
    const [animationMode, setAnimationMode] = useState<Mode>(Mode.FLOW);
    const [clearCanvas, setClearCanvas] = useState(false);

    return (
        <div className="App">
            <SettingsContext.Provider
                value={{ settings, setSettings } as SettingsContextType}
            >
                {/* <Banner></Banner> */}
                <div style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
                    <ReactP5Wrapper
                        sketch={flow}
                        settings={settings}
                        mode={animationMode}
                        clear={clearCanvas}
                    ></ReactP5Wrapper>
                </div>
                <Hero></Hero>
                <About></About>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </SettingsContext.Provider>
        </div>
    );
}

export default App;
