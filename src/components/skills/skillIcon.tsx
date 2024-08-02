import React, {
    lazy,
    LazyExoticComponent,
    Suspense,
    useEffect,
    useState
} from 'react';
import { Skill } from '../../types';

type SkillProps = {
    skillKey: string;
    skill: Skill;
};

const importSkillComponent = (
    key: string
): LazyExoticComponent<React.FC<any>> => {
    return lazy(() => import(`../../components/icons/${key}.svg`));
};

export function SkillIcon({ skillKey, skill }: SkillProps) {
    const [SkillComponent, setSkillComponent] = useState<LazyExoticComponent<
        React.FC<any>
    > | null>(null);

    useEffect(() => {
        const loadComponent = () => {
            const component = importSkillComponent(skillKey);
            setSkillComponent(() => component);
        };
        loadComponent();
    }, [skillKey]);

    return (
        <div className="skill" key={skillKey}>
            <Suspense fallback={<div>Loading...</div>}>
                {SkillComponent && <SkillComponent />}
            </Suspense>
            <h3>{skill.name}</h3>
        </div>
    );
}
