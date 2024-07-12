import { signal } from '@preact/signals';
import { ReactElement } from 'react';
import './skill.scss';

type SkillProps = {
    title: String;
    icon: ReactElement;
};
export function Skill({ title, icon }: SkillProps) {
    const isExpanded = signal(false);
    return (
        <div className="skill">
            {icon}
            {isExpanded.value && <p>{title}</p>}
        </div>
    );
}
