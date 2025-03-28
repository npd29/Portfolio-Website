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
                            I'm a passionate and versatile software engineer
                            with a degree in Computer Science & Information
                            Systems from the University of Vermont. My journey
                            in software development has been fueled by a love of
                            problem solving, constant curiosity, and a drive to
                            continuously expand my skill set.
                        </p>

                        <p>
                            I started my programming journey with C++, Java, and
                            Python in college, building a strong foundation.
                            Then, as an Advanced Programming Teaching Assistant,
                            I honed these skills further by helping students
                            debug their code and understand complex concepts in
                            data structures and algorithms. This experience not
                            only strengthened my technical abilities but also
                            improved my ability to communicate technical topics
                            at various levels. My interest in AI and ML began in
                            an evolutionary robotics course, where I developed a
                            simulated robot using evolutionary algorithms to
                            navigate obstacles. This sparked a lasting
                            fascination with AI, which I’ve continued to
                            explore.
                        </p>

                        <p>
                            Currently, I’m a Software Developer at Trinnex, a
                            subsidiary of CDM Smith, where I develop full-stack
                            web applications. I focus on creating scalable,
                            reusable components, designing APIs, optimizing
                            database queries, and ensuring seamless integration
                            between services. One of my most impactful projects
                            was a $2.2M Kansas DOT contract, where I transformed
                            large datasets into digestible dashboards. I also
                            collaborate closely with UX and Product teams to
                            implement user-focused features that enhance data
                            interpretation and usability. My passion for AI led
                            me to seek mentorship from the Data Science team,
                            where I’ve taken on projects and online courses to
                            deepen my expertise in this area.
                        </p>

                        <p>
                            Outside of work, I love taking on personal projects
                            that blend creativity with technical
                            problem-solving. One of my recent projects is an
                            IoT-based environmental monitoring display, inspired
                            by the Tidbyt, built using a Raspberry Pi Pico W and
                            Python. I’m also developing my own layout library in
                            C++ to optimize performance, giving me more control
                            over memory management and execution speed.
                        </p>

                        <p>
                            I strive to be a well-rounded developer with
                            expertise in full-stack development, AI, and cloud
                            computing. I’m particularly intrigued by the
                            evolving role of software developers as AI advances,
                            and how we can leverage AI as a tool alongside
                            domain expertise to create impactful, scalable
                            solutions. My goal is to bridge the gap between
                            front-end and back-end development, infrastructure,
                            and emerging technologies.
                        </p>

                        <p>
                            I'm a lifelong learner, always seeking out new
                            challenges that push me to grow as an engineer. The
                            excitement of discovering new solutions and pushing
                            the boundaries of what's possible keeps me energized
                            and eager to see what challenges tomorrow brings. If
                            you're interested in my work, feel free to explore
                            my projects below.
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
