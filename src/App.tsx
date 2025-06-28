import './App.css';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import Banner from './components/banner/banner';
import { Settings, Mode } from './types';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
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
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const contentSectionRef = useRef<HTMLDivElement>(null);

    // Handle page load to prevent flash of unstyled content
    useEffect(() => {
        const handleLoad = () => {
            document.documentElement.classList.add('loaded');
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    // Intersection Observer to detect when content sections are in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsOverlayActive(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Trigger when 10% of the content section is visible
                rootMargin: '-20% 0px -20% 0px' // Add some margin to trigger earlier
            }
        );

        if (contentSectionRef.current) {
            observer.observe(contentSectionRef.current);
        }

        return () => {
            if (contentSectionRef.current) {
                observer.unobserve(contentSectionRef.current);
            }
        };
    }, []);

    return (
        <div className="App">
            <SettingsContext.Provider
                value={{ settings, setSettings } as SettingsContextType}
            >
                {/* Global background overlay */}
                <div
                    className={`global-background-overlay ${
                        isOverlayActive ? 'active' : ''
                    }`}
                ></div>

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
                <div ref={contentSectionRef} className="content-sections">
                    <About></About>
                    <Projects></Projects>
                    <Contact></Contact>
                    <Footer></Footer>
                </div>
            </SettingsContext.Provider>
        </div>
    );
}

export default App;
