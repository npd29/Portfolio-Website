import image from '../../assets/images/lego.jpg';
import { SectionHeader } from '../section-header/section-header';
import './about.scss';

export function About() {
    return (
        <div className="container">
            <div className="about-section gradient">
                <h2>About</h2>
                <div className="about-container">
                    <div className="about-text">
                        <p>
                            I am a passionate and versatile software engineer
                            with a degree in Computer Science &amp; Information
                            Systems from the University of Vermont. I have a
                            strong foundation in C++, Java, Python, which I
                            gained while working as an Advanced Programming
                            Teaching Assistant. There, I also taught and
                            assisted students with the implementation and
                            understanding of data structures and algorithms. I
                            currently work at Trinnex, a CDM Smith subsidiary as
                            a software developer. There I have been working on
                            creating complex web-based applications using
                            Typescript, React, and implementing Azure functions.
                        </p>
                        <p>
                            In addition to my professional work, I have been
                            involved in academic and personal projects that
                            showcase my creativity and problem-solving skills.
                            One of my most recent projects is an LED matrix
                            inspired by the{' '}
                            <a href="https://tidbyt.com">TidByt</a> using
                            Raspberry Pi Pico and CircuitPython. I am in the
                            process of creating my own LED Matrix layout library
                            in C++ to have more control over memory management
                            and speed.
                        </p>
                        <p>
                            My passion lies in AI technologies and their
                            applications in various domains. In my free time, I
                            enjoy working on projects and online courses
                            pertaining to the subject, my latest being a Snake
                            AI using reinforcement learning. These projects help
                            me apply my theoretical knowledge and skills to
                            practical challenges. I am also in the process of
                            obtaining my AWS Certified Solutions Architect
                            Associate Certification to expand my knowledge on
                            cloud computing and AI.
                        </p>
                        <p>
                            I am a lifelong learner, curious by nature, and a
                            self-starter, always looking for new challenges and
                            opportunities to grow. To learn more about my
                            projects, please continue reading below.
                        </p>
                    </div>
                    <div className="image-container">
                        <div className="image-wrapper">
                            <img alt="Me building legos" src={image} />
                        </div>
                        <p className="image-caption">
                            8-Year-Old me (left) setting up our robot at the NH
                            FIRST LEGO Robotics competition, my first
                            introduction to engineering.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
