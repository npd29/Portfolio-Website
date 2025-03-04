import './popup.scss';
import { Project } from '../../types';
import { Skills } from '../../store';
import { SkillIcon } from '../skills/skillIcon';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useEffect, useRef } from 'react';

interface PopupProps {
    project: Project;
    showPopup: (show: boolean) => void;
}

export function Popup({ project, showPopup }: PopupProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                showPopup(false);
            }
        };

        // Prevent body scrolling when popup is open
        document.body.style.overflow = 'hidden';
        document.addEventListener('mousedown', handleClickOutside);

        // Add entrance animation class after component mounts
        const timer = setTimeout(() => {
            if (popupRef.current) {
                popupRef.current.classList.add('popup-visible');
            }
        }, 10);

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleClickOutside);
            clearTimeout(timer);
        };
    }, [showPopup]);

    const handleClose = () => {
        if (popupRef.current) {
            popupRef.current.classList.remove('popup-visible');
            popupRef.current.classList.add('popup-hiding');

            // Wait for exit animation to complete
            setTimeout(() => {
                showPopup(false);
            }, 300);
        }
    };

    return (
        <>
            <div className="popup-overlay"></div>
            <div className="popup" ref={popupRef}>
                <div className="popup-content">
                    <div className="popup-header">
                        <h3 className="popup-title">{project.name}</h3>
                        <IconButton
                            className="close-button"
                            aria-label="close popup"
                            onClick={handleClose}
                        >
                            <CloseRoundedIcon />
                        </IconButton>
                    </div>

                    <div className="popup-skills">
                        {project.languages.map((language, key) => {
                            return language in Skills ? (
                                <div className="skill-badge" key={key}>
                                    <SkillIcon
                                        skillKey={language}
                                        skill={
                                            Skills[
                                                language as keyof typeof Skills
                                            ]
                                        }
                                        size={1}
                                    />
                                </div>
                            ) : null;
                        })}
                    </div>

                    <div className="popup-body">
                        <p className="popup-description">
                            {project.description}
                        </p>
                    </div>

                    <div className="popup-actions">
                        {project.githubLink && (
                            <a
                                className="project-link code-link"
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &lt;/View Code&gt;
                            </a>
                        )}
                        {project.finishedLink && (
                            <a
                                className="project-link demo-link"
                                href={project.finishedLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
