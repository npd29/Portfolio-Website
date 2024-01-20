import { projects } from '../types';

export function Projects() {
    return (
        <>
            {projects.map((project) => {
                return (
                    project.isVisible && (
                        <div className="project">
                            <h3>{project.name}</h3>
                            <div className="languages">
                                <p className="language">{project.languages}</p>
                            </div>
                            <p className="tools">{project.caption}</p>
                            <div className="descriptionDiv">
                                <p className="description">
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
        </>
    );
}
