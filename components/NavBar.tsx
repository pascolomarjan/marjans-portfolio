"use client";

import Link from "next/link"
import {usePathname} from "next/navigation";
import Github from "@/assets/icons/Github";
import {socialsLinks} from "@/data/socials";
import Linkedin from "@/assets/icons/Linkedin";
import Socials from "@/components/Socials";

const menuRoutes = {
    "/": {"name": "Home"},
    "/about-me": {"name": "About Me"},
    "/previous-jobs": {"name": "Previous Jobs"},
    "/technical-skills": {"name": "Technical Skills"},
}

export function Navbar(
    {
        onLinkClick,
    }: {
        onLinkClick?: () => void;
    }
) {
    const currentPage = usePathname();

    return (
        <nav>
            <div className="flex gap-8 flex-col md:flex-row">
                {
                    Object.entries(menuRoutes).map(
                        ([path, {name}]) => {
                            const isCurrent = currentPage === path;
                            return (<Link key={path} href={path}
                                          className='transition-all-duration-300'
                                          onNavigate={onLinkClick}
                            >
                                <p className={isCurrent ? "underline" : "no-underline"}>{name}</p>
                            </Link>)
                        }
                    )
                }
                <Socials/>
            </div>
        </nav>
    )
}