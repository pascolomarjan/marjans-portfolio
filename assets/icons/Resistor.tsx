export default function Resistor({size = 24}: { size?: number}) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="4"/>
            <circle cx="90" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="4"/>

            <line x1="15" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="4"/>
            <line x1="70" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="4"/>

            <polyline points="30,50 35,35 45,65 55,35 65,65 70,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
}