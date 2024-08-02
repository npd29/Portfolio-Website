import React, { Suspense, useState, useEffect } from 'react';
import { Skill } from '../../types';

type SkillProps = {
    skillKey: string;
    skill: Skill;
};

export function SkillIcon({ skillKey, skill }: SkillProps) {
    const [svgURL, setSvgURL] = useState<string>('');
    const [hovering, setHovering] = useState<boolean>(false);

    useEffect(() => {
        const loadSVG = () => {
            const url = new URL(`../icons/${skillKey}.svg`, import.meta.url)
                .href;
            setSvgURL(url);
        };
        loadSVG();
    }, [skillKey]);

    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="skill"
            key={skillKey}
        >
            {svgURL ? (
                <img
                    // style={!hovering ? { filter: 'grayscale(1)' } : undefined}
                    src={svgURL}
                    className="skill-icon"
                    alt={skill.name}
                />
            ) : (
                <div>Loading...</div>
            )}
            <h3>{skill.name}</h3>
        </div>
    );
}
