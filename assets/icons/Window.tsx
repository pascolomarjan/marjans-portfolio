export default function Window({size = 24}: {size?: number}) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="70" height="70" rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>

            <line x1="15" y1="30" x2="85" y2="30"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"/>

            <circle cx="25" cy="22.5" r="2" fill="currentColor"/>
            <circle cx="32" cy="22.5" r="2" fill="currentColor"/>
            <circle cx="39" cy="22.5" r="2" fill="currentColor"/>

            <line x1="25" y1="42" x2="45" y2="42" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="25" y1="52" x2="52" y2="52" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="25" y1="62" x2="37" y2="62" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <line x1="25" y1="72" x2="42" y2="72" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>

    );
}