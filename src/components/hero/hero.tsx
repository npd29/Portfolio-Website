import { ReactP5Wrapper } from 'react-p5-wrapper';
import './hero.css';
import { flow } from './flowfield';
import logo from '../../assets/images/NDLogo.png';
import { signal } from '@preact/signals';

export function Hero() {
    const rainbowMode = signal(false);
    const particleMode = signal(false);
    const pauseAnimation = signal(false);

    function toggleSettingsPopup() {
        const popup = document.getElementById('settingsPopup');
        if (popup!.style.display === 'flex') {
            popup!.style.display = 'none';
        } else {
            popup!.style.display = 'flex';
        }
    }

    return (
        <div className="hero">
            <ReactP5Wrapper
                sketch={flow}
                rainbowMode={rainbowMode}
                particleMode={particleMode.value}
            ></ReactP5Wrapper>
            <div id="homeDisplay" className="home">
                <div id="framerate">
                    <p id="fr"></p>
                </div>
                <img className="logo" src={logo} alt="Noel Desmarais' Logo" />
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
                    <span
                        className="settings-close"
                        onClick={toggleSettingsPopup}
                    >
                        &times;
                    </span>

                    <h2>Settings</h2>
                    <form>
                        <div className="toggle-label">
                            <label className="form-switch">
                                <input
                                    type="checkbox"
                                    id="rainbowToggle"
                                    onChange={() => {
                                        rainbowMode = !rainbowMode;
                                    }}
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
                                    onChange={() => {
                                        particleMode.value =
                                            !particleMode.value;
                                    }}
                                    checked
                                />
                                <span>Flow</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="radio"
                                    id="particleRadio"
                                    onChange={() => {
                                        particleMode.value =
                                            !particleMode.value;
                                    }}
                                />
                                <span>Particle</span>
                            </label>
                        </div>

                        <div className="button-label">
                            <button
                                id="pauseAnimation"
                                onClick={() => {
                                    pauseAnimation.value =
                                        !pauseAnimation.value;
                                }}
                                title="Pause Animation"
                            >
                                <img
                                    id="playPause"
                                    alt="Play/Pause Button"
                                    src={
                                        pauseAnimation.value
                                            ? '../../assets/images/play.png'
                                            : '../../assets/images/pause.png'
                                    }
                                />
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
        </div>
    );
}
