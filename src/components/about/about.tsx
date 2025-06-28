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
                            I’m an endlessly curious and adaptable engineer,
                            passionate about building practical AI solutions
                            that empower both developers and end users. My
                            journey began with a solid foundation in Computer
                            Science & Information Systems from the University of
                            Vermont, where I first discovered the thrill of
                            problem solving and the power of code.
                        </p>
                        <p>
                            My early programming experience spanned C++, Java,
                            and Python. As an Advanced Programming Teaching
                            Assistant, I deepened my understanding by helping
                            others master complex data structures and
                            algorithms. This not only sharpened my technical
                            skills but also taught me how to communicate
                            intricate concepts clearly, a skill that’s proven
                            invaluable as AI continues to evolve.
                        </p>
                        <p>
                            My fascination with AI started in an evolutionary
                            robotics course, where I built a simulated robot
                            that learned to navigate obstacles through
                            evolutionary algorithms. That project sparked a
                            lasting interest in artificial intelligence and
                            motivated me to keep finding new ways to apply AI to
                            real-world challenges.
                        </p>
                        <p>
                            After college, I honed my full-stack engineering
                            skills at Trinnex, leading data-driven projects for
                            enterprise clients and working closely with UX and
                            Product teams to deliver user-focused solutions. My
                            passion for AI led me to collaborate with data
                            scientists and pursue advanced coursework, deepening
                            my expertise in machine learning and intelligent
                            systems.
                        </p>
                        <p>
                            Today, I am a Software Engineer at Maven AGI,
                            focused on AI Developer Experience. Here, I build
                            intuitive tools and platforms that make it easy for
                            anyone, technical or not, to harness the power of
                            AI. My work bridges the gap between cutting-edge
                            language models and seamless developer experiences,
                            enabling rapid integration and innovation across
                            enterprise environments. I enjoy the challenge of
                            hiding AI complexity behind elegant interfaces and
                            get energy from collaborating with talented teams to
                            push the boundaries of what’s possible in applied
                            AI.
                        </p>
                        <p>
                            Outside of work, I love tackling personal projects
                            that blend creativity and technology, from designing
                            IoT-based environmental monitors to developing
                            high-performance C++ libraries. I am particularly
                            fascinated by the evolving role of software
                            engineers as AI transforms our industry, and I am
                            committed to lifelong learning as both a personal
                            philosophy and a professional necessity.
                        </p>
                        <p>
                            I’m always eager to connect with others who share a
                            passion for AI, developer experience, and building
                            impactful solutions. If you’re interested in my
                            work, feel free to explore my projects below.
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
