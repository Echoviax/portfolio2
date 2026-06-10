// that sounds like skin cell...
type SkillCategory = 'language' | 'framework' | 'app';
type SkillLevel = 1 | 2 | 3;

export default function SkillCell({ name, category, level }: {
    name: string;
    category: SkillCategory;
    level: SkillLevel;
}) {
    return (
        <div className={`skill-cell skill-${category}`}>
            {name}

            <span className="sr-only">, Skill level: {level} out of 3</span>

            <div className="skill-level-dots" aria-hidden="true">
                {[1, 2, 3].map((dot) => (
                    <div 
                        key={dot} 
                        className={`skill-dot ${dot <= level ? 'filled' : 'empty'}`}
                    />
                ))}
            </div>
        </div>
    );
}