import { ReactP5Wrapper } from 'react-p5-wrapper';
import { flowfield } from './flowfield';
export function Hero() {
    return (
        <>
            <ReactP5Wrapper sketch={flowfield} />
            <div id="homeDisplay" className="home">
                <div id="framerate">
                    <p id="fr"></p>
                </div>
                <img
                    className="logo"
                    src="images/NDLogo.png"
                    alt="Noel Desmarais' Logo"
                />
                <div className="name">
                    <h1>NOEL DESMARAIS</h1>
                    <h2>
                        Graduate<span className="fullScreen"> - </span>
                        <br className="mobile" />
                        Full Stack Software Engineer
                        <span className="fullScreen"> - </span>
                        <br className="mobile" />
                        App Developer
                    </h2>
                </div>
                {/* <div className="gear-icon" onClick={toggleSettingsPopup}>
                <img src="images/settings.png" />
            </div>

            <div className="settings-popup" id="settingsPopup">
                <span className="settings-close" onClick={toggleSettingsPopup}>
                    &times;
                </span>

                <h2>Settings</h2>
                <form>
                    <div className="toggle-label">
                        <label className="form-switch">
                            <input
                                type="checkbox"
                                id="rainbowToggle"
                                onChange={toggleRainbowMode}
                            />
                            <i></i>
                            Rainbow Mode
                        </label>
                    </div>
                    <div className="flow-mode radio-toggle">
                        <h3>Mode:</h3>
                        <label>
                            <input
                                type="radio"
                                name="radio"
                                id="flowRadio"
                                onChange={toggleParticleMode}
                                checked
                            />
                            <span>Flow</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="radio"
                                id="particleRadio"
                                onChange={toggleParticleMode}
                            />
                            <span>Particle</span>
                        </label>
                    </div>

                    <div className="button-label">
                        <button
                            id="pauseAnimation"
                            onClick={toggleStopAnimation}
                            title="Pause Animation"
                        >
                            <img id="playPause" src="images/pause.png" />
                        </button>
                        <button
                            id="clearCanvasButton"
                            onClick={clearCanvas}
                            title="Clear Canvas"
                        >
                            Clear Canvas
                        </button>
                    </div>
                </form>
                <div className="credit">
                    <p>
                        Interactive flow field animation
                        <br />
                        developed by me
                    </p>
                </div>
            </div> */}
            </div>
        </>
    );
}
