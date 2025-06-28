import linkedinLogo from '../assets/images/linkedin-logo.png';
import githubLogo from '../assets/images/github-logo.png';
import { SectionHeader } from './section-header/section-header';
import './contact/contact.scss';

export function Contact() {
    return (
        <div className="container">
            <div className="contact-section">
                <SectionHeader
                    title="Contact"
                    description="Let's connect and discuss opportunities"
                />

                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-message">
                            {/* <p>
                                I'm always excited to connect with fellow
                                developers, potential collaborators, and anyone
                                interested in my work. Whether you have a
                                project in mind, want to discuss tech, or just
                                say hello, I'd love to hear from you.
                            </p> */}
                        </div>

                        <div className="contact-links">
                            <a
                                className="contact-link linkedin"
                                href="https://www.linkedin.com/in/noeldesmarais/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="link-icon">
                                    <img src={linkedinLogo} alt="LinkedIn" />
                                </div>
                                <div className="link-content">
                                    <h4>LinkedIn</h4>
                                    <p>Connect professionally</p>
                                </div>
                            </a>

                            <a
                                className="contact-link github"
                                href="https://github.com/npd29"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="link-icon">
                                    <img src={githubLogo} alt="GitHub" />
                                </div>
                                <div className="link-content">
                                    <h4>GitHub</h4>
                                    <p>Explore my code</p>
                                </div>
                            </a>
                        </div>

                        <div className="additional-actions">
                            {/* <a className="resume-link" href="#" target="_blank">
                                <span>View Resume</span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 17L17 7M17 7H8M17 7V16"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
