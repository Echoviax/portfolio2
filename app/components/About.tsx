import Image from "next/image";
import SkillCell from "./Skill";

export default function AboutPage() {
    return (
        <div id="about-page">
            <div className="about-cell" id="about-image">
                <Image 
                    width={1000}
                    height={1000}
                    src="/images/portrait.jpg" 
                    alt="me"
                />
            </div>
            <div className="about-cell" id="about-skills">
                <h2>Skills</h2>
                {/* These'll eventually be color/shape coded and have an indicator of proficiency */}
                <div id="about-skill-parent">
                    {/* Programming languages */}
                    <SkillCell name="HTML/CSS" category="language" level={3} />
                    <SkillCell name="C#" category="language" level={2} />
                    <SkillCell name="JavaScript" category="language" level={2} />
                    <SkillCell name="Python" category="language" level={2} />
                    <SkillCell name="Lua" category="language" level={1} />

                    {/* Frameworks & Tools */}
                    <SkillCell name="Next.js" category="framework" level={3} />
                    <SkillCell name="React" category="framework" level={3} />
                    <SkillCell name="Git" category="framework" level={2} />
                    <SkillCell name="FNA" category="framework" level={1} />

                    {/* Specific Apps */}
                    <SkillCell name="Figma" category="app" level={2} />
                    <SkillCell name="Github" category="app" level={2} />
                    <SkillCell name="Unity" category="app" level={2} />
                </div>
            </div>
            <div className="about-cell" id="about-about">
                <h2>More Info</h2>
                <div className="about-content">
                    <p>My name is Luna Berl. I am a game designer and developer, as well as a web designer and developer.</p>
                    <p>My focus is on the end-user, and as such, I prioritize accessibility and user experience over everything else in the projects that I make.</p>
                    <p>Outside of programming, I enjoy making and listening to music, astronomy, and learning languages.</p>
                </div>
            </div>
        </div>
    );
}