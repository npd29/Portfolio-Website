import { projects, Skills } from '../../store';
import { Project } from '../../types';
import { Popup } from '../popup/popup';
import { SectionHeader } from '../section-header/section-header';
import { SkillIcon } from '../skills/skillIcon';
import './projects.css';
import { useEffect, useState } from 'react';

export function Projects() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project>(
        projects[0]
    );
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
            document.body.style.overflowX = 'hidden';
        }
    }, [showPopup]);

    return (
        <div className="content project-section">
            <SectionHeader
                title="Projects"
                description="Click on a project to expand"
            />
            <div id="fullscreen" className="fullscreen"></div>
            {showPopup && (
                <Popup
                    project={selectedProject}
                    showPopup={setShowPopup}
                ></Popup>
            )}
            <div className="projects">
                {projects.map((project, index) => {
                    return (
                        project.isVisible && (
                            <div
                                key={index}
                                className="project"
                                onClick={() => {
                                    setSelectedProject(project);
                                    setShowPopup(true);
                                }}
                            >
                                <h3>{project.name}</h3>
                                <div className="languages">
                                    {project.languages.map((language, key) => {
                                        return language in Skills ? (
                                            <SkillIcon
                                                key={key}
                                                skillKey={language}
                                                skill={
                                                    Skills[
                                                        language as keyof typeof Skills
                                                    ]
                                                }
                                                size={1}
                                            />
                                        ) : null;
                                    })}
                                </div>
                                <p className="caption">{project.caption}</p>
                                <p className="description">
                                    {project.description}
                                </p>
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
}
