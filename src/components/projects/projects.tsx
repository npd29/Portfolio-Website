import { projects, Skills } from '../../store';
import { Project } from '../../types';
import { Popup } from '../popup/popup';
import { SectionHeader } from '../section-header/section-header';
import { SkillIcon } from '../skills/skillIcon';
import './projects.css';
import { useState } from 'react';

export function Projects() {
    const [content, setContent] = useState<React.ReactNode>(null);

    function expandProject(e: React.MouseEvent<HTMLDivElement>, index: number) {
        updateContent(projects[index]);
    }

    const updateContent = (project: Project | undefined) => {
        if (project) {
            setContent(
                <>
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
                    <p className="tools">{project.caption}</p>
                    <p className="description">{project.description}</p>
                    <div className="projectLinks">
                        {project.githubLink ? (
                            <a
                                className="projectLink codeLink"
                                href={project.githubLink}
                            >
                                &lt;/View Code&gt;
                            </a>
                        ) : null}
                        {project.finishedLink ? (
                            <a
                                className="projectLink"
                                href={project.finishedLink}
                            >
                                View Project
                            </a>
                        ) : null}
                    </div>
                </>
            );
            document.getElementById('fullscreen')!.style.display = 'block';
        }
    };

    return (
        <div className="content project-section">
            <SectionHeader
                title="Projects"
                description="Click on a project to expand"
            />
            <div id="fullscreen" className="fullscreen"></div>
            {content && (
                <Popup content={content!} setContent={setContent}></Popup>
            )}
            <div className="projects">
                {projects.map((project, index) => {
                    return (
                        project.isVisible && (
                            <div
                                key={index}
                                className="project"
                                onClick={(e) => expandProject(e, index)}
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
                                <p className="tools">{project.caption}</p>
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
                        )
                    );
                })}
            </div>
        </div>
    );
}
