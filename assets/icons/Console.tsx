export default function Console ({size = 24}: {size?: number}) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="70" height="70" rx="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>

                <polyline points="30,32 38,40 30,48"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"/>

                <line x1="45" y1="48" x2="55" y2="48"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"/>
        </svg>

    );
}