import {socialsLinks} from "@/data/socials";
import Linkedin from "@/assets/icons/Linkedin";
import Github from "@/assets/icons/Github";

export default function Socials() {
    return <div className="flex flex-row gap-4">
        <a
            href={socialsLinks.github}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Github size={24}/>
        </a>
        <a
            href={socialsLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Linkedin size={24}/>
        </a>
    </div>;
}