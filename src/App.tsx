import './App.css';
import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { Projects } from './components/projects';

function App() {
    return (
        <div className="App">
            <div className="content gradient">
                <h2>ABOUT</h2>
                <div className="about">
                    <p>
                        <br />I am a dedicated and highly motivated recent
                        graduate with a strong programming background and a
                        relentless pursuit of writing clean, efficient code.
                        Throughout my journey as a Computer Science &
                        Information Systems student at the University of
                        Vermont, I discovered my passion for programming and
                        made the switch from Business Administration to Software
                        Engineering.
                        <br />
                        <br />
                        Combining my business analytics knowledge with software
                        engineering, I possess a unique understanding of the
                        end-user and how they interact with the code I write.
                        This insight has been invaluable in developing impactful
                        projects, including an iOS application for the
                        University of Vermont Medical Center and a website for
                        the Schlesinger Global Family Enterprise Case
                        Competition, a prestigious event attracting universities
                        from over 27 countries worldwide. In my role as this
                        competition’s Senior Media & Communications Chair, I
                        successfully coordinated and executed effective
                        strategies to promote the competition and engage
                        participants. This work not only elevated the experience
                        for participants but also contributed to our receiving
                        of an{' '}
                        <a href="https://www.ffi.org/awards/international-award/">
                            International Achievement Award for Family Business
                            Research
                        </a>{' '}
                        from the Family Firm Institute.
                        <br />
                        <br />
                        In addition to my academic pursuits, I have thrived as
                        an Advanced Programming Teaching Assistant, honing my
                        skills in explaining complex concepts and debugging
                        code. To reinforce my learning, I embarked on personal
                        projects such as creating a platform for renters to
                        review apartments and hold landlords accountable in
                        Burlington's captive rental market. I am a constant
                        learner and am continuously challenging myself. My
                        current challenge that I’ve been working on is creating
                        a home monitoring system by using Arduino’s,
                        microcontrollers, sensors, and servos interconnected
                        through Bluetooth and WiFi.
                        <br />
                        <br />
                        While actively maintaining two jobs and juggling my
                        college commitments, I have remained driven and focused.
                        I am now eager to leverage my diverse experiences and
                        recent degree and embark on a rewarding career in the
                        Software Engineering field. For a detailed overview of
                        my projects, please continue reading below.
                        <br />
                        */
                    </p>
                    <div className="imageDiv">
                        <img src="images/npd_lego.JPG" />
                        <p>
                            8-Year-Old me (left) setting up our robot at the NH
                            FIRST LEGO Robotics competition, my first
                            introduction to engineering
                        </p>
                    </div>
                </div>
            </div>
            <div className="content project-section">
                <h2>PROJECTS</h2>
                <h3>Click on a project to expand</h3>
                <div className="popup">
                    <div className="popup-content"></div>
                    <span className="popup-close">&times;</span>
                </div>
                <Projects />
            </div>
            <div className="content contact">
                <h2>CONTACT</h2>
                <h3>Feel free to reach out for more information</h3>
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
