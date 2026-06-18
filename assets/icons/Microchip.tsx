export default function Microchip({size = 24}: {size?: number}) {
    return(
        <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="50" height="50" rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>

            <line x1="35" y1="15" x2="35" y2="25" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="50" y1="15" x2="50" y2="25" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="65" y1="15" x2="65" y2="25" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>

            <line x1="35" y1="75" x2="35" y2="85" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="50" y1="75" x2="50" y2="85" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="65" y1="75" x2="65" y2="85" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>

            <line x1="15" y1="35" x2="25" y2="35" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="15" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="15" y1="65" x2="25" y2="65" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>

            <line x1="75" y1="35" x2="85" y2="35" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="75" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="75" y1="65" x2="85" y2="65" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>

            <defs>
                <mask id="gear-mask">
                    <rect x="0" y="0" width="100" height="100" fill="white"/>
                    <circle cx="50" cy="50" r="10" fill="black"/> </mask>
            </defs>

            <g mask="url(#gear-mask)">
                <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="4"/>

                <rect x="48" y="34" width="4" height="6" fill="currentColor" transform="rotate(0 50 50)"/>
                <rect x="48" y="34" width="4" height="6" fill="currentColor" transform="rotate(45 50 50)"/>
                <rect x="48" y="34" width="4" height="6" fill="currentColor" transform="rotate(90 50 50)"/>
                <rect x="48" y="34" width="4" height="6" fill="currentColor" transform="rotate(135 50 50)"/>
                <rect x="48" y="34" width="4" height="6" fill="currentColor" transform="rotate(180 50 50)"/>
                <rect x="48" y="34" width="4" height="6" fill="currentColor" transform="rotate(225 50 50)"/>
                <rect x="48" y="34" width="4" height="6" fill="currentColor" transform="rotate(270 50 50)"/>
                <rect x="48" y="34" width="4" height="6" fill="currentColor" transform="rotate(315 50 50)"/>
            </g>
        </svg>
    ) }