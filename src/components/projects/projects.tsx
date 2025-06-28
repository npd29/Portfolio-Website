import { projects, Skills } from '../../store';
import { Project, ProjectCategory } from '../../types';
import { SectionHeader } from '../section-header/section-header';
import { SkillIcon } from '../skills/skillIcon';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogBody,
    DialogFooter
} from '../ui/dialog';
import './projects.css';
import { useState, useMemo, useEffect, useRef } from 'react';

export function Projects() {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    // Categorize projects
    const categorizedProjects = useMemo(() => {
        const categories = {
            featured: projects.filter((p) => p.isVisible && p.isFeatured),
            web: projects.filter(
                (p) => p.isVisible && p.categories.includes('web')
            ),
            cloud: projects.filter(
                (p) => p.isVisible && p.categories.includes('cloud')
            ),
            ai: projects.filter(
                (p) => p.isVisible && p.categories.includes('ai')
            ),
            embedded: projects.filter(
                (p) => p.isVisible && p.categories.includes('embedded')
            ),
            all: projects.filter((p) => p.isVisible)
        };
        return categories;
    }, []);

    // Filter projects based on selected tab
    const filteredProjects = useMemo(() => {
        if (activeTab === 'all') return projects.filter((p) => p.isVisible);
        if (activeTab === 'featured') return categorizedProjects.featured;

        const categoryMap: { [key: string]: ProjectCategory } = {
            web: 'web',
            cloud: 'cloud',
            ai: 'ai',
            embedded: 'embedded'
        };

        const category = categoryMap[activeTab];
        return projects.filter(
            (p) => p.isVisible && p.categories.includes(category)
        );
    }, [activeTab, projects]);

    // Count projects for each tab
    const getTabCount = (tabKey: string) => {
        if (tabKey === 'all') return projects.filter((p) => p.isVisible).length;
        if (tabKey === 'featured') return categorizedProjects.featured.length;

        const categoryMap: { [key: string]: ProjectCategory } = {
            web: 'web',
            cloud: 'cloud',
            ai: 'ai',
            embedded: 'embedded'
        };

        const category = categoryMap[tabKey];
        return projects.filter(
            (p) => p.isVisible && p.categories.includes(category)
        ).length;
    };

    const filters = [
        {
            key: 'all',
            label: 'All Projects',
            count: getTabCount('all')
        },
        {
            key: 'featured',
            label: 'Featured',
            count: getTabCount('featured')
        },
        {
            key: 'web',
            label: 'Web Development',
            count: getTabCount('web')
        },
        {
            key: 'cloud',
            label: 'Cloud & APIs',
            count: getTabCount('cloud')
        },
        {
            key: 'ai',
            label: 'AI & Algorithms',
            count: getTabCount('ai')
        },
        {
            key: 'embedded',
            label: 'Hardware & Embedded',
            count: getTabCount('embedded')
        }
    ];

    return (
        <>
            <div className="content project-section" ref={sectionRef}>
                <SectionHeader title="Projects" description="Explore my work" />

                {/* Filter Tabs */}
                <div className="project-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            className={`filter-tab ${
                                activeTab === filter.key ? 'active' : ''
                            }`}
                            onClick={() => setActiveTab(filter.key)}
                        >
                            {filter.label}
                            <span className="filter-count">{filter.count}</span>
                        </button>
                    ))}
                </div>

                {/* Featured Projects Showcase */}
                {activeTab === 'all' ? (
                    <div className="featured-section">
                        <h3 className="section-subtitle">Featured Work</h3>
                        <div className="featured-projects">
                            {categorizedProjects.featured
                                .slice(0, 3)
                                .map((project, index) => (
                                    <div
                                        key={`featured-${index}`}
                                        className="featured-project"
                                        onClick={() =>
                                            handleProjectClick(project)
                                        }
                                    >
                                        <div className="featured-project-header">
                                            <h4>{project.name}</h4>
                                            <div className="featured-project-links">
                                                {project.finishedLink && (
                                                    <span className="project-link-icon live">
                                                        Live
                                                    </span>
                                                )}
                                                {project.githubLink && (
                                                    <span className="project-link-icon code">
                                                        Code
                                                    </span>
                                                )}
                                                {project.inDevelopment && (
                                                    <span className="project-link-icon dev">
                                                        Dev
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="featured-project-caption">
                                            {project.caption}
                                        </p>

                                        <div className="featured-project-tech">
                                            {project.languages.map(
                                                (
                                                    language: keyof typeof Skills,
                                                    key: number
                                                ) =>
                                                    language in Skills ? (
                                                        <SkillIcon
                                                            key={key}
                                                            skillKey={
                                                                language as string
                                                            }
                                                            skill={
                                                                Skills[
                                                                    language as keyof typeof Skills
                                                                ]
                                                            }
                                                            size={0.9}
                                                        />
                                                    ) : null
                                            )}
                                        </div>

                                        <div className="featured-project-overlay">
                                            <span>View Details</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ) : null}

                {/* Projects Grid */}
                <div className="projects-grid-section">
                    {activeTab !== 'featured' && (
                        <h3 className="section-subtitle">
                            {activeTab === 'all'
                                ? 'All Projects'
                                : filters.find((f) => f.key === activeTab)
                                      ?.label}
                        </h3>
                    )}
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => {
                            // Skip featured projects in main grid if showing all
                            if (
                                activeTab === 'all' &&
                                categorizedProjects.featured.includes(project)
                            ) {
                                return null;
                            }

                            return (
                                <div
                                    key={index}
                                    className="project-card"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <div className="project-card-header">
                                        <h4>{project.name}</h4>
                                        <div className="project-status">
                                            {project.finishedLink && (
                                                <span className="status-live">
                                                    Live
                                                </span>
                                            )}
                                            {project.githubLink && (
                                                <span className="status-code">
                                                    Code
                                                </span>
                                            )}
                                            {project.inDevelopment && (
                                                <span className="status-dev">
                                                    Dev
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="project-card-description">
                                        {project.caption}
                                    </p>

                                    <div className="project-card-tech">
                                        {project.languages.map(
                                            (language: string, key: number) =>
                                                language in Skills ? (
                                                    <SkillIcon
                                                        key={key}
                                                        skillKey={language}
                                                        skill={
                                                            Skills[
                                                                language as keyof typeof Skills
                                                            ]
                                                        }
                                                        size={0.9}
                                                    />
                                                ) : null
                                        )}
                                    </div>

                                    <div className="project-card-overlay">
                                        <span>View Details</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Single Dialog instance */}
                <Dialog
                    open={selectedProject !== null}
                    onOpenChange={() => setSelectedProject(null)}
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{selectedProject?.name}</DialogTitle>
                            <DialogClose />
                        </DialogHeader>

                        <DialogBody>
                            <div className="project-modal-skills">
                                {selectedProject?.languages.map(
                                    (language, key) => {
                                        return language in Skills ? (
                                            <div
                                                className="skill-badge"
                                                key={key}
                                            >
                                                <SkillIcon
                                                    skillKey={
                                                        language as string
                                                    }
                                                    skill={
                                                        Skills[
                                                            language as keyof typeof Skills
                                                        ]
                                                    }
                                                    size={1}
                                                />
                                            </div>
                                        ) : null;
                                    }
                                )}
                            </div>

                            <div className="project-modal-body">
                                <p className="project-modal-description">
                                    {selectedProject?.description}
                                </p>
                            </div>
                        </DialogBody>

                        <DialogFooter>
                            <div className="project-modal-actions">
                                {selectedProject?.githubLink && (
                                    <a
                                        className="project-link code-link"
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        &lt;/View Code&gt;
                                    </a>
                                )}
                                {selectedProject?.finishedLink && (
                                    <a
                                        className="project-link demo-link"
                                        href={selectedProject.finishedLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                )}
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}
