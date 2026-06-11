import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../types/Link";
import { faArrowUpRightFromSquare, faShare } from "@fortawesome/free-solid-svg-icons";

export default function LinkComponent({link}: {link: Link}) {
    return (
        <a 
            href={link.href} 
            target={link.newTab ? "_blank" : ""}
            className="link-component"
        >
            {link.text}
            {link.newTab ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> : null}
        </a>
    );
}