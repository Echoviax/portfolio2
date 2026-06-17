import './styles/Landing.css';
import { Metadata } from "next";
import LandingContent from "./components/LandingContent";

export const metadata: Metadata = {
    title: "Shards of Space",
    description: "Expressing myself through web design",
};

export default function Landing() {
    return (
        <LandingContent />
    )
}