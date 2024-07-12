import { opacity } from '../hero/constants';
import { Skill } from './skill';

function Skills() {
    return (
        <div style={{ margin: '1em' }}>
            <Skill
                style={{ opacity: '75%' }}
                title="TypeScript"
                color="#222"
                color2="var(--teal)"
            ></Skill>
        </div>
    );
}
export default Skills;
