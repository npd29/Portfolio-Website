import linkedinLogo from '../assets/images/linkedin-logo.png';
import githubLogo from '../assets/images/github-logo.png';
import { SectionHeader } from './section-header/section-header';

export function Contact() {
    return (
        <div className="content contact">
            <SectionHeader
                title="Contact"
                description="Feel free to reach out for more information"
            />

            <div className="contact-links">
                <a
                    href="https://www.linkedin.com/in/noeldesmarais/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedinLogo} alt="LinkedIn" />
                </a>
                <a
                    href="https://github.com/npd29"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={githubLogo} alt="Github.com" />
                </a>
                <a className="resume" href="resume10.2.pdf" target="_blank">
                    View Resume
                </a>
            </div>
        </div>
    );
}
