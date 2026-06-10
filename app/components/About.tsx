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
                    <SkillCell name="C#" />
                    <SkillCell name="HTML/CSS" />
                    <SkillCell name="JavaScript" />
                    <SkillCell name="Python" />
                    <SkillCell name="Lua" />

                    {/* Frameworks */}
                    <SkillCell name="React" />
                    <SkillCell name="Git" />
                    
                    {/* Specific Apps */}
                    <SkillCell name="Figma" />
                    <SkillCell name="Github" />
                    <SkillCell name="Unity" />
                </div>
            </div>
            <div className="about-cell" id="about-about">
                <h2>About</h2>
                <div className="about-content">
                    <p>My name is Luna Berl. I am a game designer and developer, as well as a web designer and developer.</p>
                    <p>My focus is on the end-user, and as such, I prioritize accessibility and user experience over everything else in the projects that I make.</p>
                    <p>Outside of programming, I enjoy making and listening to music, astronomy, and learning languages.</p>
                </div>
            </div>
        </div>
    );
}