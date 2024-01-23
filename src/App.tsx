import './App.css';
import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { Projects } from './components/projects';
import { About } from './components/about/about';

function App() {
    return (
        <div className="App">
            <About></About>
            <div className="content project-section">
                <h2>PROJECTS</h2>
                <h3 className="hint">Click on a project to expand</h3>
                <div className="popup">
                    <div className="popup-content"></div>
                    <span className="popup-close">&times;</span>
                </div>
                <Projects />
            </div>
            <div className="content contact">
                <h2>CONTACT</h2>
                <h3 className="hint">
                    Feel free to reach out for more information
                </h3>
                <div className="contact-links">
                    <a
                        href="https://www.linkedin.com/in/noeldesmarais/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="images/linkedin-logo.png"
                            alt="LinkedIn.com"
                        />
                    </a>
                    <a
                        href="https://github.com/npd29"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="images/github-logo.png" alt="Github.com" />
                    </a>
                    <a className="resume" href="resume10.2.pdf" target="_blank">
                        View Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
