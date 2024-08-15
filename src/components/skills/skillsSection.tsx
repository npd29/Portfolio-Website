import React from 'react';
import { Skills } from '../../store';
import './skills.scss';
import { SkillIcon } from './skillIcon';

function SkillsSection() {
    return (
        <div className="skills">
            {Object.entries(Skills).map(([key, skill]) => {
                if (skill.visible) {
                    return (
                        <SkillIcon
                            key={key}
                            skillKey={key}
                            skill={skill}
                            size={1.5}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}
export default SkillsSection;
