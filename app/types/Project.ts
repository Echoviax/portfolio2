import { ProjectCategory } from "../components/ProjectCategory";
import { Link } from "./Link";

export type Project = {
    id: number;
    title: string;
    description: string;
    links?: Link[];
    categories?: ProjectCategory[];
    dates?: string;
    imagePath?: string;
};