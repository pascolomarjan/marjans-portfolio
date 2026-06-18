import {iconsMap} from "@/data/icons-map";

export default function Icon({name, size = 24}: { name: string, size?: number }) {
    const IconComponent = iconsMap[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in ICON_MAP`);
        return null; // Or a fallback generic icon
    }

    return <IconComponent size={size} />;
}