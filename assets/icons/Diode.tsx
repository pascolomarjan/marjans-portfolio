export default function Diode(
    {size = 24}: { size?: number }
) {
    return (<svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="2" y1="12" x2="8" y2="12"/>
        <line x1="16" y1="12" x2="22" y2="12"/>
        <polygon points="8,7 16,12 8,17" fill="currentColor"/>
        <line x1="16" y1="7" x2="16" y2="17"/>
    </svg>);
}