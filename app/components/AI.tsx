export default function AIPage() {
    return (
        <div id="ai-page">
            <p style={{fontStyle: "italic", opacity: "0.75", fontSize: "0.95rem", marginBottom: "5px"}}>"Radium is the next big thing. If you aren't putting it in your water and toothpaste, you'll be left behind!"</p>
            <p>No LLMs (hereinafter referred to as AI) were used to assist in or completely generate any parts of this website or any projects on it.</p>
            <p>Due to — but not limited to — reasons like these</p>
            <div id="ai-content">
                <div className="ai-box">
                    <h2>Critical Thinking</h2>
                    <ul>
                        <li><a href="https://arxiv.org/html/2604.04721v2">AI Assistance Reduces Persistence and Hurts Independent Performance</a></li>
                        <li><a href="https://www.mdpi.com/2075-4698/15/1/6">AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking</a></li>
                    </ul>
                </div>
                <div className="ai-box">
                    <h2>Mortality</h2>
                    <ul>
                        <li><a href="https://aimortality.org/">Website that tracks deaths associated with AI</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Deaths_linked_to_chatbots">Deaths linked to chatbots - Wikipedia</a></li>
                    </ul>
                </div>
                <div className="ai-box">
                    <h2>Human Health</h2>
                    <ul>
                        <li><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/data-centers-face-increasing-infrasound-complaints-from-neighboring-communities-sounds-do-not-register-on-decibel-meters-but-irritate-local-citizens">Infrasound which actively harms people near data centers</a></li>
                        <li><a href="https://x.com/RepAOC/status/2057506424792490300">AOC showing water quality during construction of a data center</a></li>
                        <li><a href="https://apnews.com/article/ai-data-centers-environment-climate-footprint-a792f184a9f2833b5388dbae8b41ca95">Energy, water use and pollution of AI and data centers rival most countries</a></li>
                    </ul>
                </div>
                <div className="ai-box">
                    <h2>Other</h2>
                    <ul>
                        <li><a href="https://www.tumblr.com/dreaminginthedeepsouth/817865966907228160/darren-oconnor-timnit-gebru-was-fired-from">Timnit Gebru's Story</a></li>
                        <li><a href="https://cybersecuritynews.com/meta-trained-its-llama-ai-models-using-81-7-tb-of-books-stolen-from-torrent-shadow-libraries/">Meta Trained Its Llama AI Models Using 81.7 TB of Books Stolen From Torrent Shadow Libraries</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}