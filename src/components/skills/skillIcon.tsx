import {
    lazy,
    LazyExoticComponent,
    Suspense,
    useEffect,
    useState
} from 'react';
import { Skill } from '../../types';
import React from 'react';
import { listeners } from 'process';

type SkillProps = {
    skillKey: any;
    skill: Skill;
};
const importSkillComponent = (
    key: string
): LazyExoticComponent<React.FC<any>> => {
    return lazy(() =>
        import(`../../components/icons/${key}Icon`).then((module) => ({
            default: module[`${key.charAt(0).toUpperCase() + key.slice(1)}Icon`]
        }))
    );
};

export function SkillIcon({ skillKey, skill }: SkillProps) {
    const [hovering, setHovering] = useState(false);
    const [SkillComponent, setSkillComponent] = useState<LazyExoticComponent<
        React.FC<any>
    > | null>(null);
    useEffect(() => {
        const loadComponent = async () => {
            const component = importSkillComponent(skillKey);
            setSkillComponent(() => component);
        };
        loadComponent();
    }, [skillKey]);
    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="skill"
            key={skillKey}
        >
            <Suspense fallback={<div>Loading...</div>}>
                {SkillComponent && (
                    <SkillComponent
                        light1="#aaa"
                        dark1="#888"
                        light2="#aaa"
                        dark2="#888"
                        background="#fff"
                        hovering={hovering} // Adjust this state as needed
                    />
                )}
            </Suspense>

            <h3>{skill.name}</h3>
        </div>
    );
}
