import './popup.css';
import close from '../../assets/images/close.svg';
import { Project } from '../../types';
import { Skills } from '../../store';
import { SkillIcon } from '../skills/skillIcon';
interface PopupProps {
    project: Project;
    showPopup: (show: boolean) => void;
}
export function Popup({ project, showPopup }: PopupProps) {
    return (
        <>
            {' '}
            <div className="overlay"></div>
            <div className="popup" id="popup">
                <div className="popup-content">
                    <img
                        src={close}
                        alt="close"
                        className="popup-close"
                        onClick={() => showPopup(false)}
                    ></img>
                    <h3>{project.name}</h3>
                    <div className="languages">
                        {project.languages.map((language, key) => {
                            return language in Skills ? (
                                <SkillIcon
                                    key={key}
                                    skillKey={language}
                                    skill={
                                        Skills[language as keyof typeof Skills]
                                    }
                                    size={1}
                                />
                            ) : null;
                        })}
                    </div>
                    <div className="descriptionDiv">
                        <p className="description" id="description">
                            {project.description}
                        </p>
                        <div className="projectLinks">
                            <a
                                className="projectLink codeLink"
                                href={project.githubLink}
                            >
                                &lt;/View Code&gt;
                            </a>
                            <a
                                className="projectLink"
                                href={project.finishedLink}
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
