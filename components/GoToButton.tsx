import clsx from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Diode from "@/assets/icons/Diode";

interface GoToButtonProps {
    text?: string
    size?: number;
    link?: string;
    className?: string;
}

export default function GoToButton({ text = "", size = 24, link, className = "" }: GoToButtonProps) {
    const defaultClass = "flex flex-row items-center gap-2";

    const Content = (
        <>
            <h6>{text}</h6>
            <Diode size={size}/>
        </>
    );

    if (link) {
        return (
            <Link href={link}>
                <div className={twMerge(clsx(defaultClass, className))}>
                    {Content}
                </div>
            </Link>
        );
    }

    return (
        <div className={twMerge(clsx(defaultClass, className))}>
            {Content}
        </div>
    );
};