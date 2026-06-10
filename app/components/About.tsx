import Image from "next/image";

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
            </div>
            <div className="about-cell" id="about-about">
                <h2>About</h2>
            </div>
        </div>
    );
}