import image from '../../assets/images/lego.jpg';
import './about.css';
export function About() {
    return (
        <div className="content gradient">
            <div className="heading-container">
                <h2>ABOUT</h2>
            </div>
            <div className="about">
                <p>
                    <br />I am a dedicated and highly motivated recent graduate
                    with a strong programming background and a relentless
                    pursuit of writing clean, efficient code. Throughout my
                    journey as a Computer Science & Information Systems student
                    at the University of Vermont, I discovered my passion for
                    programming and made the switch from Business Administration
                    to Software Engineering.
                    <br />
                    <br />
                    Combining my business analytics knowledge with software
                    engineering, I possess a unique understanding of the
                    end-user and how they interact with the code I write. This
                    insight has been invaluable in developing impactful
                    projects, including an iOS application for the University of
                    Vermont Medical Center and a website for the Schlesinger
                    Global Family Enterprise Case Competition, a prestigious
                    event attracting universities from over 27 countries
                    worldwide. In my role as this competition’s Senior Media &
                    Communications Chair, I successfully coordinated and
                    executed effective strategies to promote the competition and
                    engage participants. This work not only elevated the
                    experience for participants but also contributed to our
                    receiving of an{' '}
                    <a href="https://www.ffi.org/awards/international-award/">
                        International Achievement Award for Family Business
                        Research
                    </a>{' '}
                    from the Family Firm Institute.
                    <br />
                    <br />
                    In addition to my academic pursuits, I have thrived as an
                    Advanced Programming Teaching Assistant, honing my skills in
                    explaining complex concepts and debugging code. To reinforce
                    my learning, I embarked on personal projects such as
                    creating a platform for renters to review apartments and
                    hold landlords accountable in Burlington's captive rental
                    market. I am a constant learner and am continuously
                    challenging myself. My current challenge that I’ve been
                    working on is creating a home monitoring system by using
                    Arduino’s, microcontrollers, sensors, and servos
                    interconnected through Bluetooth and WiFi.
                    <br />
                    <br />
                    While actively maintaining two jobs and juggling my college
                    commitments, I have remained driven and focused. I am now
                    eager to leverage my diverse experiences and recent degree
                    and embark on a rewarding career in the Software Engineering
                    field. For a detailed overview of my projects, please
                    continue reading below.
                    <br />
                    */
                </p>
                <div className="image-container">
                    <img alt="Me building legos" src={image} />

                    <p>
                        8-Year-Old me (left) setting up our robot at the NH
                        FIRST LEGO Robotics competition, my first introduction
                        to engineering
                    </p>
                </div>
            </div>
        </div>
    );
}
